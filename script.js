// ==========================================
// 1. دالة تأكيد استقبال الطلب لقائمة الانتظار (تدعم اللغة الحالية)
// ==========================================
function handleFormSubmit(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة
    
    const langSelect = document.getElementById('langSelect');
    const currentLang = langSelect ? langSelect.value : 'ar';
    const nameInput = document.getElementById('nameInput');
    const name = nameInput ? nameInput.value : '';
    
    if (currentLang === 'en') {
        alert(`Thank you for joining Taleed's waitlist, ${name}! We will reach out to you soon.`);
    } else {
        alert(`شكراً لانضمامكِ لقائمة انتظار تليد يا ${name}! سنتواصل معكِ فور توفر العينة الأولى.`);
    }
    
    // تفريغ الحقول بعد الإرسال
    if (nameInput) nameInput.value = '';
    const emailInput = document.getElementById('emailInput');
    if (emailInput) emailInput.value = '';
}

// متغيرات عامة للنافذة المنبثقة (Story Modal)
let currentLang = 'ar';
let activeModalData = { arTitle: '', enTitle: '', coords: '', arText: '', enText: '' };

// ==========================================
// 2. دوال النافذة المنبثقة (Story Modal) ثنائية اللغة
// ==========================================
function openStoryModal(arTitle, enTitle, coords, arText, enText) {
    activeModalData = { arTitle, enTitle, coords, arText, enText };
    updateModalContent();
    document.getElementById('storyModal').style.display = 'flex';
}

function updateModalContent() {
    const titleEl = document.getElementById('modalTitle');
    const coordsEl = document.getElementById('modalCoords');
    const textEl = document.getElementById('modalText');
    
    if (titleEl) titleEl.innerText = currentLang === 'en' ? activeModalData.enTitle : activeModalData.arTitle;
    if (coordsEl) coordsEl.innerText = activeModalData.coords;
    if (textEl) textEl.innerText = currentLang === 'en' ? activeModalData.enText : activeModalData.arText;
}

function closeStoryModal() {
    document.getElementById('storyModal').style.display = 'none';
}

// إغلاق النافذة عند الضغط خارجها
window.onclick = function(event) {
    const modal = document.getElementById('storyModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// ==========================================
// 3. دالة تغيير اللغة (عربي / إنجليزي) وتحديث الخط والاتجاه
// ==========================================
function changeLanguage(lang) {
    currentLang = lang; // تحديث اللغة العامة للنافذة أيضاً
    const htmlTag = document.documentElement;
    
    // تغيير اتجاه الصفحة والخط بناءً على اللغة
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
            element.innerHTML = element.getAttribute('data-en');
        } else if (lang === 'ar' && element.getAttribute('data-ar')) {
            element.innerHTML = element.getAttribute('data-ar');
        }
    });

    // تغيير النصوص التوضيحية لمدخلات نموذج التسجيل (Placeholders)
    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');
    
    if (lang === 'en') {
        if (nameInput) nameInput.placeholder = "Your Full Name";
        if (emailInput) nameInput.placeholder = "Email Address or Phone Number";
    } else {
        if (nameInput) nameInput.placeholder = "الاسم الكريم";
        if (emailInput) nameInput.placeholder = "البريد الإلكتروني أو رقم الجوال";
    }

    // تحديث محتوى النافذة المنبثقة فوراً إذا كانت مفتوحة حالياً
    const modal = document.getElementById('storyModal');
    if (modal && modal.style.display === 'flex') {
        updateModalContent();
    }
}

// ==========================================
// 4. دالة مبدل طرق الارتداء التفاعلي لقلادة الرواشين
// ==========================================
function switchWearOption(side) {
    const imgElement = document.getElementById('modularPendantImg');
    const buttons = document.querySelectorAll('.modular-toggle-container .toggle-btn');
    
    if (!imgElement) return;

    // إعادة تطبيق تأثير الانتقال البصري (Fade-in)
    imgElement.classList.remove('fade-in-img');
    void imgElement.offsetWidth; // Trigger reflow
    imgElement.classList.add('fade-in-img');

    if (side === 'side1') {
        imgElement.src = 'images/rawashin-interactive.png.jpg';
        if (buttons.length >= 2) {
            buttons[0].classList.add('active');
            buttons[1].classList.remove('active');
        }
    } else if (side === 'side2') {
        imgElement.src = 'images/natural-core-collection.png.jpg'; 
        if (buttons.length >= 2) {
            buttons[1].classList.add('active');
            buttons[0].classList.remove('active');
        }
    }
}
