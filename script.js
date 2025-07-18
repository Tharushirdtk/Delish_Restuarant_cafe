
    fetch('header.html')
      .then(res => res.text())
      .then(data => document.getElementById('header').innerHTML = data);

    fetch('footer.html')
      .then(res => res.text())
      .then(data => document.getElementById('footer').innerHTML = data);
 

   document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.querySelector(".dropdown");
  const toggle = dropdown.querySelector(".dropdown-toggle");

  // Toggle dropdown on click
  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown.classList.toggle("open");
  });

  // Close dropdown if clicking anywhere else
  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove("open");
    }
  });
});



  // Simple tab toggle
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));
      tab.classList.add("active");
      document.getElementById(tab.dataset.tab).classList.add("active");
    });
  });
