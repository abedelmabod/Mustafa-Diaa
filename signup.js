document.getElementById("signup-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    // جمع البيانات من النموذج
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const year = document.getElementById("year").value.trim();
    const password = document.getElementById("password").value.trim();
  
    if (name && email && year && password) {
      // تخزين بيانات الطالب في localStorage
      let users = JSON.parse(localStorage.getItem("users")) || [];
  
      // التأكد من عدم وجود مستخدم بنفس البريد الإلكتروني
      const existingUser = users.find(user => user.email === email);
  
      if (existingUser) {
        alert("❌ هذا البريد الإلكتروني مسجل بالفعل.");
      } else {
        const newUser = {
          name,
          email,
          year,
          password,
        };
  
        // إضافة الطالب الجديد
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
  
        alert("✅ تم التسجيل بنجاح! يمكنك الآن تسجيل الدخول.");
  
        // إعادة التوجيه إلى صفحة تسجيل الدخول
        window.location.href = "login.html";
      }
    } else {
      alert("⚠️ الرجاء تعبئة جميع الحقول.");
    }
  });
  