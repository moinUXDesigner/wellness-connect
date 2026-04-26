import { ReactNode } from 'react';

export interface BottomNavItem {
  id: string;
  label: string;
  icon: ReactNode;
  onClick?: () => void;
}

export interface BottomNavProps {
  items: BottomNavItem[];
  activeId?: string;
}

export const BottomNav = ({ items, activeId }: BottomNavProps) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-border safe-area-bottom z-50">
      <div className="flex items-center justify-around h-16 px-2">
        {items.map((item) => {
          const isActive = item.id === activeId;
          return (
            <button
              key={item.id}
              onClick={item.onClick}
              className={`flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-md transition-all min-w-[60px] ${
                isActive
                  ? 'text-primary'
                  : 'text-neutral-500 hover:text-neutral-700'
              }`}
            >
              <div className={`text-2xl ${isActive ? 'scale-110' : ''} transition-transform`}>
                {item.icon}
              </div>
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
