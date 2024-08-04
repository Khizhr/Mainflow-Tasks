document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('formMessage');

    if (name === '' || email === '' || message === '') {
        formMessage.textContent = 'Please fill out all fields.';
        formMessage.style.color = 'red';
    } else {
        formMessage.textContent = 'Form submitted successfully!';
        formMessage.style.color = 'green';
    }
});

document.addEventListener('DOMContentLoaded', function() {
const facts = [
    "First Website: Created by Tim Berners-Lee in 1991.",
    "Color Impact: Colors influence user emotions; blue = trust, red = excitement.",
    "Responsive Design: Ensures websites look good on all devices.",
    "Load Time: 40% of users leave if a site takes over 3 seconds to load.",
    "Typography: Fonts affect readability and user experience.",
    "Minimalism: Clean, simple designs improve user focus.",
    "User-Centered Design: Focuses on user needs and usability.",
    "SEO Integration: Good design boosts search engine rankings.",
    "Microinteractions: Small animations enhance user engagement.",
    "First Impressions: Users form opinions about a website in 0.05 seconds."
];

const button = document.getElementById('show-facts');
const factsContainer = document.getElementById('facts-container');

button.addEventListener('click', function() {
    const factsList = document.getElementById('facts-list');
    factsList.innerHTML = ''; // Clear previous facts if any

    facts.forEach(fact => {
        const li = document.createElement('li');
        li.textContent = fact;
        factsList.appendChild(li);
    });

    factsContainer.classList.remove('hidden'); // Show the facts container
});
});