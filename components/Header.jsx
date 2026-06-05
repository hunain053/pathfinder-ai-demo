"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useAuth, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { LayoutDashboard, ChevronRight, Menu, X, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { ModeToggle } from "./ui/Modetoggle";
import { useTheme } from "next-themes";
import { getUserOnboardingStatus } from "@/actions/user";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { id: "features", label: "Features" },
  { id: "how-it-works", label: "How It Works" },
  { id: "stats", label: "Stats" },
];

export default function Header() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { isSignedIn } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [clerkKeyless, setClerkKeyless] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isHomePage = pathname === "/";

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = NAV_LINKS.map((link) => ({
        id: link.id,
        element: document.getElementById(link.id),
      }));
      const scrollPosition = window.scrollY + 120;
      for (const section of sections) {
        if (section.element) {
          const { offsetTop, offsetHeight } = section.element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let active = true;
    fetch("/api/dev/status")
      .then((res) => res.json())
      .then((data) => { if (active && data?.clerkKeyless) setClerkKeyless(true); })
      .catch(() => {});
    return () => { active = false; };
  }, []);

  const logoSrc = mounted && resolvedTheme === "dark" ? "/white-logo.png" : "/logo.png";

  const go = async (href) => {
    if (!isSignedIn) return router.push("/sign-in");
    try {
      const { isOnboarded } = await getUserOnboardingStatus();
      router.push(isOnboarded ? href : "/onboarding");
    } catch {
      router.push(href);
    }
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const pos = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: pos, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-2.5 bg-background/70 backdrop-blur-2xl border-b border-border/40 shadow-soft"
            : "py-4 bg-transparent"
        }`}
      >
        {clerkKeyless && (
          <div className="absolute top-0 left-0 w-full bg-yellow-400/90 text-yellow-900 text-[10px] font-bold py-0.5 text-center uppercase tracking-widest z-[60]">
            Keyless Mode Active
          </div>
        )}
        <nav className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative h-9 w-9 overflow-hidden rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 ring-1 ring-primary/10 group-hover:ring-primary/30">
              <Image
                src={logoSrc}
                alt="Pathfinder AI Logo"
                width={28}
                height={28}
                className="h-6 w-6 object-contain transition-transform duration-500 group-hover:scale-110"
                priority
              />
            </div>
            <span className="text-lg font-bold tracking-tight text-foreground">
              Pathfinder <span className="text-primary">AI</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {isHomePage ? (
              NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    activeSection === link.id
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground/80 hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {link.label}
                </button>
              ))
            ) : (
              <Link
                href="/"
                className="px-4 py-2 text-sm font-medium text-muted-foreground/80 hover:text-foreground transition-colors"
              >
                Home
              </Link>
            )}
          </div>

          <div className="flex items-center gap-2">
            <ModeToggle />

            <div className="hidden sm:flex items-center gap-2">
              <SignedIn>
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-2 text-muted-foreground hover:text-primary transition-all rounded-full"
                  onClick={() => go("/dashboard")}
                >
                  <LayoutDashboard className="h-4 w-4" />
                  Dashboard
                </Button>
              </SignedIn>

              <SignedOut>
                <SignInButton mode="modal">
                  <Button size="sm" className="rounded-full px-5 font-semibold shadow-lg shadow-primary/10 group">
                    Sign In
                    <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Button>
                </SignInButton>
              </SignedOut>
            </div>

            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-8 h-8 ring-2 ring-primary/20 hover:ring-primary/50 transition-all rounded-full",
                  },
                }}
                afterSignOutUrl="/"
              />
            </SignedIn>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-xl md:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: -30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className="flex flex-col h-full pt-24 px-6 pb-8"
            >
              <div className="flex flex-col gap-2 flex-1">
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold px-4 pb-2">
                  Navigation
                </span>
                {isHomePage ? (
                  NAV_LINKS.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => scrollToSection(link.id)}
                      className="text-left px-4 py-4 text-xl font-semibold hover:text-primary transition-colors border-b border-border/30 flex items-center justify-between group"
                    >
                      {link.label}
                      <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </button>
                  ))
                ) : (
                  <Link
                    href="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-4 py-4 text-xl font-semibold hover:text-primary transition-colors border-b border-border/30 flex items-center justify-between group"
                  >
                    Home
                    <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </Link>
                )}
              </div>

              <div className="flex flex-col gap-3 mt-auto pt-8">
                <SignedIn>
                  <Button
                    className="w-full h-14 text-lg font-semibold rounded-2xl shadow-lg"
                    onClick={() => { go("/dashboard"); setIsMobileMenuOpen(false); }}
                  >
                    <Sparkles className="h-5 w-5 mr-2" />
                    Go to Dashboard
                  </Button>
                </SignedIn>
                <SignedOut>
                  <SignInButton mode="modal">
                    <Button className="w-full h-14 text-lg font-semibold rounded-2xl shadow-lg">
                      Sign In
                    </Button>
                  </SignInButton>
                </SignedOut>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
