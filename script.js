// دالة لتأكيد استقبال طلب الانضمام لقائمة الانتظار
function handleFormSubmit(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة
    const name = document.getElementById('nameInput').value;
    alert(`شكراً لانضمامكِ لقائمة انتظار تليد يا ${name}! سنتواصل معكِ فور توفر العينة الأولى.`);
    
    // تفريغ الحقول بعد الإرسال
    document.getElementById('nameInput').value = '';
    document.getElementById('emailInput').value = '';
}
