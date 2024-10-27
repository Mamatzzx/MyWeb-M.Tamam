// Load data from JSON
AOS.init();
fetch("data.json")
  .then(response => response.json())
  .then(data => {
    // Display about section
    document.getElementById("about-text").innerText = data.about;

    // Display projects
    const projectsList = document.getElementById("projects-list");
    data.projects.forEach(project => {
      const projectCard = document.createElement("div");
      projectCard.className = "bg-white p-6 shadow-md rounded-lg transition-transform transform hover:scale-105";
      projectCard.innerHTML = `
        <h3 class="text-xl font-semibold mb-2">${project.title}</h3>
        <p class="text-gray-700 mb-4">${project.description}</p>
        <a href="${project.link}" class="text-blue-500 hover:underline">View Project</a>
      `;
      projectsList.appendChild(projectCard);
    });

    // Display contact email
    document.getElementById("contact-email").innerText = data.contact.email;
  })
  .catch(error => console.error("Error loading data:", error));
  const testimonialList = document.getElementById("testimonial-list");
data.testimonials.forEach(testimonial => {
  const testimonialCard = document.createElement("div");
  testimonialCard.className = "bg-white p-4 m-2 shadow-md rounded-lg max-w-sm";
  testimonialCard.innerHTML = `
    <p class="text-gray-700 italic">"${testimonial.feedback}"</p>
    <p class="text-blue-600 font-semibold">${testimonial.name}</p>
  `;
  testimonialList.appendChild(testimonialCard);
});

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
document.addEventListener("mousemove", (e) => {
  const cursor = document.querySelector(".custom-cursor");
  cursor.style.top = `${e.pageY}px`;
  cursor.style.left = `${e.pageX}px`;
});