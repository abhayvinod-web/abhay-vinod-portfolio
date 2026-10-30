# Abhay Vinod — Software & UI Engineering Portfolio & Fix-My-Itch Prototypes

[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Motion](https://img.shields.io/badge/Motion-12.2-FF0055?style=flat-square&logo=framer&logoColor=white)](https://motion.dev/)
[![Status](https://img.shields.io/badge/Status-Open_to_Opportunities-00C853?style=flat-square)](#contact)

> A modern, high-performance Software & UI Engineering portfolio built with React 19, TypeScript, and Tailwind CSS v4. Featuring 3 production-grade, fully interactive prototypes solving real-world fintech and payment friction points inspired by the **Razorpay Fix-My-Itch** problem statements.

---

## 📌 Table of Contents

- [Overview](#overview)
- [Featured Interactive Prototypes](#featured-interactive-prototypes)
  - [1. Smart Checkout Downtime Resilience](#1-smart-checkout-downtime-resilience--one-click-auto-retry)
  - [2. Instant Settlement & Micro-Cashflow Predictor](#2-instant-settlement--micro-cashflow-predictor-for-d2c-merchants)
  - [3. Recurring Mandate & Subscription Portal](#3-recurring-mandate--subscription-self-service-portal)
- [Technical Skills & Competencies](#technical-skills--competencies)
- [Key Architectural Highlights](#key-architectural-highlights)
- [Project Directory Structure](#project-directory-structure)
- [Local Development & Setup](#local-development--setup)
- [Deployment & Build](#deployment--build)
- [Contact & Connect](#contact)

---

## 🚀 Overview

This repository houses the personal engineering portfolio of **Abhay Vinod** (Computer Science & Engineering Undergraduate, 2025–2029). Rather than showcasing static UI mockups, this portfolio features **functional, interactive simulations** demonstrating state-resilient architecture, finite state machines, optimistic UI updates, and real-time client-side calculation engines.

### Key Goals:
- **Zero-Reload State Persistence:** Preserving transaction data across simulated failures.
- **Micro-Interactions & Fluid Motion:** Smooth layout transitions and feedback loops with Motion.
- **Accessible & Semantic Architecture:** Built with clean TypeScript interfaces, keyboard navigability, and responsive layouts.

---

## 🛠 Featured Interactive Prototypes

### 1. Smart Checkout Downtime Resilience & One-Click Auto-Retry
> **Focus:** Fintech / Payments UX Resilience | **Impact:** Estimated +28% checkout recovery

- **Problem:** During high-traffic flash sales or bank gateway outages, checkouts fail abruptly. Standard checkouts clear form state, forcing users to restart from scratch and causing high cart abandonment.
- **Solution:** A resilient checkout state machine with live bank telemetry, real-time health badges, zero-reload idempotency preservation, and one-click fallback instrument switching (UPI ➔ Cards ➔ NetBanking).
- **Recruiter Simulation Controls:** Built-in scenario triggers to simulate bank gateway drop-offs, network timeouts, or OTP delivery failure and test auto-recovery.
- **Tech Stack:** React 19, TypeScript, Tailwind CSS v4, Motion, Lucide Icons, Web Audio synthesized feedback.

---

### 2. Instant Settlement & Micro-Cashflow Predictor for D2C Merchants
> **Focus:** Merchant Operations & Liquidity Management | **Impact:** < 5-second instant disbursement simulation

- **Problem:** Small merchants and D2C brands face working-capital bottlenecks waiting for standard T+2 gateway settlements. Opaque MDR and platform fee deductions also make forecasting net payouts difficult.
- **Solution:** A merchant console with real-time fee calculation, an on-demand payout slider with net bank transfer preview, dynamic status filtering, celebratory visual feedback, and client-side CSV ledger audit export.
- **Architecture:** Local reactive state engine with optimistic ledger balance updates, preventing round-trip latency during critical operations.
- **Tech Stack:** React, TypeScript, Tailwind CSS v4, Canvas Confetti, Lucide Icons, Client-side CSV generator.

---

### 3. Recurring Mandate & Subscription Self-Service Portal
> **Focus:** Customer Retention & Subscription Self-Service | **Impact:** Estimated 35% involuntary churn reduction

- **Problem:** Over 30% of subscription churn is involuntary (expired payment cards, hit mandate limits) or driven by subscribers who only need a temporary pause rather than full cancellation.
- **Solution:** A self-service portal featuring 1-click pause/resume mandate controls, monthly spending ceiling guardrails, zero-interruption payment method hot-swapping (UPI Autopay, Cards, e-Mandate), and an auto-debit schedule countdown.
- **Architecture:** Two-way optimistic state transition engine with simulated confirmation safeguards and localized history tracking.
- **Tech Stack:** React 19, TypeScript, Tailwind CSS v4, Motion, Lucide Icons.

---

## 💻 Technical Skills & Competencies
├── Core Frontend & Languages
│ ├── React (v18 & v19) [Hooks, Context API, Custom Hooks, Profiling]
│ ├── TypeScript [Strict typing, Generics, Component Props/State types]
│ ├── JavaScript (ES6+) [Async/Await, Closures, Event Loop, DOM API]
│ └── HTML5 & Semantic Web [Accessibility (a11y), SEO-friendly structure]
│
├── Styling & UI Systems
│ ├── Tailwind CSS v4 [Modern CSS engine, utility-first design, dark mode]
│ ├── CSS3 / Modern CSS [Flexbox, CSS Grid, Custom Properties, Keyframes]
│ ├── Motion (Framer Motion) [Layout animations, gestural transitions, micro-interactions]
│ └── Responsive Design [Mobile-first layouts, cross-browser compatibility]
│
└── Developer Tools & Workflow
├── Git & GitHub [Version control, atomic commits, PR workflows]
├── Vite & Modern Bundlers [HMR, rollup chunking, asset optimization]
├── Browser DevTools [Performance auditing, network throttling, memory checks]
└── Component Architecture [Clean separation of concerns, container/presentational split]

---

## 🏗 Key Architectural Highlights

1. **Finite State Machines (FSM) for Async Workflows:**
   Payment forms use explicit states (`IDLE` ➔ `PROCESSING` ➔ `FAILED` ➔ `FALLBACK` ➔ `SUCCESS`) preventing invalid intermediate states and UI glitches.
2. **Optimistic UI with Deterministic Reversion:**
   Mandate pausing and payout disbursements reflect immediately on screen while maintaining fallback rollback handling in case of synthetic rejection.
3. **Client-Side Financial Calculation Engine:**
   Instant payout fee tiers (0.15% tier brackets + GST adjustments) computed deterministically on every slider tick with zero DOM jitter.
4. **Zero External CSS Overhead:**
   Built completely on Tailwind CSS v4 (`@tailwindcss/vite`) with standard utility classes, zero runtime CSS-in-JS performance penalty.

---


📬 Contact & Connect
Abhay Vinod
Software & UI Engineer — Bengaluru, Karnataka, India
📧 Email: abhayvinod544@gmail.com
📱 Phone: +91 8867170017
🐙 GitHub: github.com/abhayvinod-web
