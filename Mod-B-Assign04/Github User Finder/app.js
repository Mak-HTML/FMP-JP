function getUser() {
  const username = document.getElementById("username").value.trim();
  const resultDiv = document.getElementById("result");

  if (username === "") {
    alert("Please enter a username.");
    return;
  }

  fetch(`https://api.github.com/search/users?q=${username}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Error fetching users");
      }
      return response.json();
    })
    .then(data => {
      console.log("Matching GitHub Users:", data);

      if (data.items.length === 0) {
        resultDiv.innerHTML = `<div class="alert alert-warning">No users found.</div>`;
        return;
      }

      resultDiv.classList.remove("d-none");
      resultDiv.innerHTML = data.items
        .map(user => `
          <div class="card mb-3 p-2">
            <div class="d-flex align-items-center">
              <img src="${user.avatar_url}" width="80" height="80" class="me-3 rounded">
              <div>
                <h5>${user.login}</h5>
                <a href="${user.html_url}" target="_blank">View Profile</a>
              </div>
            </div>
          </div>
        `).join('');
    })
    .catch(error => {
      console.error("Fetch error:", error);
      resultDiv.innerHTML = `<div class="alert alert-danger">${error.message}</div>`;
    });
}
