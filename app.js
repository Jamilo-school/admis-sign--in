const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

const validCredentials = [
  { username: "geofreyonyango167@gmail.com", password: "montanaio", name: "Mr Oduor", subjects: ["Mathematics", "Science"] },
  { username: "director@jamiloschool", password: "G967785", name: "Director Lilian Omollo",subjects: [""] },
  { username: "caren@jamiloschool", password: "z299y", name: "Clarance Jumba", subjects: [" and trainer of Drama", "social culture"] },
];

const loginForm = document.querySelector(".sign-in-form");
const usernameInput = loginForm.querySelector("input[type='text']");
const passwordInput = loginForm.querySelector("input[type='password']");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  // Display password characters for a brief moment
  passwordInput.type = "text";
  setTimeout(() => {
    passwordInput.type = "password";
  }, 1000);

  const isValidCredential = validCredentials.find(
    (credential) => credential.username === username && credential.password === password
  );

  if (isValidCredential) {
    const currentDate = new Date();
    const currentDay = new Intl.DateTimeFormat('en-US', {weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'}).format(currentDate);
    const currentTime = currentDate.toLocaleTimeString();
    const name = isValidCredential.name;
    const subjects = isValidCredential.subjects.join(", ");
    let location;

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude.toFixed(2);
        const longitude = position.coords.longitude.toFixed(2);
        location = `Your current location is (${latitude}, ${longitude})`;
      });
    }

    const greeting = `${currentDay}, ${currentTime}. Welcome ${name}! ${subjects}. ${location ? location : ''} Jamilo School`;

    alert(greeting);
    window.location.href = "This page is currently under development.kindly wait as you will be notified once its ready.Thank you";
  } else {
    alert("🎯 Access denied! You are trying to use unauthorized credentials. Please check and try again ");
  }
});
