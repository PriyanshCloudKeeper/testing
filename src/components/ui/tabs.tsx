import * as React from "react";
import { cn } from "../primitives/cn";

type TabsContextType = {
  value: string;
  setValue: (v: string) => void;
};
const TabsContext = React.createContext<TabsContextType | null>(null);

export function Tabs(props: { defaultValue: string; value?: string; onValueChange?: (v: string) => void; children: React.ReactNode; className?: string; }) {
  const isControlled = props.value !== undefined;
  const [internal, setInternal] = React.useState(props.defaultValue);
  const value = isControlled ? (props.value as string) : internal;
  const setValue = (v: string) => {
    if (!isControlled) setInternal(v);
    props.onValueChange?.(v);
  };
  return (
    <TabsContext.Provider value={{ value, setValue }}>
      <div className={cn("w-full", props.className)}>{props.children}</div>
    </TabsContext.Provider>
  );
}

export function TabsList({ className, ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("inline-flex rounded-2xl bg-gray-100 p-1", className)} {...rest} />;
}

export function TabsTrigger({ value, className, ...rest }: React.ButtonHTMLAttributes<HTMLButtonElement> & { value: string }) {
  const ctx = React.useContext(TabsContext);
  if (!ctx) throw new Error("TabsTrigger must be used within <Tabs>");
  const active = ctx.value === value;
  return (
    <button
      type="button"
      onClick={() => ctx.setValue(value)}
      aria-pressed={active}
      className={cn(
        "px-4 h-9 rounded-xl text-sm transition",
        active ? "bg-white shadow font-medium" : "text-gray-600 hover:text-gray-900"
      , className)}
      {...rest}
    />
  );
}

export function TabsContent({ value, className, ...rest }: React.HTMLAttributes<HTMLDivElement> & { value: string }) {
  const ctx = React.useContext(TabsContext);
  if (!ctx) throw new Error("TabsContent must be used within <Tabs>");
  if (ctx.value !== value) return null;
  return <div className={cn("mt-3", className)} {...rest} />;
}
