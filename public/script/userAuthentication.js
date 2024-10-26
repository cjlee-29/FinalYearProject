// Your Firebase configuration
var firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "your-auth-domain",
    projectId: "your-project-id",
    storageBucket: "your-storage-bucket",
    messagingSenderId: "your-messaging-sender-id",
    appId: "your-app-id"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Firebase Auth - User Registration
document.querySelector('.register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert('Registration successful!');
        })
        .catch((error) => {
            alert('Error: ' + error.message);
        });
});

// Firebase Auth - User Login
document.querySelector('.login-page form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert('Login successful!');
        })
        .catch((error) => {
            alert('Error: ' + error.message);
        });
});
