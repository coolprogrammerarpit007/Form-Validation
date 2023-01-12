// Form Validation Using Regex!!

// There are two methods to create a Regex Pattern..

// let regex = /[a-z]/gi; // Method: 1 to create a regex expressions

// let regex2 = new RegExp(/[a-z]/,'g','i'); second method to create a regex expression

// Creating an object to store all the properties as regex pattern for different input fields..

// Selecting All the Input Fields

const inputs = document.querySelectorAll("input");

const patterns = {
  telephone: /^\d{10}$/,
  username: /^[a-z\d]{5,12}$/i,
  password: /^[\w@-]{8,20}$/,
  slug: /^[a-z\d-]{8,20}$/i,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
};

// Validaion Function

const validate = (field, regex) => {
  // console.log(regex.test(field.value));
  // if the condition is true then it will give the field a valid class or a non-valid class!!
  if (regex.test(field.value)) {
    field.className = "valid";
    // field.classList.add("valid");This not work
  } else {
    field.className = "invalid";
  }
};

// Adding Event listener to the Input fields

inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    // console.log(e.target.attributes.name.value);
    // console.log(e.target);
    validate(e.target, patterns[e.target.name]);
  });
});

// Adding Event listener using the for loop

// for (let i = 0; i < inputs.length; i++) {
//   inputs[i].addEventListener("keyup", (e) => {
//     console.log("hello world!!");
//   });
// }
