import { ReactNode, useState } from 'react';

export interface TabItem {
  id: string;
  label: string;
  content: ReactNode;
}

export interface TabsProps {
  items: TabItem[];
  defaultTabId?: string;
  variant?: 'default' | 'pills';
}

export const Tabs = ({ items, defaultTabId, variant = 'default' }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultTabId || items[0]?.id);

  const activeContent = items.find((item) => item.id === activeTab)?.content;

  return (
    <div className="w-full">
      <div className={`flex gap-1 ${variant === 'default' ? 'border-b border-border' : 'bg-neutral-100 p-1 rounded-lg'}`}>
        {items.map((item) => {
          const isActive = item.id === activeTab;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-4 py-2.5 font-medium text-sm transition-all ${
                variant === 'default'
                  ? `border-b-2 ${
                      isActive
                        ? 'border-primary text-primary'
                        : 'border-transparent text-neutral-600 hover:text-neutral-900'
                    }`
                  : `rounded-md ${
                      isActive
                        ? 'bg-white text-primary shadow-sm'
                        : 'text-neutral-600 hover:text-neutral-900'
                    }`
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <div className="mt-4">{activeContent}</div>
    </div>
  );
};
