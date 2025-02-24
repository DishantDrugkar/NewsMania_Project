document.addEventListener("DOMContentLoaded", function () {
    displayBookmarksInProfile();
});

function displayBookmarksInProfile() {
    const bookmarksContainer = document.getElementById("bookmarks-container");
    bookmarksContainer.innerHTML = ""; // Clear previous content

    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

    if (bookmarks.length === 0) {
        bookmarksContainer.innerHTML = "<p>No bookmarks yet.</p>";
        return;
    }

    bookmarks.forEach((article) => {
        const newsCard = document.createElement("div");
        newsCard.className = "news-card";

        const newsTitle = document.createElement("h3");
        newsTitle.textContent = article.title;
        newsCard.appendChild(newsTitle);

        const viewButton = document.createElement("a");
        viewButton.href = article.url;
        viewButton.target = "_blank";
        viewButton.textContent = "Read More";
        newsCard.appendChild(viewButton);

        // Remove Bookmark button
        const unmarkButton = document.createElement("button");
        unmarkButton.textContent = "Remove Bookmark";
        unmarkButton.addEventListener("click", () => {
            removeBookmark(article.url);
            displayBookmarksInProfile(); // Refresh the list
        });
        newsCard.appendChild(unmarkButton);

        bookmarksContainer.appendChild(newsCard);
    });
}

// Function to remove bookmark
function removeBookmark(url) {
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    bookmarks = bookmarks.filter(article => article.url !== url);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}