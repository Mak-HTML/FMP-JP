document.getElementById("newsForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const query = document.getElementById("searchInput").value.trim();
  const apiKey = "pub_b0b13148e74d42119f36d2afadb244d5";
  const url = `https://newsdata.io/api/1/news?apikey=${apiKey}&q=${encodeURIComponent(query)}&language=en`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log("🔍 Full API Response:", data);
      displayNews(data.results);
    })
    .catch(error => {
      console.error("❌ Error fetching news:", error);
      document.getElementById("newsContainer").innerHTML = `<p class="text-danger">Failed to load news. Please try again later.</p>`;
    });
});

function displayNews(articles) {
  const container = document.getElementById("newsContainer");
  container.innerHTML = "";

  if (!articles || articles.length === 0) {
    container.innerHTML = `<p class="text-center w-100">No news found.</p>`;
    return;
  }

  articles.forEach(article => {
    const card = document.createElement("div");
    card.className = "col-md-4 d-flex";

    const imageUrl = (article.image_url && article.image_url.startsWith("http"))
      ? article.image_url
      : 'https://dummyimage.com/400x180/cccccc/000000&text=No+Image';

    const description = article.description || "No description available.";
    const title = article.title || "No title provided.";
    const link = article.link || "#";

    card.innerHTML = `
      <div class="card h-100 shadow-sm" onclick="window.open('${link}', '_blank')" style="cursor: pointer;">
        <img src="${imageUrl}" class="card-img-top" alt="News Image">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${title}</h5>
          <p class="card-text text-truncate" title="${description}">${description}</p>
          <a href="${link}" target="_blank" class="btn btn-sm btn-primary mt-auto">Read More</a>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}
