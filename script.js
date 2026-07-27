function validateForm() {

    let name = document.getElementsByName("fullname")[0].value.trim();
    let roll = document.getElementsByName("rollno")[0].value.trim();
    let hall = document.getElementsByName("hallticket")[0].value.trim();
    let email = document.getElementsByName("email")[0].value.trim();
    let mobile = document.getElementsByName("mobile")[0].value.trim();

    if (name === "") {
        alert("Please enter your full name.");
        return false;
    }

    if (roll === "") {
        alert("Please enter your roll number.");
        return false;
    }

    if (hall === "") {
        alert("Please enter your hall ticket number.");
        return false;
    }

    if (email === "") {
        alert("Please enter your email.");
        return false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (mobile === "") {
        alert("Please enter your mobile number.");
        return false;
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
        alert("Mobile number must contain exactly 10 digits.");
        return false;
    }

    let gender = document.querySelector('input[name="gender"]:checked');

    if (gender === null) {
        alert("Please select your gender.");
        return false;
    }

    let examType = document.querySelector('input[name="examtype"]:checked');

    if (examType === null) {
        alert("Please select exam type.");
        return false;
    }

    let subjects = document.querySelectorAll('input[type="checkbox"]:checked');

    if (subjects.length < 2) {
        alert("Please select at least one subject.");
        return false;
    }

    alert("Student Exam Registration Successful!");

    return true;
}