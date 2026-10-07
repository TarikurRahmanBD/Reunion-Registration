# Sunshine Model High School - Reunion 2026 Registration Portal

A simple and responsive web application for collecting reunion registration details from alumni and participants. This project provides a clean registration form where users can submit their personal information, batch details, and T-shirt size, and the data is sent directly via EmailJS.

## Overview

This registration portal is designed for the Sunshine Model High School Eid-ul-Adha Reunion 2026 event. It helps organizers collect attendee information in a fast, organized, and user-friendly way without needing a backend server.

## Features

- Modern dark-themed UI with a glassmorphism-inspired design
- Fully responsive layout for mobile, tablet, and desktop screens
- Clean registration form for attendee details
- Real-time submission using EmailJS
- Loading state and success/error feedback messages
- Simple deployment without a server-side backend

## Technologies Used

- HTML5
- Tailwind CSS v4
- JavaScript (ES6)
- EmailJS

## Project Structure

```text
├── index.html       # UI for the reunion registration form
├── app.js           # Form logic and EmailJS submission
├── README.md        # Project documentation
├── LICENSE          # License file
```

## How It Works

1. User fills out the reunion form.
2. The form data is captured in JavaScript.
3. The data is sent through EmailJS using a configured service and template.
4. The organizer receives the submitted information in their email inbox.

## Local Setup

1. Clone the repository:

```bash
git clone https://github.com/TarikurRahmanBD/Reunion-Registration.git
cd Reunion-Registration
```

2. Open the project folder.
3. Launch `index.html` in a browser.

## EmailJS Configuration

To make the form work, you need to configure EmailJS in `app.js`.

### Step 1: Create EmailJS Account

- Go to [EmailJS](https://www.emailjs.com/)
- Create an account
- Set up an email service (for example, Gmail)
- Create an email template

### Step 2: Add Required Template Variables

Use these variables in your EmailJS template:

- `{{full_name}}`
- `{{user_email}}`
- `{{phone_number}}`
- `{{current_location}}`
- `{{ssc_batch}}`
- `{{tshirt_size}}`

### Step 3: Update the JavaScript

Open `app.js` and replace the placeholders:

```javascript
(function() {
    emailjs.init("YOUR_PUBLIC_KEY");
})();

emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData)
```

## Run the Project

Simply open `index.html` in any modern browser. Fill in the form and click the submit button to test the registration flow.

## Notes

- This project is a frontend-only registration system.
- It is ideal for events where organizers want a lightweight, quick-to-deploy form.
- If you want backend storage or database support, this can be extended in the future.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

Developed for Sunshine Model High School Reunion 2026.
