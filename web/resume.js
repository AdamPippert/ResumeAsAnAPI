(async () => {
  const target = document.getElementById("resume");
  const res = await fetch("/api/resume");
  const data = await res.json();
  target.innerHTML = `
    <h1>${data.name}</h1>
    <h2>${data.headline}</h2>
    <p>${data.summary}</p>
    <h3>Skills</h3>
    <ul>${data.skills.map(s => `<li>${s}</li>`).join("")}</ul>
    <h3>Experience</h3>
    ${data.experience.map(exp => `
      <section>
        <strong>${exp.title}</strong> @ ${exp.company}  
        <em>${exp.start} – ${exp.end || "Present"}</em>
        <p>${exp.summary}</p>
        <ul>${exp.highlights.map(h => `<li>${h}</li>`).join("")}</ul>
      </section>`).join("")}
  `;
})();
