document.addEventListener("mousemove", (e) => {
  const stars = document.querySelector(".stars");
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  stars.style.transform = `translate(${x}px, ${y}px) scale(1.1)`;
});

document.getElementById("searchForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const query = document.getElementById("searchInput").value;
  const proxyUrl = "/proxy?url=" + encodeURIComponent("https://duckduckgo.com/?q=" + query);
  document.getElementById("resultsFrame").src = proxyUrl;
});
