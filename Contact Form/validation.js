"use strict";

const contactForm = document.forms["contactForm"];
let valid = false;
const regex = {
  name: /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/,
  email: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
  address: /^(\b\D+\b)?\s*(\b.*?\d.*?\b)\s*(\b\D+\b)?$/,
  telephone: /^\d{3,7}[- ]?\d{5,}$/,
};

//Name Check
const name = contactForm.elements["name"];
name.addEventListener("input", () => {
  if (name.value.trim().length === 0) {
    name.classList.add("invalid");
    valid = false;
  } else if (!regex.name.test(name.value)) {
    name.classList.add("invalid");
    valid = false;
  } else {
    name.classList.remove("invalid");
    name.classList.add("valid");
    valid = true;
  }
});

//Email Check
const email = contactForm.elements["email"];
email.addEventListener("input", () => {
  if (email.value.trim().length === 0) {
    email.classList.add("invalid");
    valid = false;
  } else if (!regex.email.test(email.value)) {
    email.classList.add("invalid");
    valid = false;
  } else {
    email.classList.remove("invalid");
    email.classList.add("valid");
    valid = true;
  }
});

//Confirm email check
const emailConf = contactForm.elements["emailConf"];
emailConf.addEventListener("input", () => {
  if (emailConf.value.trim().length === 0) {
    emailConf.classList.add("invalid");
    valid = false;
  } else if (emailConf.value !== email.value) {
    emailConf.classList.add("invalid");
    valid = false;
  } else {
    emailConf.classList.remove("invalid");
    emailConf.classList.add("valid");
    valid = true;
  }
});

//Address Check
const address = contactForm.elements["address"];
address.addEventListener("input", () => {
  if (address.value.trim().length === 0) {
    address.classList.add("invalid");
    valid = false;
  } else if (!regex.address.test(address.value)) {
    address.classList.add("invalid");
    valid = false;
  } else {
    address.classList.remove("invalid");
    address.classList.add("valid");
    valid = true;
  }
});

//Telephone Check
const telephone = contactForm.elements["telephone"];
telephone.addEventListener("input", () => {
  if (telephone.value.trim().length === 0) {
    telephone.classList.add("invalid");
    valid = false;
  } else if (!regex.address.test(telephone.value)) {
    telephone.classList.add("invalid");
    valid = false;
  } else {
    telephone.classList.remove("invalid");
    telephone.classList.add("valid");
    valid = true;
  }
});

contactForm.addEventListener("submit", (event) => {
  if (!valid) event.preventDefault();
});
