# 🎓 Sunshine Model High School - Reunion 2026 Registration Portal

![HTML5](https://img.shields.io/badge/HTML5-E34C26?style=for-the-badge&logo=html5&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![EmailJS](https://img.shields.io/badge/EmailJS-EA4335?style=for-the-badge&logo=gmail&logoColor=white)

![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-1.0-blue?style=for-the-badge)

---

## 📋 Project Overview

A modern, responsive, and lightweight web registration portal for the Sunshine Model High School reunion event. This project allows alumni and attendees to submit their details through a clean form and send the information directly via EmailJS without requiring a backend server.

The reunion registration system is designed to help organizers collect attendee information quickly and efficiently. It provides a simple yet professional UI for gathering personal details, academic batch information, and T-shirt preferences for the event.

### 🎯 Perfect For:

- 🏫 School alumni reunions
- 👥 Community gatherings
- 📝 Event registrations
- 📊 Participant tracking
- 📧 Quick email-based submission workflows

---

## ✨ Why This Project

Organizing event registrations manually can be time-consuming and error-prone. This portal reduces that effort by offering a user-friendly form where participants can register themselves in a few steps. All submissions are delivered to the organizer through EmailJS, making the project fast to deploy and easy to maintain.

---

## 🚀 Key Features

- ✅ Responsive and mobile-friendly interface
- 🌙 Dark modern UI with gradient accents
- 💫 Glassmorphism-inspired card design
- 📝 Clean attendee registration form
- ⚡ Real-time validation using HTML form fields
- 📧 EmailJS integration for direct form submission
- ⏳ Loading state while sending the registration request
- 🎉 Success and error alert feedback
- 🔧 No backend required for basic operation
- 🎨 Beautiful Tailwind CSS styling

---

## 🛠️ Technologies Used

| Technology | Purpose | Badge |
|---|---|---|
| HTML5 | Page structure and form layout | ![HTML](https://img.shields.io/badge/HTML5-E34C26?logo=html5&logoColor=white) |
| Tailwind CSS v4 | Modern styling via CDN | ![Tailwind](https://img.shields.io/badge/Tailwind-06B6D4?logo=tailwind-css&logoColor=white) |
| JavaScript ES6 | Form handling and validation | ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black) |
| EmailJS | Form email delivery | ![EmailJS](https://img.shields.io/badge/EmailJS-EA4335?logo=gmail&logoColor=white) |

---

## 📁 Project Structure

```text
Reunion-Registration/
├── 📄 index.html        # Main registration form UI
├── ⚙️ app.js            # JavaScript logic for form handling and EmailJS
├── 📚 README.md         # Project documentation
└── 📋 LICENSE           # MIT License file
```

---

## 📋 Registration Form Fields

The form collects the following information from participants:

| Field | Type | Description |
|---|---|---|
| **Full Name** | Text | Participant's full name |
| **Email Address** | Email | Contact email address |
| **Mobile Number** | Tel | WhatsApp or mobile number |
| **Current Location** | Text | Current city/location |
| **SSC Batch** | Select | Graduation batch year |
| **T-shirt Size** | Select | Preferred shirt size (S, M, L, XL, XXL) |

---

## 🔄 How It Works

```
User fills form → JavaScript captures data → EmailJS sends email → Organizer receives details
```

1. 🌐 The user opens the registration page in a browser
2. ✍️ They fill out the reunion registration form
3. 🔄 The form values are collected in JavaScript
4. 📤 The data is sent to EmailJS using a configured service and template
5. 📧 The organizer receives the registration details via email

---

## 💻 Local Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/TarikurRahmanBD/Reunion-Registration.git
cd Reunion-Registration
```

### 2️⃣ Open the Project

You can simply open `index.html` in a browser:

**Windows:**
```bash
start index.html
```

**Linux/macOS:**
```bash
xdg-open index.html
```

**Or manually:** Right-click `index.html` → Open with → Your browser

---

## 🔐 EmailJS Configuration

To make the registration form functional, configure EmailJS in the project.

### Step 1️⃣: Create an EmailJS Account

- 🌐 Visit: [EmailJS](https://www.emailjs.com/)
- 📝 Create a free account
- ➕ Add an email service (Gmail, Outlook, etc.)
- 📧 Create an email template

### Step 2️⃣: Add Template Variables

Use the following variables in your EmailJS template body:

```
{{full_name}}
{{user_email}}
{{phone_number}}
{{current_location}}
{{ssc_batch}}
{{tshirt_size}}
```

### Step 3️⃣: Collect Your Credentials

From EmailJS Dashboard:
- ✅ **Service ID** (from Email Services)
- ✅ **Template ID** (from Email Templates)
- ✅ **Public Key** (from Account Settings)

### Step 4️⃣: Update Your JavaScript

Open `app.js` and replace the placeholder values:

```javascript
// Initialize EmailJS with your Public Key
(function() {
    emailjs.init("YOUR_PUBLIC_KEY");  // Replace with your actual public key
})();

// Replace with your Service and Template IDs
emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData)
```

### 📌 Complete Example

```javascript
(function() {
    emailjs.init("user_abc123xyz789");  // Your public key
})();

emailjs.send("service_gmail123", "template_reunion456", formData)
    .then(function(response) {
        console.log('✅ SUCCESS!', response.status);
    }, function(error) {
        console.log('❌ FAILED...', error);
    });
```

---

## 🎨 Customization Options

You can easily customize the portal:

| File | What to Change |
|---|---|
| `index.html` | Form layout, content, labels, styling classes |
| `app.js` | Logic, EmailJS configuration, validation rules |
| CSS Classes | Color theme and design using Tailwind utilities |

### Popular Customizations:

- 🎨 Change the gradient colors (cyan, blue → your brand colors)
- 📝 Update form labels (Bangla ↔ English)
- 🎭 Add/remove form fields
- 🌍 Add multi-language support
- 🔔 Customize alert messages

---

## 🚀 Deployment Options

### GitHub Pages (Free & Easy)

```bash
# Push your repository to GitHub
git push origin main

# Go to Settings → Pages → Select main branch → Save
# Your site will be live at: https://yourusername.github.io/Reunion-Registration/
```

### Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

Drag and drop your project folder to [Netlify](https://netlify.com)

---

## ⚡ Benefits

- ⚙️ Lightweight and fast
- 🆓 Zero backend setup required
- 📱 Easy to deploy on GitHub Pages or any static hosting
- 💰 Minimal maintenance cost
- 😊 User-friendly interface for participants
- 🔒 Data sent directly via EmailJS (no third-party storage)

---

## ⚠️ Current Limitations

This project intentionally stays simple and does not include:

- 🗄️ Database storage
- 👨‍💼 Admin dashboard
- 🔐 Login/authentication system
- 📥 Bulk export of registrations
- 📊 Advanced analytics
- 💳 Payment integration

---

## 🔮 Future Enhancements

Possible upgrades for this project:

- [ ] Admin panel for registration management
- [ ] Save submissions to a database (Firebase, MongoDB)
- [ ] CSV/Excel export functionality
- [ ] PDF confirmation tickets
- [ ] Attendee search and filtering
- [ ] Auto email confirmation to participant
- [ ] Online payment/ticket integration
- [ ] QR code generation for check-in
- [ ] Real-time dashboard for organizers
- [ ] Multi-language support

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

- 🐛 Report bugs
- 💡 Suggest features
- 🔧 Submit pull requests
- 📝 Improve documentation

---

## 📄 License

This project is licensed under the **MIT License**. 

```text
MIT License
Copyright (c) 2026 Tarikur Rahman

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions...
```

See the `LICENSE` file for more information.

---

## 👨‍💻 Author

**Tarikur Rahman**
- 🐙 GitHub: [@TarikurRahmanBD](https://github.com/TarikurRahmanBD)
- 📧 Email: tarikurrahman2008@gmail.com

---

## 🎉 Acknowledgments

- 🎨 Tailwind CSS for beautiful styling
- 📧 EmailJS for email service integration
- 🏫 Sunshine Model High School for inspiration

---

<div align="center">

### 🌟 If this project helped you, please give it a star! ⭐

**Developed for Sunshine Model High School Reunion 2026**

Made with ❤️ by [Tarikur Rahman](https://github.com/TarikurRahmanBD)

</div>
