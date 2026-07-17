import type { InputHTMLAttributes, LabelHTMLAttributes, TextareaHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/cn";

type FieldShellProps = {
  label: string;
  fieldId?: string;
  helperText?: string;
  errorText?: string;
  children: ReactNode;
};

export function FieldShell({ label, fieldId, helperText, errorText, children }: FieldShellProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={fieldId}>{label}</Label>
      {children}
      {errorText ? (
        <p id={fieldId ? `${fieldId}-error` : undefined} className="ds-animated-entry text-sm text-red-600">
          {errorText}
        </p>
      ) : helperText ? (
        <p id={fieldId ? `${fieldId}-help` : undefined} className="text-sm text-slate-500">
          {helperText}
        </p>
      ) : null}
    </div>
  );
}

export function Label({ className, ...props }: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn(
        "block text-sm font-semibold tracking-tight text-slate-900",
        className,
      )}
      {...props}
    />
  );
}

const fieldBaseStyles =
  "w-full rounded-2xl border border-border bg-white px-4 py-3 text-base text-slate-950 shadow-[0_12px_30px_rgba(8,17,31,0.06)] transition duration-200 ease-out placeholder:text-slate-400 focus:border-primary/60 focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/15 motion-reduce:transition-none";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(fieldBaseStyles, className)} {...props} />;
}

export function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={cn(fieldBaseStyles, "min-h-36 resize-y", className)} {...props} />;
}
