const courses = {
  1: {
    title: "Python for Beginners",
    video: "https://www.youtube.com/embed/rfscVS0vtbw"
  },
  2: {
    title: "Java Programming",
    video: "https://www.youtube.com/embed/grEKMHGYyns"
  },
  3: {
    title: "Data Structures",
    video: "https://www.youtube.com/embed/bum_19loj9A"
  }
};

function getCourseId() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

document.addEventListener("DOMContentLoaded", function() {
  const id = getCourseId();

  if (document.getElementById("courseTitle")) {
    document.getElementById("courseTitle").innerText = courses[id].title;
    document.getElementById("videoFrame").src = courses[id].video;
  }

  if (document.getElementById("progressList")) {
    const completed = JSON.parse(localStorage.getItem("completed")) || [];
    const list = document.getElementById("progressList");

    completed.forEach(cid => {
      const li = document.createElement("li");
      li.innerText = courses[cid].title;
      list.appendChild(li);
    });
  }
});

function markCompleted() {
  const id = getCourseId();
  let completed = JSON.parse(localStorage.getItem("completed")) || [];

  if (!completed.includes(id)) {
    completed.push(id);
    localStorage.setItem("completed", JSON.stringify(completed));
    alert("Course marked as completed!");
  }
}