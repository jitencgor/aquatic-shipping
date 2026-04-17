# 🚢 Aquatic Shipping Services — Website

Production-grade logistics company website built with Next.js 14, TypeScript, Tailwind CSS, and Firebase.

---

## 🏗️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 14 (App Router) + TypeScript |
| Styling | Tailwind CSS |
| Forms | react-hook-form + Zod validation |
| Database | Firebase Firestore |
| Functions | Firebase Cloud Functions (TypeScript) |
| Hosting | Firebase Hosting (with Next.js framework support) |
| Email | Nodemailer via Gmail |

---

## 🚀 Getting Started

### 1. Clone & Install

```bash
git clone <your-repo>
cd aquatic-shipping

# Install frontend deps
npm install

# Install functions deps
cd functions && npm install && cd ..
```

### 2. Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create a new project: `aquatic-shipping`
3. Enable **Firestore** (start in production mode)
4. Enable **Cloud Functions** (Blaze plan required)
5. Enable **Hosting**
6. Register a **Web App** and copy config

### 3. Configure Environment Variables

```bash
cp .env.example .env.local
# Fill in your Firebase config values from step 2
```

### 4. Set Up Functions Email Config

```bash
firebase functions:config:set \
  email.user="yourgmail@gmail.com" \
  email.pass="your_16_char_app_password"
```

> **Note:** Use a [Gmail App Password](https://myaccount.google.com/apppasswords), not your main password.
> Enable 2FA on your Gmail first, then generate an App Password.

### 5. Initialize Firebase

```bash
npm install -g firebase-tools
firebase login
firebase use --add   # select your project
```

### 6. Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📦 Deployment

### Deploy Everything

```bash
# Build functions
cd functions && npm run build && cd ..

# Deploy all (hosting + functions + firestore rules)
firebase deploy
```

### Deploy Individually

```bash
firebase deploy --only hosting
firebase deploy --only functions
firebase deploy --only firestore:rules
```

---

## 📁 Project Structure

```
aquatic-shipping/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout (Navbar, Footer, mobile CTA)
│   ├── globals.css         # Global styles + Tailwind
│   ├── page.tsx            # Home page
│   ├── services/page.tsx   # Services page
│   ├── about/page.tsx      # About page
│   └── contact/page.tsx    # Contact page
├── components/
│   ├── Navbar.tsx          # Sticky navbar with scroll effect
│   ├── Footer.tsx          # Footer with links & contact
│   ├── ContactForm.tsx     # Lead form (Firestore + Zod)
│   └── MobileBottomCTA.tsx # Sticky mobile Call/WhatsApp bar
├── lib/
│   ├── firebase.ts         # Firebase app init
│   ├── types.ts            # TypeScript interfaces
│   └── schemas.ts          # Zod validation schemas
├── functions/
│   └── src/index.ts        # Cloud Function: email on new lead
├── public/
│   ├── sitemap.xml         # SEO sitemap
│   └── robots.txt          # SEO robots
├── firebase.json           # Firebase hosting + functions config
├── firestore.rules         # Firestore security rules
├── firestore.indexes.json  # Firestore composite indexes
└── .env.example            # Environment variable template
```

---

## 🔐 Firestore Security Rules

The rules enforce:
- **Leads collection**: Public write (form submissions) with server-side validation
- **All reads**: Blocked from client — access leads only via Firebase Console or Admin SDK
- **No client-side delete/update** on leads

---

## 📩 Lead Flow

1. User fills out contact form
2. Data saved to Firestore `leads` collection with `status: "new"`
3. Cloud Function triggers → sends email notification to `devang@aquaticshipping.in`
4. Auto-reply sent to the prospect's email
5. User redirected to WhatsApp after 2 seconds

---

## 🎨 Design System

- **Primary:** Deep Navy `#0B1F3A`
- **Accent:** Orange `#FF7A00`
- **Font:** Poppins (Google Fonts)
- **Radius:** 12–16px rounded cards
- **Animations:** CSS transitions, hover lift effects

---

## 📞 Contact

**Devang Mota** — Director  
Aquatic Shipping Services  
Gandhidham, Kutch, Gujarat — 370201  
📞 +91 90999 04497  
📧 devang@aquaticshipping.in
