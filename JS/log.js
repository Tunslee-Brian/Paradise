const switchers = [...document.querySelectorAll('.switcher')]

switchers.forEach(item => {
	item.addEventListener('click', function () {
		switchers.forEach(item => item.parentElement.classList.remove('is-active'))
		this.parentElement.classList.add('is-active')
	})
})




const signUp = document.getElementById("signup")




signUp.addEventListener("click", (e) => {
	e.preventDefault()
	const emailSignup = document.getElementById("signup-email").value
	const signupPassword = document.getElementById("signup-password").value
	const signUpPasswordConfirm = document.getElementById("signup-password-confirm").value
	const firebaseConfig = {
		apiKey: "AIzaSyCVAxva02LUwvw5a459Y5FSsyTCxzaAjrs",
		authDomain: "paradise-a3887.firebaseapp.com",
		projectId: "paradise-a3887",
		storageBucket: "paradise-a3887.appspot.com",
		messagingSenderId: "227951174862",
		appId: "1:227951174862:web:89b8ca8897cd342c0bdc9f"
	};

	firebase.initializeApp(firebaseConfig);
	firebase.auth()
		.createUserWithEmailAndPassword(emailSignup, signupPassword)
		.then((user) => {
			window.location.href = "../HTML/index.html"
			firebase.auth().currentUser.updateProfile()
		})
		.catch((err) => {
			console.log(err.message);
		})
})





const login = document.getElementById("login")

login.addEventListener("click", (e) => {
	e.preventDefault(e);
	const loginEmail = document.getElementById("login-email").value
	const loginPassword = document.getElementById("login-password").value
	const firebaseConfig = {
		apiKey: "AIzaSyCVAxva02LUwvw5a459Y5FSsyTCxzaAjrs",
		authDomain: "paradise-a3887.firebaseapp.com",
		projectId: "paradise-a3887",
		storageBucket: "paradise-a3887.appspot.com",
		messagingSenderId: "227951174862",
		appId: "1:227951174862:web:89b8ca8897cd342c0bdc9f"
	};

	firebase.initializeApp(firebaseConfig);
	firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword)
		.then((userCredential) => {
			// Signed in
			window.location.href = "../HTML/index.html"
			var user = userCredential.user;
			console.log(user);
		})
		.catch((error) => {
			var errorCode = error.code;
			var errorMessage = error.message;
			console.log(errorMessage);
		});
})
