import { PrismaClient } from "@prisma/client";
import { getEnv } from "./env";

const prismaClientSingleton = () => {
  const env = getEnv();

  return new PrismaClient({
    datasources: {
      db: {
        url: env.DATABASE_URL,
      },
    },
    log: env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });
};

const globalForPrisma = globalThis;

let _db;
function getPrisma() {
  if (!_db) {
    _db = globalForPrisma.prisma ?? prismaClientSingleton();
    if (process.env.NODE_ENV !== "production") {
      globalForPrisma.prisma = _db;
    }
  }
  return _db;
}

const prismaHandler = {
  get(_, prop) {
    return getPrisma()[prop];
  },
};

export const db = new Proxy(prismaHandler, prismaHandler);
