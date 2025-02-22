// Add your own API Key from the news provider
const apiKey = "784b73f222a14910959d0e49d9d4096d";
const apiUrl = `https://newsapi.org/v2/top-headlines?apiKey=${apiKey}&country=us`;

// Variables for infinite scrolling and search functionality
let currentPage = 1;
let currentCategory = "general";
let loading = false;
let searchQuery = "";


// DOM Elements
const container = document.querySelector(".container");
const buttons = document.querySelectorAll(".option");
const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");
const viewBookmarksButton = document.getElementById("view-bookmarks-button");

// Function to set the active class on the selected button
function activateButton(selectedButton) {
  buttons.forEach((button) => button.classList.remove("active"));
  selectedButton.classList.add("active");
}

// Fetch news from API
async function fetchNews(category = "general", page = 1, query = "") {
  let url = apiUrl + `&page=${page}&pageSize=10`;

  if (query) {
    // If there is a search query, search for that specific keyword
    url = `https://newsapi.org/v2/everything?apiKey=${apiKey}&q=${query}&page=${page}&pageSize=10`;
  } else if (category !== "general") {
    // For non-general categories, add the category to the URL
    if (category === "army") {
      url = `https://newsapi.org/v2/everything?apiKey=${apiKey}&q=defence&page=${page}&pageSize=10`;
    } else {
      url += `&category=${category}`;
    }
  }

  try {
    loading = true;
    const response = await fetch(url);
    const data = await response.json();
    if (data.status === "ok" && data.articles.length > 0) {
      displayNews(data.articles);
    } else {
      container.innerHTML = "<p>No news articles found.</p>";
    }
    loading = false;
  } catch (error) {
    console.error("Error fetching news:", error);
    container.innerHTML = "<p>Error fetching news. Please try again later.</p>";
    loading = false;
  }
}

// Function to display news articles
function displayNews(articles) {
  if (articles.length === 0) {
    container.innerHTML = "<p>No news articles found.</p>";
    return;
  }

  articles.forEach((article) => {
    const newsCard = document.createElement("div");
    newsCard.className = "news-card";

    const newsImage = document.createElement("img");
    newsImage.src = article.urlToImage || "placeholder.png";
    newsCard.appendChild(newsImage);

    const newsContent = document.createElement("div");
    newsContent.className = "news-content";

    const newsTitle = document.createElement("h3");
    newsTitle.className = "news-title";
    newsTitle.textContent = article.title;
    newsContent.appendChild(newsTitle);

    const newsDescription = document.createElement("p");
    newsDescription.className = "news-description";
    newsDescription.textContent =
      article.description || "No description available";
    newsContent.appendChild(newsDescription);

    // Button container
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "button-container";

    // Read More button
    const viewButton = document.createElement("a");
    viewButton.className = "view-button";
    viewButton.href = article.url;
    viewButton.target = "_blank";
    viewButton.textContent = "Read More";
    buttonContainer.appendChild(viewButton);

    // WhatsApp Share button
    const shareButton = document.createElement("a");
    shareButton.className = "whatsapp-share-button";
    shareButton.href = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      article.title
    )} - ${encodeURIComponent(article.url)}`;
    shareButton.target = "_blank";
    shareButton.textContent = "Share";
    buttonContainer.appendChild(shareButton);

    // Bookmark button
    const bookmarkButton = document.createElement("button");
    bookmarkButton.className = "bookmark-button";
    bookmarkButton.textContent = "Bookmark";
    bookmarkButton.addEventListener("click", () => saveBookmark(article));
    buttonContainer.appendChild(bookmarkButton);

    // Append the button container to the news content
    newsContent.appendChild(buttonContainer);

    // Append the content to the card
    newsCard.appendChild(newsContent);

    // Append the card to the container
    container.appendChild(newsCard);
  });
}

// Function to save a bookmark to localStorage
function saveBookmark(article) {
  let bookmarks = getBookmarks();
  const index = bookmarks.findIndex(
    (bookmarkedArticle) => bookmarkedArticle.url === article.url
  );

  if (index !== -1) {
    // Remove from bookmarks if already present
    bookmarks.splice(index, 1);
    alert("Article removed from bookmarks!");
  } else {
    // Add to bookmarks
    bookmarks.push(article);
    alert("Article bookmarked successfully!");
  }

  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  updateBookmarkButton(article.url); // Update button text dynamically
}

function updateBookmarkButton(articleUrl) {
  const buttons = document.querySelectorAll(".bookmark-button");
  buttons.forEach((button) => {
    const parentCard = button.closest(".news-card");
    if (parentCard) {
      const link = parentCard.querySelector("a.view-button").href;
      if (link === articleUrl) {
        const bookmarks = getBookmarks();
        const isBookmarked = bookmarks.some((article) => article.url === articleUrl);
        button.textContent = isBookmarked ? "Remove Bookmark" : "Bookmark";
      }
    }
  });
}
function displayBookmarks() {
  const bookmarks = getBookmarks();
  container.innerHTML = ""; // Clear the container

  if (bookmarks.length === 0) {
    container.innerHTML = "<p>No bookmarks yet.</p>";
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

    // Unmark button
    const unmarkButton = document.createElement("button");
    unmarkButton.textContent = "Remove Bookmark";
    unmarkButton.addEventListener("click", () => {
      saveBookmark(article); // Call the function to remove the bookmark
      displayBookmarks(); // Refresh the bookmark list
    });
    newsCard.appendChild(unmarkButton);

    container.appendChild(newsCard);
  });
}

// Fetch bookmarks from localStorage
function getBookmarks() {
  return JSON.parse(localStorage.getItem("bookmarks")) || [];
}

function displayBookmarks() {
  const bookmarks = getBookmarks();
  container.innerHTML = ""; // Clear the container

  if (bookmarks.length === 0) {
    container.innerHTML = "<p>No bookmarks yet.</p>";
    return;
  }

  displayNews(bookmarks); // Reuse the displayNews function to show bookmarks
}

// Infinite scrolling
const observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting && !loading) {
      currentPage++;
      fetchNews(currentCategory, currentPage, searchQuery);
    }
  },
  {
    root: null,
    threshold: 0.5,
  }
);
document.addEventListener("DOMContentLoaded", function () {
  const signOutButton = document.getElementById("signout-btn");

  if (signOutButton) {
    signOutButton.addEventListener("click", function (event) {
      event.preventDefault();
      localStorage.removeItem("userLoggedIn");  // Remove user session
      window.location.href = "signin.html";  // Redirect to sign-in page
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    const profileIcon = document.getElementById("profile-icon");
    const dropdownMenu = document.getElementById("dropdown-menu");

    // Toggle dropdown on clicking profile icon
    profileIcon.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent event from bubbling
        dropdownMenu.classList.toggle("hidden");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!profileIcon.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.add("hidden");
        }
    });

    // Handle profile navigation
    document.getElementById("account-link").addEventListener("click", function () {
        window.location.href = "profile.html"; // Redirect to profile page
    });

    // Handle sign out
    document.getElementById("signout-link").addEventListener("click", function () {
        window.location.href = "auth.html"; // Redirect to authentication page
    });
});
  
  // Handle Profile Form Submission
  const profileForm = document.getElementById("profile-form");

  if (profileForm) {
    profileForm.addEventListener("submit", function (event) {
      event.preventDefault();

      // Get form values
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      // Save to localStorage (You can replace this with backend logic)
      localStorage.setItem("userProfile", JSON.stringify({ name, email }));

      alert("Profile updated successfully!");
    });
  }
});
// Create a sentinel element to detect scrolling to bottom
const sentinel = document.createElement("div");
sentinel.style.height = "1px";
document.body.appendChild(sentinel);

// Observe the sentinel for infinite scrolling
observer.observe(sentinel);

// Event Listeners for category buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-source").toLowerCase();
    currentCategory = category;
    searchQuery = ""; // Clear any search query when selecting a category
    currentPage = 1; // Reset to page 1 when category changes
    container.innerHTML = ""; // Clear previous news
    fetchNews(currentCategory, currentPage);
    activateButton(button);
  });
});

// Event Listener for search button
searchButton.addEventListener("click", () => {
  searchQuery = searchInput.value.trim(); // Get search input value
  if (searchQuery) {
    currentPage = 1; // Reset to page 1 for new search
    container.innerHTML = ""; // Clear previous news
    fetchNews("search", currentPage, searchQuery); // Call the API for search query
  }
});

// Event Listener for bookmarks button
viewBookmarksButton.addEventListener("click", displayBookmarks);

// Fetch general news on initial load
document.addEventListener("DOMContentLoaded", () => {
  fetchNews();
});