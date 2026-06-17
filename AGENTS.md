# AGENTS.md

# ConsultEdge Frontend

## Project Overview

ConsultEdge is a consultancy marketplace platform where users can discover consultants, book paid consultations, chat in real-time, manage wallet balances, leave reviews, and where admins manage platform operations.

Current Phase:
Frontend First Development

Backend is NOT integrated yet.

All UI should be developed using mock data until backend APIs become available.

---

# Tech Stack

## Core

* Next.js 16 (App Router)
* React 19
* TypeScript
* Tailwind CSS v4
* Shadcn UI
* Zustand
* TanStack Query (future)
* React Hook Form
* Zod
* Framer Motion
* Lucide React

---

# Development Philosophy

## Current Rule

Build UI using mock data.

DO NOT create real API integrations yet.

DO NOT create authentication flows.

DO NOT create websocket connections.

DO NOT create backend dependencies.

Everything should function using local mock data.

---

# Architecture Rules

Use Feature-Based Architecture.

Never organize code by technical layers only.

Bad:

src/components
src/hooks
src/api

Good:

src/features/auth
src/features/consultants
src/features/consultations
src/features/wallet
src/features/reviews
src/features/admin

Each feature owns:

* components
* hooks
* types
* schemas
* api (future)

---

# Folder Structure

src/

app/
(public)/
(auth)/
(client)/
(consultant)/
(admin)/

components/
ui/
navbar/
footer/
shared/
loading/
charts/

features/
auth/
consultants/
consultations/
wallet/
reviews/
notifications/
admin/

hooks/

lib/

mocks/

providers/

store/

types/

constants/

---

# Route Structure

## Public

/
about
contact
pricing
consultants
consultants/[id]

## Authentication

login
register

## Client

dashboard
profile
wallet
consultations
chat
reviews

## Consultant

consultant/dashboard
consultant/profile
consultant/earnings
consultant/availability
consultant/consultations
consultant/reviews

## Admin

admin
admin/users
admin/consultants
admin/payments
admin/withdrawals
admin/reports

---

# Layout Structure

## Root Layout

src/app/layout.tsx

Responsibilities:

* Global CSS
* Providers
* Theme Provider
* Query Provider (future)

Must NOT contain:

* Navbar
* Footer

---

## Public Layout

src/app/(public)/layout.tsx

Responsibilities:

* Navbar
* Footer

Pages:

* Home
* About
* Pricing
* Contact
* Consultants

---

## Auth Layout

src/app/(auth)/layout.tsx

Responsibilities:

* Centered Auth Card
* Clean Minimal Layout

Pages:

* Login
* Register

---

## Client Layout

src/app/(client)/layout.tsx

Responsibilities:

* Sidebar
* Header
* Dashboard Shell

---

## Consultant Layout

src/app/(consultant)/layout.tsx

Responsibilities:

* Consultant Sidebar
* Consultant Dashboard

---

## Admin Layout

src/app/(admin)/layout.tsx

Responsibilities:

* Admin Sidebar
* Admin Dashboard

---

# UI Guidelines

## Design Style

Modern SaaS

Inspired By:

* Stripe
* Linear
* Vercel
* Clarity.fm
* Topmate

Avoid:

* Old Bootstrap style
* Boxy layouts
* Hard borders everywhere

Use:

* Gradients
* Glassmorphism
* Soft Shadows
* Rounded Corners

---

# Color System

Primary Gradient

from-violet-600
via-blue-600
to-cyan-500

Hero Background

from-violet-100
to-blue-100

Dark Mode

from-violet-950/20
to-blue-950/20

---

# Responsiveness Requirements

Support:

320px
375px
390px
414px
768px
820px
1024px
1280px
1440px
1920px

Mobile First Design Required.

Every component must work on:

* Mobile
* Tablet
* Desktop

---

# State Management

## Zustand

Allowed Only For

* Authentication
* Theme
* Notifications
* UI State

Never store server data in Zustand.

---

# Mock Data

Location:

src/mocks

Files:

consultants.ts
categories.ts
reviews.ts
consultations.ts
wallet.ts
users.ts

Until backend integration, all pages must consume mock data.

---

# Consultants Module

Features:

* Consultant Listing
* Consultant Details
* Search
* Filters
* Ratings
* Availability

Current Data Source:

src/mocks/consultants.ts

---

# Wallet Module

Future Features:

* Wallet Balance
* Add Money
* Transactions
* Refunds

Current Phase:

UI Only

---

# Consultation Module

Future Features:

* Book Consultation
* Consultation History
* Status Tracking

Current Phase:

UI Only

---

# Chat Module

Future Features:

* Real-time Chat
* Typing Indicators
* Message History

Current Phase:

UI Mock Screens

No websocket integration yet.

---

# Authentication

Current Phase:

UI Only

Login button should redirect.

Register button should redirect.

No JWT.

No Middleware.

No Backend Calls.

---

# Animations

Use Framer Motion.

Allowed:

* Fade In
* Slide Up
* Slide Down
* Hover Lift
* Scale Hover

Avoid:

* Excessive animations
* Long animation durations

Target:

200ms–500ms

---

# Component Rules

Prefer:

Reusable Components

Example:

components/shared/container.tsx

components/shared/section-title.tsx

components/shared/page-header.tsx

Avoid repeating UI.

---

# Naming Conventions

Components

PascalCase

Example:

Navbar.tsx
ConsultantCard.tsx

Hooks

camelCase

Example:

useConsultants.ts

Files

kebab-case

Example:

consultant-card.tsx

---

# Current Development Priority

Phase 1

* Navbar
* Footer
* Home Page
* Consultant Card
* Consultants Listing
* Consultant Details

Phase 2

* Login
* Register
* Auth Layout

Phase 3

* Client Dashboard
* Wallet UI

Phase 4

* Consultation UI

Phase 5

* Chat UI

Phase 6

* Consultant Dashboard

Phase 7

* Admin Dashboard

---

# Important

Do NOT introduce backend integration until explicitly requested.

Focus on:

* UI Quality
* Responsiveness
* Reusable Components
* Production Grade Architecture

Backend integration will happen in a later phase.
