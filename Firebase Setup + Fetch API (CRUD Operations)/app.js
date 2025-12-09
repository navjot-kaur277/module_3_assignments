// app.js
import { db, addBook, watchBooks, updateBookAuthor, deleteBook } from "./firebase.js";

// 1) Render books into grid
const grid = document.getElementById("book-grid");

// Subscribe to real-time updates
watchBooks(renderBooks);

// 2) Handle Add Book form
const form = document.getElementById("book-form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();
  const price = Number(document.getElementById("price").value);
  const coverImageURL = document.getElementById("image").value.trim();

  if (!title || !author || !coverImageURL || Number.isNaN(price)) {
    alert("Please fill all fields correctly.");
    return;
  }

  await addBook({ title, author, price, coverImageURL });
  form.reset(); // UI auto-updates via watchBooks
});

// 3) Render function
function renderBooks(books) {
  grid.innerHTML = "";
  books.forEach((book) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${book.coverImageURL}" alt="${escapeHtml(book.title)}" />
      <div class="title">${escapeHtml(book.title)}</div>
      <div class="author">by ${escapeHtml(book.author)}</div>
      <div class="price">₹${book.price}</div>
      <div class="actions">
        <button class="btn update" data-id="${book.id}">Update Author</button>
        <button class="btn delete" data-id="${book.id}">Delete</button>
        <button class="btn view"   data-id="${book.id}">View Details</button>
      </div>
    `;

    grid.appendChild(card);
  });

  // Attach event listeners after render
  grid.querySelectorAll(".btn.update").forEach(btn => {
    btn.addEventListener("click", async () => {
      const id = btn.getAttribute("data-id");
      const newAuthor = prompt("Enter new author name:");
      if (newAuthor && newAuthor.trim()) {
        await updateBookAuthor(id, newAuthor.trim());
      }
    });
  });

  grid.querySelectorAll(".btn.delete").forEach(btn => {
    btn.addEventListener("click", async () => {
      const id = btn.getAttribute("data-id");
      const ok = confirm("Delete this book?");
      if (ok) await deleteBook(id);
    });
  });

  grid.querySelectorAll(".btn.view").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      const book = books.find(b => b.id === id);
      if (book) openModal(book);
    });
  });
}

// 4) Simple modal for View Details
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("close-modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalAuthor = document.getElementById("modal-author");
const modalPrice = document.getElementById("modal-price");
const modalId = document.getElementById("modal-id");

function openModal(book) {
  modalImg.src = book.coverImageURL;
  modalTitle.textContent = book.title;
  modalAuthor.textContent = `Author: ${book.author}`;
  modalPrice.textContent = `Price: ₹${book.price}`;
  modalId.textContent = `ID: ${book.id}`;
  modal.classList.remove("hidden");
}

closeModalBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.add("hidden");
});

// 5) Utility to avoid HTML injection from text
function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
