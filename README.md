# Koo App Clone

A web clone of [Koo](https://www.kooapp.com/), the Indian microblogging and social networking service founded by Aprameya Radhakrishna and Mayank Bidawatka (Bombinate Technologies). This project was built as a construct-week assignment.

**Live demo:** [https://koo-app-1.netlify.app/](https://koo-app-1.netlify.app/)

---

## Team

| Name      | Role        |
| --------- | ----------- |
| Pranav    | Team member |
| Samrat    | Team member |
| Sunaina   | Team member |
| Gopal     | Team member |
| Rushikesh | Team member |

**Duration:** 5 days

---

## About the project

Koo is a language-first social platform where people share short posts (koos), follow creators, and explore topics in regional languages. This clone recreates the core browsing experience of the original site:

- A marketing-style **landing page** with feature highlights, stats, and language messaging
- A logged-in style **feed** for posts from users
- **People to follow**, popular creators, and individual profile pages
- Topic sections such as **Cricket**, **Videos**, and **Polls**
- **Login** with OTP-style auth, Google/Facebook UI, and reCAPTCHA
- **Create post** and comment flows backed by a mock JSON API
- **Search**, language switching, and a sidebar navigation layout similar to Koo

Data is loaded from a hosted mock API (`https://mock-server-app-fqpl.onrender.com`). Auth and post state are managed with Redux.

### User flow

```
Landing page (/)
    └── Go to Feed
            └── Main app (/navbar/...)
                    ├── Feed
                    ├── People / Following
                    ├── Popular
                    ├── Cricket
                    ├── Videos
                    ├── Polls
                    └── Login / Create post
```

---

## Features

- **Landing page** — hero section, feature carousel, “Koo in numbers”, QR/footer, and language list
- **Feed** — user posts loaded from the mock server, with loading states
- **People** — people you can follow, global creators, new-to-Koo, and popular accounts
- **Profiles** — individual user pages at `/navbar/individualuser/:id`
- **Explore topics** — Cricket, Videos, and Polls
- **Auth** — login modal, OTP check, Google/Facebook buttons, reCAPTCHA
- **Posting** — compose posts and comments (persisted to the mock API)
- **Search** — query users on the mock server
- **i18n** — language support via i18next (English, Hindi, Gujarati, Bengali, Punjabi, Telugu, Kannada, Marathi)
- **Responsive UI** — Chakra UI, React Icons, and Bootstrap

---

## Tech stack

| Area        | Tools                                            |
| ----------- | ------------------------------------------------ |
| UI          | React 18, Chakra UI, Bootstrap, CSS              |
| Routing     | React Router v6                                  |
| State       | Redux, React Redux, redux-logger                 |
| Media       | react-player, react-audio-player, react-slick    |
| i18n        | i18next, react-i18next                           |
| Auth extras | react-google-recaptcha, react-speech-recognition |
| Data        | JSON / mock REST API (Render)                    |
| Build       | Create React App (`react-scripts`)               |
| Deploy      | Netlify                                          |

---

## Project structure

```
Koo-AppClone/
├── README.md                 ← this file
└── koo-app/                  ← React application
    ├── package.json
    ├── public/
    ├── db.json               ← sample json-server data
    └── src/
        ├── App.js
        ├── index.js
        └── Components/
            ├── AllRoutes/    ← route definitions
            ├── Home/         ← landing page
            ├── Navbar/       ← sidebar + layout
            ├── Feed/         ← home feed
            ├── People/       ← follow lists & profiles
            ├── Login/        ← auth, posts, Redux store
            ├── Cricket/
            ├── Videos/
            ├── Polls/
            ├── Popular/
            └── Loading/
```

---

## Prerequisites

Install these before you start:

- [Node.js](https://nodejs.org/) **16+** (LTS recommended)
- npm (comes with Node.js)
- A modern browser (Chrome, Firefox, or Edge)

Check versions:

```bash
node -v
npm -v
```

---

## Setup guide

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/Koo-AppClone.git
cd Koo-AppClone
```

### 2. Install dependencies

The React app lives in the `koo-app` folder:

```bash
cd koo-app
npm install
```

### 3. Start the development server

```bash
npm start
```

This opens the app at [http://localhost:3000](http://localhost:3000). The page reloads when you edit source files.

Feed, people, polls, and related data come from the public mock API. You do not need to run a local backend for the default setup. If that hosted API is slow or down, wait a moment and refresh — Render free instances can take a few seconds to wake up.

### 4. (Optional) Run a local JSON server

If you want a local API instead of the hosted one:

```bash
npm install -g json-server
json-server --watch db.json --port 3001
```

You would then need to point the `fetch` URLs in the components to `http://localhost:3001` instead of `https://mock-server-app-fqpl.onrender.com`.

---

## Available scripts

Run these from the `koo-app` directory:

| Command         | Description                                                  |
| --------------- | ------------------------------------------------------------ |
| `npm start`     | Start the app in development mode at `http://localhost:3000` |
| `npm run build` | Create an optimized production build in `koo-app/build`      |
| `npm test`      | Run tests in watch mode                                      |
| `npm run eject` | Eject from Create React App (one-way; usually not needed)    |

---

## Main routes

| Path                         | Page                  |
| ---------------------------- | --------------------- |
| `/`                          | Landing / home        |
| `/navbar/feed`               | Feed                  |
| `/navbar/people`             | People you can follow |
| `/navbar/following`          | Following             |
| `/navbar/popular`            | Popular               |
| `/navbar/cricket`            | Cricket               |
| `/navbar/videos`             | Videos                |
| `/navbar/polls`              | Polls                 |
| `/navbar/login`              | Login                 |
| `/navbar/individualuser/:id` | User profile          |
| `/navbar/new`                | New posts             |

---

## Production build

```bash
cd koo-app
npm run build
```

The `build` folder can be deployed to Netlify, Vercel, GitHub Pages, or any static host. This project is already deployed on Netlify.

---

## Notes

- This is a **front-end clone** for learning and demonstration. It is not affiliated with Koo or Bombinate Technologies.
- Some login and Google auth UI is simulated; it does not use a full production identity provider.
- The mock API is shared and public, so posts you create may not persist forever.
