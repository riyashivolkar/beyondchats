# BeyondChats

## Overview

BeyondChats is an advanced communication and organization platform designed to streamline user interactions and chatbot integrations. It offers secure user registration, Google authentication, email verification, and organization setup. The platform also features an auto-fetching meta-description tool for websites, as well as chatbot integration and testing.

## Features

### 🔐 User Registration & Authentication

- Secure user registration with email and password.
- Google authentication for quick sign-ups.
- Email verification process to ensure genuine user registrations.

### 🏢 Organization Setup

- Users can set up organizations easily.
- The platform can auto-fetch meta-descriptions from website URLs.

### 🤖 Chatbot Integration & Testing

- Integrated chatbot functionality to enhance user interactions.
- Users can test chatbot responses in real-time.

## Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS
- **Backend:** Firebase Authentication, Firestore Database
- **Hosting & Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js installed on your system
- Firebase project set up with authentication enabled

### Installation

```sh
# Clone the repository
git clone https://github.com/your-repo/beyondchats.git
cd beyondchats

# Install dependencies
npm install
```

### Environment Variables

Create a `.env.local` file and add the following Firebase configuration:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### Running the Project

```sh
npm run dev
```

The project will be available at `http://localhost:3000/`.

## Live Website

🔗 [BeyondChats Live](https://beyondchats-phi.vercel.app/)
