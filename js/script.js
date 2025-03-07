// toggle hamburger menu active
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#hamburger-menu").onclick = (e) => {
	navbarNav.classList.toggle('active');
	e.preventDefault();
};

function openModal(projectId) {
	document.getElementById(projectId).style.display = "block";
};
function closeModal(projectId) {
	document.getElementById(projectId).style.display = "none";
};
// klik di luar element
const hm = document.querySelector("#hamburger-menu");
document.addEventListener('click', function(e) {
	if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
		navbarNav.classList.remove('active');
	};
});
// message error handling
document.querySelector("form").addEventListener("submit", function(event) {
    let email = document.querySelector("input[name='temail']").value;
    let name = document.querySelector("input[name='tname']").value;
    let message = document.querySelector("textarea[name='tmessage']").value;

    let namePattern = /^[A-Za-z\s]+$/; // Hanya huruf dan spasi

    if (!email.includes("@") || !email.includes(".")) {
        alert("Masukkan email yang valid!");
        event.preventDefault();
    } 
    else if (!namePattern.test(name)) {
        alert("Nama hanya boleh berisi huruf dan spasi!");
        event.preventDefault();
    } 
    else if (message.length < 10) {
        alert("Pesan minimal harus 10 karakter!");
        event.preventDefault();
    }
});