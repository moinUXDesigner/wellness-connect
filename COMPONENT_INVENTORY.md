# Wellness Connect - Component Inventory

> Complete list of all available components in the design system

## 📦 Available Components (14 Total)

### Form Controls (5)

| Component | File | Purpose | Variants |
|-----------|------|---------|----------|
| **Button** | `Button.tsx` | Primary action button | primary, secondary, outline, ghost, danger |
| **Input** | `Input.tsx` | Text input field | with label, error, helper text, icons |
| **Checkbox** | `Checkbox.tsx` | Checkbox selection | with/without label |
| **Toggle** | `Toggle.tsx` | Toggle switch | with/without label |
| **SearchInput** | `SearchInput.tsx` | Search input with icon | with clear button |

### Data Display (6)

| Component | File | Purpose | Variants |
|-----------|------|---------|----------|
| **Card** | `Card.tsx` | Container card | default, bordered, elevated |
| **Badge** | `Badge.tsx` | Status badge | primary, secondary, success, warning, error, info, neutral |
| **Avatar** | `Avatar.tsx` | User avatar | sm, md, lg, xl - with badge option |
| **StatCard** | `StatCard.tsx` | Statistics display | with icon, trend indicator |
| **ListItem** | `ListItem.tsx` | List item row | with left/right content |
| **ProgressBar** | `ProgressBar.tsx` | Progress indicator | sm, md, lg - with label option |

### Navigation (2)

| Component | File | Purpose | Variants |
|-----------|------|---------|----------|
| **BottomNav** | `BottomNav.tsx` | Mobile bottom navigation | Active state highlighting |
| **Tabs** | `Tabs.tsx` | Tabbed interface | default, pills |

### Feedback (1)

| Component | File | Purpose | Variants |
|-----------|------|---------|----------|
| **Alert** | `Alert.tsx` | Alert message | success, warning, error, info |

---

## 🎨 Component Properties Quick Reference

### Button Props
```tsx
variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
size?: 'sm' | 'md' | 'lg'
isLoading?: boolean
fullWidth?: boolean
```

### Card Props
```tsx
variant?: 'default' | 'bordered' | 'elevated'
padding?: 'none' | 'sm' | 'md' | 'lg'
```

### Badge Props
```tsx
variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'neutral'
size?: 'sm' | 'md'
```

### Avatar Props
```tsx
name?: string
src?: string
size?: 'sm' | 'md' | 'lg' | 'xl'
showBadge?: boolean
badgeColor?: 'success' | 'warning' | 'error'
```

### Input Props
```tsx
label?: string
error?: string
helperText?: string
leftIcon?: ReactNode
rightIcon?: ReactNode
fullWidth?: boolean
```

### Alert Props
```tsx
variant?: 'success' | 'warning' | 'error' | 'info'
title?: string
icon?: ReactNode
onClose?: () => void
```

### StatCard Props
```tsx
title: string
value: string | number
icon?: ReactNode
trend?: { value: string; direction: 'up' | 'down' }
color?: 'primary' | 'secondary' | 'success' | 'warning' | 'purple' | 'teal'
```

### ProgressBar Props
```tsx
value: number
max?: number
color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
size?: 'sm' | 'md' | 'lg'
showLabel?: boolean
```

### BottomNav Props
```tsx
items: Array<{
  id: string
  label: string
  icon: ReactNode
  onClick?: () => void
}>
activeId?: string
```

### Tabs Props
```tsx
items: Array<{
  id: string
  label: string
  content: ReactNode
}>
defaultTabId?: string
variant?: 'default' | 'pills'
```

### ListItem Props
```tsx
title: string
subtitle?: string
leftContent?: ReactNode
rightContent?: ReactNode
onClick?: () => void
```

### Checkbox Props
```tsx
label?: string
// + all standard input checkbox attributes
```

### Toggle Props
```tsx
label?: string
// + all standard input checkbox attributes
```

### SearchInput Props
```tsx
onClear?: () => void
value?: string
// + all standard input attributes
```

---

## 📋 Component Combinations

### Session Card Pattern
```tsx
<Card variant="elevated" padding="lg">
  <div className="flex gap-4">
    <Avatar name="Dr. Sarah" size="lg" showBadge />
    <div>
      <h3>Upcoming Session</h3>
      <p>Dr. Sarah - Counselling</p>
      <Badge variant="success">Confirmed</Badge>
      <Button variant="primary" size="sm">Join</Button>
    </div>
  </div>
</Card>
```

### Stat Dashboard Pattern
```tsx
<div className="grid grid-cols-2 gap-4">
  <StatCard title="Sessions" value="24" icon="📅" color="primary" />
  <StatCard title="Goals" value="8" icon="🎯" color="success" />
</div>
```

### List with Items Pattern
```tsx
<Card variant="elevated" padding="none">
  <ListItem
    title="Dr. Johnson"
    subtitle="Today at 2:00 PM"
    leftContent={<Avatar name="Dr. Johnson" />}
    rightContent={<Badge variant="success">Confirmed</Badge>}
  />
</Card>
```

### Form Pattern
```tsx
<Card variant="elevated" padding="lg">
  <Input label="Email" fullWidth />
  <Input label="Password" type="password" fullWidth />
  <Checkbox label="Remember me" />
  <Button variant="primary" fullWidth>Login</Button>
</Card>
```

---

## 🎯 Usage Statistics

- **Total Components:** 14
- **Form Controls:** 5 (35.7%)
- **Data Display:** 6 (42.9%)
- **Navigation:** 2 (14.3%)
- **Feedback:** 1 (7.1%)

---

## 🚀 Import Methods

### Method 1: Individual Imports
```tsx
import { Button } from './components/Button';
import { Card } from './components/Card';
```

### Method 2: Index Imports (Recommended)
```tsx
import { Button, Card, Badge, Avatar } from './components';
```

### Method 3: With Types
```tsx
import { Button, type ButtonProps } from './components';
```

---

## 📱 Responsive Behavior

All components are mobile-first and responsive:

- **Button:** Adapts to container width with `fullWidth` prop
- **Card:** Responsive padding based on viewport
- **BottomNav:** Fixed at bottom on mobile, can be adapted for desktop sidebar
- **Tabs:** Scrollable on mobile, full width on desktop
- **StatCard:** 2-column grid on mobile, 4-column on desktop
- **Input:** Full width by default on mobile

---

## ✅ Component Status

| Component | Status | Accessibility | Tests | Documentation |
|-----------|--------|---------------|-------|---------------|
| Button | ✅ Complete | ✅ WCAG AA | - | ✅ Yes |
| Input | ✅ Complete | ✅ WCAG AA | - | ✅ Yes |
| Card | ✅ Complete | ✅ WCAG AA | - | ✅ Yes |
| Badge | ✅ Complete | ✅ WCAG AA | - | ✅ Yes |
| Checkbox | ✅ Complete | ✅ WCAG AA | - | ✅ Yes |
| Toggle | ✅ Complete | ✅ WCAG AA | - | ✅ Yes |
| Avatar | ✅ Complete | ✅ WCAG AA | - | ✅ Yes |
| ProgressBar | ✅ Complete | ✅ WCAG AA | - | ✅ Yes |
| Alert | ✅ Complete | ✅ WCAG AA | - | ✅ Yes |
| StatCard | ✅ Complete | ✅ WCAG AA | - | ✅ Yes |
| ListItem | ✅ Complete | ✅ WCAG AA | - | ✅ Yes |
| SearchInput | ✅ Complete | ✅ WCAG AA | - | ✅ Yes |
| BottomNav | ✅ Complete | ✅ WCAG AA | - | ✅ Yes |
| Tabs | ✅ Complete | ✅ WCAG AA | - | ✅ Yes |

---

## 🔄 Component Dependencies

All components are **self-contained** with minimal external dependencies:

- **React** (peer dependency)
- **TypeScript** (for typing)
- **Tailwind CSS** (for styling)

No complex component hierarchies or interdependencies - each component can be used independently.

---

## 📦 Export Structure

```typescript
// /src/app/components/index.ts

export { Alert } from './Alert';
export { Avatar } from './Avatar';
export { Badge } from './Badge';
export { BottomNav } from './BottomNav';
export { Button } from './Button';
export { Card } from './Card';
export { Checkbox } from './Checkbox';
export { Input } from './Input';
export { ListItem } from './ListItem';
export { ProgressBar } from './ProgressBar';
export { SearchInput } from './SearchInput';
export { StatCard } from './StatCard';
export { Tabs } from './Tabs';
export { Toggle } from './Toggle';

// All types are also exported
```

---

**Last Updated:** April 25, 2026  
**Design System Version:** 1.0  
**Total Components:** 14
