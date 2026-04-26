# Wellness Connect Design System

> **A comprehensive, production-ready design system for a premium wellness application**

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![React](https://img.shields.io/badge/React-18+-61dafb)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178c6)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8)

---

## 📖 Overview

**Wellness Connect** is a mobile-first design system built for a wellness application that combines:
- 🧠 Counselling Psychology Services
- 💪 Gym / Personal Training Services
- 📅 Appointment Booking
- 📊 Progress Tracking
- 💬 Help Desk Support

**Brand Identity:** Calm • Trustworthy • Motivating • Professional • Premium

**Tagline:** *Mind. Body. Better Together.*

---

## 🚀 Quick Start

### View the Design System

```bash
# The design system showcase is running in App.tsx
# Open the application to see all components, colors, typography, and examples
```

### Import Components

```tsx
// Import individual components
import { Button, Card, Badge } from './components';

// Or import with types
import { Button, type ButtonProps } from './components';
```

### Use Design Tokens

```tsx
// All design tokens are available as Tailwind classes
<div className="bg-primary text-white p-4 rounded-xl shadow-card">
  <h1 className="text-2xl font-semibold">Hello Wellness</h1>
</div>
```

---

## 📁 Project Structure

```
/src
  /app
    /components/          # All reusable UI components
      Alert.tsx
      Avatar.tsx
      Badge.tsx
      BottomNav.tsx
      Button.tsx
      Card.tsx
      Checkbox.tsx
      Input.tsx
      ListItem.tsx
      ProgressBar.tsx
      SearchInput.tsx
      StatCard.tsx
      Tabs.tsx
      Toggle.tsx
      index.ts            # Component exports
    App.tsx               # Design system showcase
  /styles
    fonts.css             # Inter font import
    theme.css             # Design tokens and CSS variables

/DESIGN_SYSTEM_GUIDE.md       # Comprehensive documentation
/DESIGN_TOKENS_REFERENCE.md   # Quick reference guide
```

---

## 🎨 Design System Features

### ✅ Complete Component Library
- **Form Controls:** Button, Input, Checkbox, Toggle, SearchInput
- **Data Display:** Card, Badge, Avatar, StatCard, ListItem, ProgressBar
- **Navigation:** BottomNav, Tabs
- **Feedback:** Alert

### ✅ Design Tokens
- **Colors:** Primary, Secondary, Accents, Semantic, Neutrals
- **Typography:** 8 size scales with Inter font
- **Spacing:** 9-point scale (4px - 64px)
- **Shadows:** 4 elevation levels
- **Radius:** 4 size variants

### ✅ Mobile-First & Responsive
- Base: 375px (mobile)
- Tablet: 768px
- Desktop: 1440px

### ✅ Accessibility
- WCAG AA compliant colors
- Proper focus states
- Semantic HTML
- Screen reader friendly

### ✅ TypeScript Support
- Fully typed components
- Exported type definitions
- IntelliSense support

---

## 🎯 Component Examples

### Buttons
```tsx
<Button variant="primary" size="md">Primary Action</Button>
<Button variant="outline" size="sm">Secondary</Button>
<Button variant="danger" isLoading>Deleting...</Button>
```

### Cards & Stats
```tsx
<Card variant="elevated" padding="lg">
  <StatCard
    title="Total Sessions"
    value="24"
    icon="📅"
    color="primary"
    trend={{ value: '12%', direction: 'up' }}
  />
</Card>
```

### Forms
```tsx
<Input 
  label="Email" 
  placeholder="you@example.com"
  error="Email is required"
  fullWidth 
/>
<Checkbox label="I agree to terms" />
<Toggle label="Enable notifications" defaultChecked />
```

### Navigation
```tsx
<BottomNav 
  items={navItems} 
  activeId="home" 
/>

<Tabs
  items={[
    { id: 'tab1', label: 'Overview', content: <div>Content</div> },
    { id: 'tab2', label: 'Details', content: <div>Details</div> },
  ]}
  variant="pills"
/>
```

---

## 📚 Documentation

| Document | Description |
|----------|-------------|
| **DESIGN_SYSTEM_GUIDE.md** | Complete component API reference, usage guidelines, and best practices |
| **DESIGN_TOKENS_REFERENCE.md** | Quick reference for colors, spacing, typography, and common patterns |
| **App.tsx** | Live showcase with all components and examples |

---

## 🎨 Color Palette

### Primary Colors
- **Primary:** `#5B4CFF` - Main CTAs, active states
- **Secondary:** `#00D9D5` - Secondary actions, accents

### Semantic Colors
- **Success:** `#10B981` - Positive states
- **Warning:** `#F59E0B` - Cautions
- **Error:** `#EF4444` - Errors
- **Info:** `#3B82F6` - Information

### Neutrals
- Range from `#111827` (900) to `#F9FAFB` (50)

---

## 🔧 Technology Stack

- **React** 18+
- **TypeScript** 5+
- **Tailwind CSS** 4.0
- **Google Fonts** - Inter

---

## 📱 Mobile-First Approach

All components are designed mobile-first and scale up beautifully to larger screens:

```tsx
// Mobile first, then adapt
<div className="p-4 md:p-6 lg:p-8">
  <h1 className="text-xl md:text-2xl lg:text-3xl">
    Responsive Typography
  </h1>
</div>
```

---

## 🎯 For CODEX / Developers

### Getting Started

1. **Review the Design System**
   - Open `App.tsx` to see all components in action
   - Browse through the three tabs: Design, Components, Examples

2. **Read Documentation**
   - `DESIGN_SYSTEM_GUIDE.md` for detailed API docs
   - `DESIGN_TOKENS_REFERENCE.md` for quick reference

3. **Import & Use**
   ```tsx
   import { Button, Card, Avatar } from './components';
   ```

4. **Follow Design Tokens**
   - Use `bg-primary`, `text-neutral-700`, `gap-4`, etc.
   - All tokens are defined in `/src/styles/theme.css`

5. **Build Application Screens**
   - Use the components to build:
     - Landing pages
     - Auth flows (Login/Signup)
     - Dashboards (Client, Counsellor, Trainer, Admin)
     - Appointment booking
     - Progress tracking
     - Profile screens

### Component Philosophy

- **Composable:** Components work well together
- **Flexible:** Props for customization
- **Typed:** Full TypeScript support
- **Accessible:** WCAG compliant
- **Consistent:** Design tokens ensure visual harmony

---

## 🌟 Key Features

✨ **14 Production-Ready Components**  
🎨 **Complete Design Token System**  
📱 **Mobile-First & Responsive**  
♿ **Accessible by Default**  
📘 **TypeScript Support**  
🎯 **Wellness-Focused UX**  
📖 **Comprehensive Documentation**  
🚀 **Ready for Implementation**

---

## 📞 Support

For questions, component requests, or issues:
1. Review the design system showcase in `App.tsx`
2. Check `DESIGN_SYSTEM_GUIDE.md` for detailed documentation
3. Reference `DESIGN_TOKENS_REFERENCE.md` for quick lookups

---

## 📄 License

This design system is created for Wellness Connect application.

---

**Built with ❤️ for a healthier, happier world**

*Mind. Body. Better Together.*
