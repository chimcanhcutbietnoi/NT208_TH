$(document).ready(function () {
  $("#submitBtn").click(function () {
    // Lấy giá trị từ các trường input
    var username = $("#username").val();
    var password = $("#password").val();
    var confirmPassword = $("#confirmPassword").val();
    var email = $("#email").val();
    var phone = $("#phone").val();

    // Kiểm tra các điều kiện
    if (username.length <= 4) {
      showError($("#username"), "Tên đăng nhập phải lớn hơn 4 ký tự.");
    } else {
      hideError($("#username"));
    }

    if (password.length < 5) {
      showError($("#password"), "Mật khẩu phải có ít nhất 5 ký tự.");
    } else {
      hideError($("#password"));
    }

    if (confirmPassword !== password) {
      showError($("#confirmPassword"), "Mật khẩu nhập lại không khớp.");
    } else {
      hideError($("#confirmPassword"));
    }

    if (email === "" || !isValidEmail(email)) {
      showError($("#email"), "Email không hợp lệ.");
    } else {
      hideError($("#email"));
    }

    if (!isValidPhone(phone)) {
      showError($("#phone"), "Số điện thoại không hợp lệ.");
    } else {
      hideError($("#phone"));
    }
  });

  // Hàm hiển thị thông báo lỗi
  function showError(element, message) {
    element.next(".error-message").remove();
    element.after("<div class='error-message'>" + message + "</div>");
  }

  // Hàm ẩn thông báo lỗi
  function hideError(element) {
    element.next(".error-message").remove();
  }

  // Hàm kiểm tra định dạng email
  function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Hàm kiểm tra định dạng số điện thoại
  function isValidPhone(phone) {
    var phoneRegex = /^[0-9]+$/;

    // Kiểm tra chiều dài của chuỗi và regex
    return phone.length >= 10 && phoneRegex.test(phone);
  }
});
