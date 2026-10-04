let password = "Hello@123";

let hasLowercase = /[a-z]/.test(password);
let hasUppercase = /[A-Z]/.test(password);
let hasDigit = /[0-9]/.test(password);
let hasSpecial = /[^A-Za-z0-9]/.test(password);

if (hasLowercase && hasUppercase && hasDigit && hasSpecial) {
    console.log("Password meets all conditions");
} else {
    console.log("Password does not meet all conditions");
}

let passwordd = "Hello@123";

let pattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])/;

console.log(pattern.test(passwordd)); // true

//A Regular Expression (Regex) is a pattern used to search, match, and validate text.