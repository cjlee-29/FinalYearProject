import app from "./firebaseConfig.js"; // Import the Firebase app
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";

const auth = getAuth(app); // Initialize Firebase Authentication

const registerForm = document.getElementById("registerForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const errorMessage = document.getElementById("errorMessage");

registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = emailInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (password !== confirmPassword) {
    errorMessage.textContent = "Passwords do not match. Please try again.";
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    alert("Registration successful!");
    window.location.href = "login.html"; // Redirect to login page
  } catch (error) {
    errorMessage.textContent = `Error: ${error.message}`;
    console.error("Firebase Authentication Error:", error);
  }
});
