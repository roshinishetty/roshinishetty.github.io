// document.addEventListener("DOMContentLoaded", function() {
// 	const themeToggle = document.getElementById("theme-toggle");
// 	const moonIcon = themeToggle.querySelector(".fa-moon");
// 	const sunIcon = themeToggle.querySelector(".fa-sun");

// 	themeToggle.addEventListener("click", function() {
// 		document.body.classList.toggle("nox");
// 		document.body.classList.toggle("lumos");
// 		moonIcon.classList.toggle("hidden");
// 		sunIcon.classList.toggle("hidden");
// 	});
// });

document.getElementById('mobile-menu').addEventListener('click', function() {
	document.querySelector('.navbuttons').classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Check localStorage for theme preference and apply it
    const savedTheme = localStorage.getItem('theme') || 'nox';
    body.classList.add(savedTheme);
    updateIcons(savedTheme);

    themeToggle.addEventListener("click", function() {
        let currentTheme = body.classList.contains('nox') ? 'nox' : 'lumos';
        let newTheme = currentTheme === 'nox' ? 'lumos' : 'nox';

        body.classList.replace(currentTheme, newTheme);
        localStorage.setItem('theme', newTheme);
        updateIcons(newTheme);
    });

    function updateIcons(theme) {
        const moonIcon = themeToggle.querySelector(".fa-moon");
        const sunIcon = themeToggle.querySelector(".fa-sun");

        if (theme === 'nox') {
            moonIcon.classList.add("hidden");
            sunIcon.classList.remove("hidden");
        } else {
            moonIcon.classList.remove("hidden");
            sunIcon.classList.add("hidden");
        }
    }
});
