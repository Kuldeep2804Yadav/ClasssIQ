const courses = [
  {
    id: 1,
    title: "Web Development",
    icon: "code-2",
  },
  {
    id: 2,
    title: "UI/UX Design",
    icon: "palette",
  },
  {
    id: 3,
    title: "Python",
    icon: "code",
  },
  {
    id: 4,
    title: "Data Science",
    icon: "chart-no-axes-combined",
  },
  {
    id: 5,
    title: "Java",
    icon: "coffee",
  },
  {
    id: 6,
    title: "Digital Marketing",
    icon: "megaphone",
  },
  {
    id: 7,
    title: "Cloud Computing",
    icon: "cloud",
  },
  {
    id: 8,
    title: "Cybersecurity",
    icon: "shield-check",
  },
];

const courseContainer = document.getElementById("course-container");

courses.forEach((course) => {
  courseContainer.innerHTML += `
        <div
        key=${course.id}
  class="card cource-card col d-flex flex-column align-items-center justify-content-center p-5 row-gap-4"
>
  <div
    class="bg-white d-flex align-items-center justify-content-center rounded-circle p-3"
    style="height: 50px; width: 50px"
  >
    <i data-lucide=${course.icon}></i>
  </div>

  <h3 class="card-heading">${course.title}</h3>
  <button class="btn view-cources-btn">View Cources</button>
</div>
    `;
});

lucide.createIcons();
