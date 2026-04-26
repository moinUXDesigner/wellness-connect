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
      <div
        className={`flex gap-1 ${variant === 'default' ? 'border-b border-border-default' : 'bg-surface-muted p-1 rounded-lg'}`}
        role="tablist"
      >
        {items.map((item) => {
          const isActive = item.id === activeTab;
          return (
            <button
              key={item.id}
              id={`tab-${item.id}`}
              onClick={() => setActiveTab(item.id)}
              role="tab"
              aria-selected={isActive}
              aria-controls={`tabpanel-${item.id}`}
              type="button"
              className={`px-4 py-2.5 font-medium text-sm transition-all ${
                variant === 'default'
                  ? `border-b-2 ${
                      isActive
                        ? 'border-action-primary text-action-primary'
                        : 'border-transparent text-text-secondary hover:text-text-primary'
                    }`
                  : `rounded-md ${
                      isActive
                        ? 'bg-surface-elevated text-action-primary shadow-sm'
                        : 'text-text-secondary hover:text-text-primary'
                    }`
              } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <div
        id={`tabpanel-${activeTab}`}
        className="mt-4"
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
      >
        {activeContent}
      </div>
    </div>
  );
};
