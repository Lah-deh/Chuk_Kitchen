Chuks Kitchen

Trueminds Innovations Internship Program
Developer: Asokere Success Boluwatife

Live site: https://chuk-kitchen.vercel.app/

Source code: https://github.com/Lah-deh/Chuk_Kitchen

##Project Overview

Chuks Kitchen is a food ordering web interface built for Mr. Chukwudi Okorie’s Nigerian home cooking business.

This project focuses on translating a Figma design into a responsive multi-page frontend application. The goal was to recreate the visual layout, structure, and user flow as closely as possible using modern frontend tools.

Users can browse meals, explore categories, register an account, and move through a simple ordering flow.

This is a frontend-only implementation. There is no backend, authentication, or API integration.

##Tech Stack

React (Vite)
Component-based UI development and fast development environment.

React Router
Handles navigation between pages.

Tailwind CSS
Used for styling and responsive layout without writing large amounts of custom CSS.

React Icons
Provides interface icons such as menu, form, and navigation icons.

Why these tools:

-React allows reusable components across multiple pages

-Tailwind speeds up layout building and responsive design

-Vite provides fast startup and hot reload during development

Project Structure

src/

assets/
Images and static design resources.

components/
Reusable UI building blocks.

Header.jsx → navigation bar (mobile drawer and desktop layout)

Footer.jsx → site footer

Card.jsx → food item display card

Popular.jsx → food grid section

Menu.jsx → category navigation

pages/
Full page layouts.

Hero.jsx → landing page

Discover.jsx → promotional banner page

Login.jsx → sign in form

Register.jsx → account registration form

MenuPage.jsx → food listing page

App.jsx → route configuration
index.css → global styles and custom classes
main.jsx → application entry point

Pages Implemented

Home ( / )
Landing page with hero section, feature cards, and navigation.

Discover ( /discover )
Promotional banner with call-to-action.

Login ( /login )
User sign-in interface.

Register ( /register )
Account creation form.

Menu ( /menu )
Food listing with category layout and card grid.

Design Implementation Approach

Layout
Desktop uses a split-screen layout with image and content sections. Mobile stacks content vertically for better readability.

Typography and Colors
Brand styling is handled through global CSS variables. Colors follow the Figma design system for text, accents, and links.

Component Reuse
Shared UI elements such as header, footer, and food cards were separated into reusable components to keep code clean and maintainable.

Responsiveness
Tailwind breakpoints are used to adjust layout and grid structure across screen sizes. Food items display in a single column on mobile and multiple columns on larger screens.

Assumptions made:

Navigation highlighting was not implemented

Food data is static because no API exists

Category filters are visual only and do not change data

Buttons do not trigger real actions

Custom CSS Classes

Defined in index.css:

.page
Controls page margins and base font styling.

.chuk
Brand heading style.

.card
Hero page feature card styling.

Limitations

All data is static. No external data source.

Cart functionality is not implemented.

Forms do not validate user input.

Menu category filters are not functional.

Navigation does not track active routes.

Improvements With More Time

Add global cart state using React Context or Zustand.

Connect to backend API for real menu data and authentication.

Implement form validation and error handling.

Add working category filtering.

Improve loading states and user feedback.

Add accessibility enhancements.

Add component testing.

Running the Project

Clone the repository

npm install

npm run dev

Build for production

npm run build

Live Preview

https://chuk-kitchen.vercel.app/