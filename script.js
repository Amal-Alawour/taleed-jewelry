// دالة لتأكيد استقبال طلب الانضمام لقائمة الانتظار
function handleFormSubmit(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة
    const name = document.getElementById('nameInput').value;
    alert(`شكراً لانضمامكِ لقائمة انتظار تليد يا ${name}! سنتواصل معكِ فور توفر العينة الأولى.`);
    
    // تفريغ الحقول بعد الإرسال
    document.getElementById('nameInput').value = '';
    document.getElementById('emailInput').value = '';
}
// دالة تغيير اللغة
function changeLanguage(lang) {
    const htmlTag = document.documentElement;
    
    // تغيير اتجاه الصفحة بناءً على اللغة
    if (lang === 'en') {
        htmlTag.setAttribute('dir', 'ltr');
        htmlTag.setAttribute('lang', 'en');
        document.body.style.fontFamily = "'Montserrat', sans-serif";
    } else {
        htmlTag.setAttribute('dir', 'rtl');
        htmlTag.setAttribute('lang', 'ar');
        document.body.style.fontFamily = "'Tajawal', sans-serif";
    }

    // ترجمة العناصر التي تحتوي على خصائص data-ar و data-en
    const elements = document.querySelectorAll('[data-ar]');
    elements.forEach(element => {
        if (lang === 'en' && element.getAttribute('data-en')) {
            element.innerText = element.getAttribute('data-en');
        } else if (lang === 'ar' && element.getAttribute('data-ar')) {
            element.innerText = element.getAttribute('data-ar');
        }
    });

    // تغيير النصوص التوضيحية لمدخلات نموذج التسجيل (Placeholders)
    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');
    
    if (lang === 'en') {
        if(nameInput) nameInput.placeholder = "Your Full Name";
        if(emailInput) emailInput.placeholder = "Email Address or Phone Number";
    } else {
        if(nameInput) nameInput.placeholder = "الاسم الكريم";
        if(emailInput) emailInput.placeholder = "البريد الإلكتروني أو رقم الجوال";
    }
}

// دالة تأكيد استقبال الطلب بلغة العميل
function handleFormSubmit(event) {
    event.preventDefault();
    const currentLang = document.getElementById('langSelect').value;
    const name = document.getElementById('nameInput').value;
    
    if (currentLang === 'en') {
        alert(`Thank you for joining Taleed's waitlist, ${name}! We will reach out to you soon.`);
    } else {
        alert(`شكراً لانضمامكِ لقائمة انتظار تليد يا ${name}! سنتواصل معكِ فور توفر العينة الأولى.`);
    }
    
    document.getElementById('nameInput').value = '';
    document.getElementById('emailInput').value = '';
}
// دالة مبدل طرق الارتداء التفاعلي لقلادة الرواشين
function switchWearOption(side) {
    const imgElement = document.getElementById('modularPendantImg');
    const buttons = document.querySelectorAll('.modular-toggle-container .toggle-btn');
    
    // إعادة تطبيق تأثير الانقال البصري (Fade-in)
    imgElement.classList.remove('fade-in-img');
    void imgElement.offsetWidth; // Trigger reflow
    imgElement.classList.add('fade-in-img');

    if (side === 'side1') {
        // صورة الوجه الأول (الرواشين)
        imgElement.src = 'images/rawashin-interactive.png.jpg';
        buttons[0].classList.add('active');
        buttons[1].classList.remove('active');
    } else if (side === 'side2') {
        // صورة الوجه الثاني (طبيعة السدر) - يمكنك وضع مسار الصورة الثانية هنا
        imgElement.src = 'images/natural-core-collection.png.jpg'; 
        buttons[1].classList.add('active');
        buttons[0].classList.remove('active');
    }
}
