# Sunshine Model High School - Reunion 2026 Registration Portal

A modern, responsive, and lightweight web registration portal for the Sunshine Model High School reunion event. This project allows alumni and attendees to submit their details through a clean form and send the information directly via EmailJS without requiring a backend server.

## Project Overview

The reunion registration system is designed to help organizers collect attendee information quickly and efficiently. It provides a simple yet professional UI for gathering personal details, academic batch information, and T-shirt preferences for the event.

This project is especially useful for:

- school alumni reunions
- community gatherings
- event registrations
- participant tracking
- quick email-based submission workflows

## Why This Project

Organizing event registrations manually can be time-consuming and error-prone. This portal reduces that effort by offering a user-friendly form where participants can register themselves in a few steps. All submissions are delivered to the organizer through EmailJS, making the project fast to deploy and easy to maintain.

## Features

- Responsive and mobile-friendly interface
- Dark modern UI with gradient accents
- Glassmorphism-inspired card design
- Clean attendee registration form
- Real-time validation using HTML form fields
- EmailJS integration for direct form submission
- Loading state while sending the registration request
- Success and error alert feedback
- No backend required for basic operation

## Technologies Used

- HTML5
- CSS (Tailwind CSS v4 via CDN)
- JavaScript (ES6)
- EmailJS for form email delivery

## Project Structure

```text
Reunion-Registration/
├── index.html        # Main registration form UI
├── app.js            # JavaScript logic for form handling and EmailJS
├── README.md         # Project documentation
├── LICENSE           # License file
```

## Registration Form Fields

The form collects the following information:

- Full Name
- Email Address
- Mobile Number / WhatsApp Number
- Current Location
- SSC Batch
- T-shirt Size

## How It Works

1. The user opens the registration page in a browser.
2. They fill out the reunion registration form.
3. The form values are collected in JavaScript.
4. The data is sent to EmailJS using a configured service and template.
5. The organizer receives the registration details via email.

## Local Setup

### 1. Clone the Repository

```bash
git clone https://github.com/TarikurRahmanBD/Reunion-Registration.git
cd Reunion-Registration
```

### 2. Open the Project

You can simply open `index.html` in a browser.

```bash
start index.html
```

or on Linux/macOS:

```bash
xdg-open index.html
```

## EmailJS Configuration

To make the registration form functional, configure EmailJS in the project.

### Step 1: Create an EmailJS Account

- Visit: https://www.emailjs.com/
- Create a free account
- Add an email service such as Gmail
- Create an email template

### Step 2: Add Template Variables

Use the following variables in your EmailJS template:

- `{{full_name}}`
- `{{user_email}}`
- `{{phone_number}}`
- `{{current_location}}`
- `{{ssc_batch}}`
- `{{tshirt_size}}`

### Step 3: Update Your JavaScript

Open `app.js` and replace the placeholder values:

```javascript
(function() {
    emailjs.init("YOUR_PUBLIC_KEY");
})();

emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData)
```

### Example

```javascript
(function() {
    emailjs.init("user_xxxxxxxxxxxxx");
})();

emailjs.send("service_abc123", "template_xyz456", formData)
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
        console.log('FAILED...', error);
    });
```

## Customization Options

You can easily customize the portal by editing:

- `index.html` for form layout and content
- `app.js` for logic and EmailJS configuration
- the color theme and style classes in the HTML elements

## Running the Project

The project is frontend-only, so no installation commands are required beyond opening the HTML file. This makes it ideal for quick prototypes and event operations where a full backend is not necessary.

## Benefits

- lightweight and fast
- zero backend setup for simple use cases
- easy to deploy on GitHub Pages or any static hosting service
- minimal maintenance cost
- user-friendly interface for event participants

## Limitations

This project is intentionally simple and does not include:

- database storage
- admin dashboard
- login/authentication system
- bulk export of registrations
- advanced analytics

If you need those features, the project can be extended with a backend such as Node.js, PHP, Firebase, or a database-driven solution.

## Future Enhancements

Possible upgrades for this project include:

- admin panel for registration management
- saving submissions to a database
- CSV export
- PDF confirmation tickets
- attendee search and filtering
- email confirmation to the participant
- online payment integration

## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.

---

Developed for Sunshine Model High School Reunion 2026.
