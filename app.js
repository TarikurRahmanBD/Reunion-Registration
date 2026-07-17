// EmailJS ইনিশিয়ালাইজ করা (EmailJS অ্যাকাউন্ট থেকে পাবলিক কি পাবেন)
(function() {
    emailjs.init("YOUR_PUBLIC_KEY"); // এখানে আপনার Public Key বসবে
})();

document.getElementById('reunionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // বোতাম লোডিং স্টেট করা
    const submitBtn = event.target.querySelector('button');
    submitBtn.innerText = "প্রসেসিং হচ্ছে...";
    submitBtn.disabled = true;

    // ফর্মের ডাটা অবজেক্ট তৈরি
    const formData = {
        full_name: document.getElementById('fullName').value,
        user_email: document.getElementById('userEmail').value,
        phone_number: document.getElementById('phone').value,
        current_location: document.getElementById('location').value,
        ssc_batch: document.getElementById('sscBatch').value,
        tshirt_size: document.getElementById('tShirtSize').value,
    };

    // EmailJS দিয়ে ইমেইল পাঠানো
    // "YOUR_SERVICE_ID" এবং "YOUR_TEMPLATE_ID" আপনার EmailJS ড্যাশবোর্ড থেকে পাবেন
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData)
        .then(function(response) {
            alert('🎉 সফলভাবে রেজিস্ট্রেশন সম্পন্ন হয়েছে! আপনার ইমেইল চেক করুন।');
            document.getElementById('reunionForm').reset();
            submitBtn.innerText = "রেজিস্ট্রেশন সম্পন্ন করুন";
            submitBtn.disabled = false;
        }, function(error) {
            alert('❌ কোনো সমস্যা হয়েছে! আবার চেষ্টা করুন।');
            console.log('FAILED...', error);
            submitBtn.innerText = "রেজিস্ট্রেশন সম্পন্ন করুন";
            submitBtn.disabled = false;
        });
});