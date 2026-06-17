# AgentRule.md

# ConsultEdge Frontend Development Rules

These rules are mandatory.

All AI agents, developers, and contributors must follow them.

Violation of these rules should be considered a bug.

---

# Rule 1: Frontend First

Current project phase is:

Frontend Development Only

Backend integration is NOT available.

Therefore:

DO NOT:

* Create API integrations
* Create backend services
* Create repository layers
* Create authentication APIs
* Create websocket connections
* Create database logic

USE:

Mock Data Only

Location:

src/mocks

---

# Rule 2: Feature-Based Architecture

Always organize code by feature.

Correct:

src/features/consultants
src/features/auth
src/features/wallet

Incorrect:

src/pages
src/services
src/controllers

---

# Rule 3: App Router Only

Use Next.js App Router.

Never use Pages Router.

Correct:

src/app

Incorrect:

src/pages

---

# Rule 4: Server Components First

Every component must be a Server Component by default.

Add:

"use client"

ONLY when required.

Examples:

Required:

* useState
* useEffect
* Zustand
* Framer Motion
* Event handlers

Not Required:

* Static UI
* Layouts
* Read-only pages

---

# Rule 5: Mobile First Design

Every component must be built mobile-first.

Minimum supported widths:

320px
375px
390px
414px

Then:

768px
1024px
1280px
1440px
1920px

Never build desktop first.

---

# Rule 6: No Fixed Widths

Avoid:

w-[500px]
h-[600px]

Prefer:

max-w-7xl
w-full
min-h-screen

---

# Rule 7: Reusable Components

If UI repeats more than twice:

Create a reusable component.

Examples:

ConsultantCard
PageHeader
SectionTitle
SearchBar
StatCard

Do not duplicate UI.

---

# Rule 8: Shadcn UI First

Use Shadcn components whenever possible.

Priority:

1. Shadcn UI
2. Custom wrapper
3. Custom component

Avoid reinventing common components.

---

# Rule 9: Styling Rules

Use Tailwind CSS only.

Do NOT:

* Use inline styles
* Use CSS Modules
* Use Styled Components

Prefer utility classes.

---

# Rule 10: Design Language

ConsultEdge follows:

* Linear
* Stripe
* Vercel
* Topmate
* Clarity.fm

Design Principles:

* Clean
* Modern
* Premium
* Spacious

Avoid:

* Bootstrap style
* Outdated cards
* Heavy borders

---

# Rule 11: Colors

Primary Gradient:

from-violet-600
via-blue-600
to-cyan-500

Primary Background:

from-violet-100
to-blue-100

Dark Mode:

from-violet-950/20
to-blue-950/20

Use gradients sparingly.

---

# Rule 12: Animations

Use Framer Motion.

Allowed:

Fade
Slide
Scale
Hover Lift

Animation Duration:

200ms–500ms

Avoid:

* Excessive animations
* Infinite animations
* Flashy effects

---

# Rule 13: Folder Ownership

Each feature owns:

components/
hooks/
types/
schemas/

Example:

features/
consultants/
components/
hooks/
types/

Never place feature-specific code in shared folders.

---

# Rule 14: Shared Components

Only generic components belong in:

src/components/shared

Examples:

Container
SectionTitle
PageHeader
EmptyState

---

# Rule 15: State Management

Use Zustand only for:

* Auth
* Theme
* Notifications
* UI State

Never store server data in Zustand.

Future server state must use TanStack Query.

---

# Rule 16: Mock Data Source

All pages currently use:

src/mocks

Examples:

consultants.ts
reviews.ts
wallet.ts

Do not hardcode mock data inside components.

---

# Rule 17: TypeScript Strict Mode

Never use:

any

Never disable strict typing.

Create types for everything.

---

# Rule 18: Imports

Always use aliases.

Correct:

import { Navbar } from "@/components/navbar/navbar"

Incorrect:

import { Navbar } from "../../../components/navbar/navbar"

---

# Rule 19: Component File Naming

Files:

kebab-case

Examples:

consultant-card.tsx
search-bar.tsx
wallet-card.tsx

Components:

PascalCase

Examples:

ConsultantCard
SearchBar
WalletCard

---

# Rule 20: Route Groups

Use route groups.

(public)
(auth)
(client)
(consultant)
(admin)

Each route group must have its own layout.

---

# Rule 21: Current Development Order

Build only in this sequence:

1. Navbar
2. Footer
3. Home Page
4. Consultant Card
5. Consultant Listing
6. Consultant Details
7. Login
8. Register
9. Dashboard Layout
10. Wallet UI
11. Consultation UI
12. Chat UI
13. Consultant Dashboard
14. Admin Dashboard

Do not skip phases.

---

# Rule 22: Accessibility

Every interactive element must have:

* Proper button tags
* Labels
* Alt text
* Keyboard support

Accessibility is mandatory.

---

# Rule 23: Performance

Prefer:

* Server Components
* Dynamic imports
* Optimized images

Avoid unnecessary client-side rendering.

---

# Rule 24: Production Readiness

Every component must be:

* Responsive
* Reusable
* Typed
* Accessible
* Dark Mode Compatible

No prototype-quality code.

---

# Rule 25: Before Writing Code

Always ask:

1. Can this be reused?
2. Is it mobile-first?
3. Does it follow folder ownership?
4. Does it need "use client"?
5. Does it support dark mode?
6. Does it follow project design language?

If any answer is "No", redesign before implementation.
