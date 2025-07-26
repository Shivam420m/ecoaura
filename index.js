    function openForm() {
      document.getElementById("loginForm").style.display = "block";
      document.getElementById("modalOverlay").style.display = "block";
    }
    function closeForm() {
      document.getElementById("loginForm").style.display = "none";
      document.getElementById("modalOverlay").style.display = "none";
    }
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar.style.left === "0px") {
    sidebar.style.left = "-250px";
  } else {
    sidebar.style.left = "0px";
  }
}

document.getElementById('searchbar').addEventListener('input', function () {
  const query = this.value.toLowerCase();
  const cards = document.querySelectorAll('.card.mb-3');
  cards.forEach(function (card) {
    // Get the card title and text
    const title = card.querySelector('.card-title').textContent.toLowerCase();
    const text = card.querySelector('.card-text').textContent.toLowerCase();
    // Show card if either matches the search, else hide it
    if (title.includes(query) || text.includes(query)) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
});
