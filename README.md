# Northstar Advisory

Northstar Advisory is a responsive consultancy website for a strategy, technology, and transformation practice. The site presents the firm's services, operating approach, industries, selected work, point of view, FAQs, and contact information in a single editorial-style experience.

## Overview

The site is designed for leadership teams navigating growth, operational complexity, technology change, and transformation. Its visual system uses a soft white background, a red accent palette, rounded media surfaces, expressive typography, and restrained motion to create a polished professional presentation.

## Features

- Responsive layout for desktop, tablet, and mobile screens
- Fixed navigation with desktop links and a mobile menu
- Scroll-aware navigation styling
- Reading-progress indicator at the top of the page
- Animated section reveals using `IntersectionObserver`
- Reduced-motion support for users who prefer less animation
- Hero section with primary and secondary calls to action
- Services, solutions, industries, process, about, insights, FAQ, and contact sections
- Responsive contact form with browser validation and inline status feedback
- Accessible skip link, navigation labels, form labels, image alt text, and live status messaging
- Responsive rounded image and card treatments
- Firebase Hosting configuration for deployment

## Technology

- React
- Vite
- JavaScript (ES modules)
- CSS
- Firebase Hosting configuration
- Google Fonts: DM Sans and Space Grotesk
- Unsplash-hosted photography

## Requirements

- Node.js 18 or newer
- npm

Check the installed versions with:

```bash
node --version
npm --version
```

## Getting Started

Clone the repository and install the dependencies:

```bash
git clone https://github.com/Charanbtech/Medical_RCM.git
cd Medical_RCM
npm install
```

Start the local development server:

```bash
npm run dev
```

Vite will print the local address in the terminal. The default address is:

```text
http://localhost:5173/
```

## Available Commands

### Development

```bash
npm run dev
```

Starts the Vite development server with hot module replacement.

### Production Build

```bash
npm run build
```

Creates an optimized production build in the `dist` directory.

### Preview the Production Build

```bash
npm run preview
```

Serves the generated `dist` directory locally so the production output can be reviewed before deployment.

## Project Structure

```text
.
├── src/
│   ├── App.jsx                 Main page layout and interactive components
│   └── main.jsx                React entry point and stylesheet imports
├── index.html                  HTML document shell and font loading
├── styles.css                  Base layout and component styles
├── professional-theme.css      Theme, premium styling, motion, and responsive refinements
├── responsive-fixes.css        Additional responsive corrections
├── firebase.json               Firebase Hosting configuration
├── vite.config.js              Vite and React configuration
├── package.json                Project metadata and npm scripts
└── .gitignore                  Local and generated files excluded from Git
```

## Content and Assets

The page content is currently defined in `src/App.jsx`. This includes service descriptions, solution categories, industry categories, FAQs, contact details, and image URLs.

Photography is loaded from Unsplash at runtime. A network connection is required for those images to display. For production use, replace the external URLs with approved, locally managed brand photography or a controlled image CDN.

## Contact Form

The contact form currently performs client-side validation and displays a success message after submission. It does not send data to an email service, CRM, database, or API.

Before using the form in production, connect it to the required service and add appropriate handling for:

- Form submission
- Spam prevention
- Data privacy and consent
- Error states
- Server-side validation
- Secure storage or delivery of submitted information

## Firebase Hosting

The repository includes a `firebase.json` file configured to serve the Vite output from `dist` and route requests to `index.html`.

Install or use the Firebase CLI, authenticate with the correct Firebase account, and select the appropriate Firebase project before deploying:

```bash
firebase login
firebase use <firebase-project-id>
npm run build
firebase deploy --only hosting
```

The `dist` directory must be generated before deployment. It is intentionally excluded from Git because it is a build artifact.

## Design System

The primary brand colors are:

- Accent red: `#FD1843`
- Soft white: `#FFF9FA`
- Ink: `#171316`
- Dark surface: `#201A1D`

The main design decisions are centralized in `professional-theme.css`. Base layout rules remain in `styles.css`, while responsive-specific adjustments are kept in `responsive-fixes.css`.

## Accessibility and Performance Notes

- The page includes a keyboard-accessible skip link.
- Navigation and form controls include accessible labels and states.
- Images include alternative text.
- Reduced-motion preferences disable entrance animations and unnecessary transitions.
- Lazy loading is used for below-the-fold images.
- The site is a static frontend and can be deployed through a CDN or static hosting provider.

## Development Notes

When editing the site:

1. Keep public-facing content in `src/App.jsx`.
2. Use the CSS variables in `professional-theme.css` for theme changes.
3. Run `npm run build` before committing changes.
4. Test the page at desktop and mobile widths.
5. Check the browser console and network panel when changing external images or fonts.

## License

No license has been specified for this project. Add a license before distributing the source publicly or using it as a reusable template.
