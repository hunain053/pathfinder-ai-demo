"use client";

import { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { Trash2, ExternalLink, FileText, ScanSearch, MapPin, DollarSign, GripVertical } from "lucide-react";
import { deleteJobApplication } from "@/actions/job-tracker";
import { toast } from "sonner";
import Link from "next/link";

export default function JobCard({ job, onDelete }) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async (e) => {
    e.stopPropagation();
    if (confirm("Are you sure you want to delete this application?")) {
      setIsDeleting(true);
      const res = await deleteJobApplication(job.id);
      if (res.success) {
        toast.success("Application deleted");
        onDelete(job.id);
      } else {
        toast.error("Failed to delete application");
        setIsDeleting(false);
      }
    }
  };

  return (
    <div className="group relative bg-background border border-border p-4 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
        <button 
          onClick={handleDelete} 
          disabled={isDeleting}
          className="p-1.5 bg-red-500/10 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-colors"
          title="Delete"
        >
          <Trash2 className="h-3.5 w-3.5" />
        </button>
      </div>

      <div className="pr-10">
        <h3 className="font-bold text-foreground text-base leading-tight mb-1 truncate">
          {job.jobTitle}
        </h3>
        <p className="text-sm text-primary font-semibold truncate mb-3">
          {job.companyName}
        </p>
      </div>

      <div className="space-y-2 mb-4">
        {job.location && (
          <div className="flex items-center text-xs text-muted-foreground gap-1.5">
            <MapPin className="h-3.5 w-3.5" />
            <span className="truncate">{job.location}</span>
          </div>
        )}
        {job.salary && (
          <div className="flex items-center text-xs text-muted-foreground gap-1.5">
            <DollarSign className="h-3.5 w-3.5" />
            <span className="truncate">{job.salary}</span>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/50">
        <div className="flex items-center gap-2">
          {job.url && (
            <a 
              href={job.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-1.5 bg-muted text-muted-foreground rounded-lg hover:bg-primary/10 hover:text-primary transition-colors"
              title="Job Posting URL"
            >
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
          {job.atsAnalysisId && (
            <Link 
              href={`/ats-analyzer?id=${job.atsAnalysisId}`}
              className="p-1.5 bg-muted text-muted-foreground rounded-lg hover:bg-primary/10 hover:text-primary transition-colors flex items-center gap-1"
              title="View ATS Analysis"
            >
              <ScanSearch className="h-3.5 w-3.5" />
              {job.atsAnalysis?.atsScore && (
                <span className="text-[10px] font-bold">{job.atsAnalysis.atsScore}</span>
              )}
            </Link>
          )}
        </div>
        
        <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">
          {formatDistanceToNow(new Date(job.updatedAt), { addSuffix: true })}
        </span>
      </div>
    </div>
  );
}
