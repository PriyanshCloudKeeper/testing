import * as React from "react";
import { cn } from "../primitives/cn";

type DialogContextType = {
  open: boolean;
  setOpen: (o: boolean) => void;
};
const DialogContext = React.createContext<DialogContextType | null>(null);

export function Dialog({ open: cOpen, onOpenChange, children }: { open?: boolean; onOpenChange?: (o: boolean) => void; children: React.ReactNode; }) {
  const isControlled = cOpen !== undefined;
  const [open, setOpen] = React.useState(false);
  const actual = isControlled ? (cOpen as boolean) : open;
  const set = (o: boolean) => {
    if (!isControlled) setOpen(o);
    onOpenChange?.(o);
  };
  return <DialogContext.Provider value={{ open: actual, setOpen: set }}>{children}</DialogContext.Provider>;
}

export function DialogTrigger({ asChild, children }: { asChild?: boolean; children: React.ReactElement }) {
  const ctx = React.useContext(DialogContext);
  if (!ctx) throw new Error("DialogTrigger must be used within <Dialog>");
  const trigger = React.cloneElement(children, {
    onClick: (e: React.MouseEvent) => {
      children.props.onClick?.(e);
      ctx.setOpen(true);
    },
  });
  return asChild ? trigger : <button type="button">{trigger}</button>;
}

export function DialogOverlay({ className }: { className?: string }) {
  const ctx = React.useContext(DialogContext);
  if (!ctx || !ctx.open) return null;
  return <div className={cn("fixed inset-0 bg-black/40", className)} onClick={() => ctx.setOpen(false)} />;
}

export function DialogContent({ className, children }: { className?: string; children: React.ReactNode }) {
  const ctx = React.useContext(DialogContext);
  if (!ctx || !ctx.open) return null;
  return (
    <div className="fixed inset-0 grid place-items-center">
      <div
        role="dialog"
        aria-modal="true"
        className={cn("w-full max-w-md rounded-2xl bg-white p-6 shadow-xl", className)}
      >
        {children}
      </div>
    </div>
  );
}

export function DialogHeader({ className, ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mb-3", className)} {...rest} />;
}
export function DialogTitle({ className, ...rest }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h2 className={cn("text-xl font-semibold", className)} {...rest} />;
}
export function DialogDescription({ className, ...rest }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-sm text-gray-600", className)} {...rest} />;
}
export function DialogFooter({ className, ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mt-4 flex justify-end gap-2", className)} {...rest} />;
}
