# Sunshine Model High School - Reunion 2026 Registration Portal

This is a modern and responsive web registration form for the **Eid-ul-Adha Reunion 2026** of Sunshine Model High School. Alumni can seamlessly submit their details through this form to complete their registration.

## 🚀 Features

- **Modern Design:** Built with Tailwind CSS, featuring an attractive dark mode and a glassmorphism user interface[cite: 2].
- **Real-Time Submission:** Powered by EmailJS to send data directly to your email without needing a backend server[cite: 1, 2].
- **User Friendly:** Includes a dynamic loading state ("প্রসেসিং হচ্ছে...") during submission and instant alert messages for success or error feedback.
- **Fully Responsive:** Optimized to look and work great across all devices, including mobiles, tablets, and desktops[cite: 2].

## 🛠️ Technologies Used

- **HTML5:** For the page structure and form layout[cite: 2].
- **Tailwind CSS (v4):** For modern styling and responsiveness via CDN[cite: 2].
- **JavaScript (ES6):** For form handling, validation, and submission logic[cite: 1, 2].
- **EmailJS SDK:** For client-side email transmission[cite: 1, 2].

## 📁 Project Structure

```text
├── index.html       # Main web page (UI)
├── app.js           # Email submission and form handling logic
└── README.md        # Project documentation
```
## ⚙️ Setup and Configuration

Follow these steps to configure and run the project locally with your own accounts:

### 1. Email Service Configuration (EmailJS)
1. Create an account on [EmailJS](https://www.emailjs.com/).
2. Add an **Email Service** (e.g., Gmail) from your dashboard and copy the **Service ID**.
3. Create a new **Email Template**. Use the following exact variables inside the template body to receive the form data correctly:
   - `{{full_name}}`[cite: 1]
   - `{{user_email}}`[cite: 1]
   - `{{phone_number}}`[cite: 1]
   - `{{current_location}}`[cite: 1]
   - `{{ssc_batch}}`[cite: 1]
   - `{{tshirt_size}}`[cite: 1]
4. Save the template and copy its **Template ID**.
5. Go to your Account Settings and copy your **Public Key**.

### 2. Update the Source Code
Open your `app.js` file and replace the placeholders with your collected keys[cite: 1]:

```javascript
// Initialize EmailJS
(function() {
    emailjs.init("YOUR_PUBLIC_KEY"); // Paste your Public Key here
})(); //[cite: 1]

// ... (rest of the code)

// Replace placeholders with your actual EmailJS Dashboard IDs
emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData) //
```

## 💻 How to Run

1. Download or clone all project files into a folder on your computer.
2. Simply double-click the `index.html` file to open it in any modern web browser.
3. Fill out the form fields and click the **"রেজিস্ট্রেশন সম্পন্ন করুন"** (Complete Registration) button to test the configuration[cite: 1, 2].

---
*Developed for Sunshine Model High School Reunion 2026.*
