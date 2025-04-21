function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // التحقق من وجود المستخدم في البيانات
    if (students[username] && students[username].password === password) {
      // إذا كانت بيانات الدخول صحيحة، تخزين اسم المستخدم والسنة الدراسية في localStorage
      localStorage.setItem("user", username);
      localStorage.setItem("year", students[username].year);
  
      // إعادة توجيه المستخدم إلى الصفحة المناسبة (الداش بورد أو الصفحة الرئيسية)
      if (students[username].year === "admin") {
        window.location.href = "admin-dashboard.html"; // أو أي صفحة أخرى مخصصة للإدمن
      } else {
        window.location.href = "dashboard.html"; // صفحة الطالب
      }
    } else {
      // في حال كانت بيانات الدخول غير صحيحة
      alert("❌ اسم المستخدم أو كلمة المرور خاطئة.");
    }
  }
  