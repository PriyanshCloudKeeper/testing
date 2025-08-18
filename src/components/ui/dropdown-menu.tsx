import * as React from "react";
import { cn } from "../primitives/cn";

type Coord = { x: number; y: number };

export function useClickOutside<T extends HTMLElement>(onOutside: () => void) {
  const ref = React.useRef<T | null>(null);
  React.useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) onOutside();
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [onOutside]);
  return ref;
}

export function DropdownMenu({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="relative inline-block">{children}</div>;
}

export function DropdownMenuTrigger({ asChild, children }: { asChild?: boolean; children: React.ReactElement }) {
  const [open, setOpen] = React.useState(false);
  const [coord, setCoord] = React.useState<Coord | null>(null);
  const triggerRef = React.useRef<HTMLElement | null>(null);

  const onClick = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setCoord({ x: rect.left, y: rect.bottom + window.scrollY });
    setOpen((o) => !o);
  };

  const Trigger = React.cloneElement(children, { onClick });
  return (
    <>
      {asChild ? Trigger : <button type="button">{Trigger}</button>}
      <DropdownMenuPortal open={open} onClose={() => setOpen(false)} anchor={coord}>
        {/* portal content is rendered by DropdownMenuContent */}
      </DropdownMenuPortal>
      {/* expose context to children */}
      <DropdownMenuContext.Provider value={{ open, setOpen }} />
    </>
  );
}

const DropdownMenuCtx = React.createContext<{ open: boolean; setOpen: (o: boolean) => void } | null>(null);
function DropdownMenuContextProvider({ children, value }: { children: React.ReactNode; value: { open: boolean; setOpen: (o: boolean) => void } }) {
  return <DropdownMenuCtx.Provider value={value}>{children}</DropdownMenuCtx.Provider>;
}
function DropdownMenuContext() {
  const ctx = React.useContext(DropdownMenuCtx);
  if (!ctx) throw new Error("DropdownMenu components must be wrapped with DropdownMenuTrigger");
  return ctx;
}

function DropdownMenuPortal({
  open,
  onClose,
  anchor,
  children,
}: {
  open: boolean;
  onClose: () => void;
  anchor: Coord | null;
  children?: React.ReactNode;
}) {
  const ref = useClickOutside<HTMLDivElement>(onClose);
  if (!open || !anchor) return null;
  return (
    <div
      ref={ref}
      style={{ position: "absolute", left: anchor.x, top: anchor.y }}
      className="z-50 min-w-[10rem] rounded-2xl border border-gray-200 bg-white p-1 shadow-lg"
    >
      {children}
    </div>
  );
}

export function DropdownMenuContent({
  className,
  children,
}: React.HTMLAttributes<HTMLDivElement>) {
  const { open } = DropdownMenuContext();
  if (!open) return null;
  return <div className={cn("", className)}>{children}</div>;
}

export function DropdownMenuItem({
  className,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { setOpen } = DropdownMenuContext();
  return (
    <button
      type="button"
      onClick={(e) => {
        rest.onClick?.(e);
        setOpen(false);
      }}
      className={cn(
        "w-full text-left rounded-xl px-3 py-2 text-sm hover:bg-gray-100",
        className
      )}
      {...rest}
    />
  );
}

export function DropdownMenuSeparator() {
  return <div className="my-1 h-px bg-gray-200" />;
}
