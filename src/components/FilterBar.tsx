import { cn } from "@/lib/utils";
import { categories } from "@/data/categories";

interface FilterBarProps {
  active: string;
  onChange: (category: string) => void;
}

const filterItems = [
  { id: "all", name: "全部" },
  ...categories.map((c) => ({ id: c.id, name: c.name })),
];

export default function FilterBar({ active, onChange }: FilterBarProps) {
  return (
    <div className="sticky top-20 z-30 bg-ink-900/80 backdrop-blur-md border-y border-ink-700/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-4">
          {filterItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onChange(item.id)}
              className={cn(
                "relative whitespace-nowrap px-5 py-2 text-sm tracking-wide transition-colors duration-300",
                active === item.id
                  ? "text-gold-400"
                  : "text-paper-400 hover:text-paper-100"
              )}
            >
              {item.name}
              <span
                className={cn(
                  "absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-gold-400 transition-all duration-300",
                  active === item.id ? "w-6" : "w-0"
                )}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
