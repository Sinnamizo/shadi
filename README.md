# Shadi UI Prototype

This project is a UI prototype for a matrimony and matchmaking platform inspired by products like Shaadi. The current codebase is focused on front-end screens only. It demonstrates the main user journeys, navigation structure, and product modules that a real matrimony platform would need.

## What This Application Is

This application is a matrimonial matchmaking platform.

Core idea:
Users create profiles, search or receive recommended matches, send interests, communicate with potential partners, and upgrade to premium plans to unlock deeper contact and communication features.

This platform acts as a matchmaking facilitator, not a direct matchmaking agent.

## Simple Platform Flow

1. User registers.
2. User creates a detailed profile.
3. User uploads photos and sets partner preferences.
4. User searches manually or receives matches from the system.
5. User sends interests, requests photos, or starts communication.
6. User upgrades to premium to unlock contact and premium communication actions.
7. Platform builds trust through verification, moderation, and safe interactions.
8. Successful match leads to marriage outcome.

## 10 Core Modules

### 1. User Module
- Signup and login
- OTP, email, social login
- Profile creation
- Photo upload
- Personal details and partner preferences

This is the heart of the app.

### 2. Search and Filter Module
- Religion, caste, location
- Salary, education, profession
- Height, habits, marital status
- Basic and advanced filters

Advanced filtering is a major value driver for matrimony products.

### 3. Matchmaking Engine
- Preference-based matching
- Behavior-based ranking
- AI-assisted recommendations

Initial logic can start with a simple scoring model:

```text
match_score = age_match + location_match + education_match + preference_match
```

Later, this can evolve into ML-based ranking.

### 4. Communication Module
- Send interest
- Chat
- Voice or video call
- Request contact details
- Request photos

Premium access is commonly required for deeper communication.

### 5. Verification and Trust Module
- Mobile OTP verification
- ID verification
- Photo verification
- Verified badges

Trust and authenticity are critical for the matrimony domain.

### 6. Payment and Subscription Module
- Freemium model
- Paid contact unlocks
- Premium plans
- Boost profile features

Most matrimony revenue typically comes from subscriptions.

### 7. Notification Module
- Push notifications
- Email alerts
- WhatsApp reminders
- Match activity alerts

Examples:
- You got a new interest
- 5 matches today

### 8. Admin Panel Module
- Manage users
- Approve or reject profiles
- Moderate photos
- Control subscriptions
- View analytics

This is essential for platform operations.

### 9. Safety and Moderation Module
- Report user
- Block user
- Fake profile detection
- Abuse review workflow
- AI moderation

Safety directly affects business trust and conversion.

### 10. Marketing and Growth Module
- Referral system
- Ads and campaigns
- SEO
- Success stories
- Retention and re-engagement flows

## Current UI Coverage In This Project

The current prototype includes UI screens for the major user-facing journeys:

### Dashboard and Profile
- `/`
- `/my-profile`
- `/my-photos`
- `/partner-profile`
- `/settings`

### Search and Discovery
- `/search`
- `/search/advanced`
- `/today-matches`
- `/new-matches`
- `/my-matches`
- `/near-me`
- `/more-matches`

### Payments and Account Utility
- `/my-orders`

### Inbox and Communication
- `/inbox`
- `/inbox/accepted`
- `/inbox/filtered-out`
- `/inbox/requests`
- `/inbox/requests/accepted`
- `/inbox/requests/sent`
- `/inbox/sent`
- `/inbox/contacts`
- `/inbox/deleted`

## How The Current Screens Map To Product Modules

### User Module
- Dashboard
- My Profile
- My Photos
- Partner Preferences

### Search and Filter Module
- Basic Search
- Advanced Search
- Match listing screens

### Matchmaking Engine
- Today Matches
- New Matches
- My Matches
- Near Me
- More Matches

### Communication Module
- Inbox
- Accepted
- Requests
- Sent
- Contacts
- Deleted

### Verification and Trust Module
- Blue Tick UI
- Verification prompts
- Premium and trust prompts on multiple pages

### Payment and Subscription Module
- My Orders
- Upgrade banners
- Premium CTAs

## Current Technical Status

At the moment, this repository is a front-end prototype only.

Implemented:
- Next.js app routing
- Shared headers and navigation patterns
- Multiple static UI screens
- Screen-specific layouts for profile, inbox, search, and match flows

Not yet implemented:
- Database
- Authentication
- API layer
- Realtime chat
- Match scoring backend
- Payment gateway integration
- Admin panel backend
- Moderation workflows

## Recommended Next Build Phase

To convert this from UI prototype into a real application, the next implementation order should be:

1. Authentication and user onboarding
2. Profile schema and profile CRUD
3. Search and filters API
4. Match recommendation engine
5. Interest and inbox workflows
6. Verification system
7. Subscription and payments
8. Notifications
9. Admin moderation tools
10. Analytics and growth features

## Getting Started

Run the app locally:

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

## Summary

This project represents a matrimony platform UI system with the main product surfaces already designed. The screens now communicate a clear product structure:

- user onboarding and profile management
- search and advanced filtering
- recommendation and match browsing
- inbox and communication workflows
- subscription and trust prompts

The next step is not more screens alone. The next step is turning these screens into a real product by adding backend data models, APIs, auth, subscription logic, and matchmaking workflows.
