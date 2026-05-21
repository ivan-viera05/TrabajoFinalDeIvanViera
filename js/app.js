document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const productsGrid = document.getElementById('productsGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cartBtn = document.getElementById('cartBtn');
  const closeCartBtn = document.getElementById('closeCart');
  const cartOverlay = document.getElementById('cartOverlay');
  const cartSidebar = document.getElementById('cartSidebar');
  const cartItemsContainer = document.getElementById('cartItems');
  const cartTotalEl = document.getElementById('cartTotal');
  const cartCountEl = document.getElementById('cartCount');
  const toast = document.getElementById('toast');
  const navbar = document.querySelector('.navbar');

  // State
  let allBooks = [];
  let cart = JSON.parse(localStorage.getItem('gitano_cart')) || [];

  // Initialize
  init();

  async function init() {
      // Navbar scroll effect
      window.addEventListener('scroll', () => {
          if (window.scrollY > 50) {
              navbar.classList.add('scrolled');
          } else {
              navbar.classList.remove('scrolled');
          }
      });

      await loadBooks();
      setupEventListeners();
      updateCartUI();
  }

  // Load books from JSON
  async function loadBooks() {
      try {
          const response = await fetch('libros.json');
          if (!response.ok) throw new Error('Network response was not ok');
          const data = await response.json();
          // Filter out potentially broken items and limit for performance if needed
          allBooks = data.filter(book => book.name && book.price);
          renderBooks(allBooks);
      } catch (error) {
          console.error("Error loading books:", error);
          productsGrid.innerHTML = `<p style="text-align:center; grid-column: 1/-1;">Error cargando el catálogo. Por favor, intenta de nuevo.</p>`;
      }
  }

  // Render books to grid
  function renderBooks(books) {
      productsGrid.innerHTML = '';
      
      if (books.length === 0) {
          productsGrid.innerHTML = `<p style="text-align:center; grid-column: 1/-1;">No se encontraron libros.</p>`;
          return;
      }

      books.forEach(book => {
          // Fallback image logic
          const imgPath = book.imagen ? `assets/${book.imagen}` : 'assets/book_reading_icon_159273.png';
          
          const card = document.createElement('div');
          card.className = 'book-card';
          card.innerHTML = `
              <div class="book-image-container">
                  <span class="book-genre">${book.genero.trim()}</span>
                  <img src="${imgPath}" alt="${book.name}" class="book-image" onerror="this.src='assets/book_reading_icon_159273.png'">
              </div>
              <div class="book-info">
                  <h3 class="book-title">${book.name}</h3>
                  <p class="book-author">${book.autor || 'Autor Desconocido'}</p>
                  <div class="book-price-row">
                      <span class="book-price">$${book.price.toLocaleString('es-AR')}</span>
                      <button class="btn-add-cart" data-id="${book.id}">
                          <i class="bi bi-cart-plus"></i>
                      </button>
                  </div>
              </div>
          `;
          productsGrid.appendChild(card);
      });

      // Add event listeners to new add-to-cart buttons
      document.querySelectorAll('.btn-add-cart').forEach(btn => {
          btn.addEventListener('click', (e) => {
              const bookId = parseInt(e.currentTarget.getAttribute('data-id'));
              addToCart(bookId);
          });
      });
  }

  // Set up general event listeners
  function setupEventListeners() {
      // Filters
      filterBtns.forEach(btn => {
          btn.addEventListener('click', (e) => {
              // Update active class
              filterBtns.forEach(b => b.classList.remove('active'));
              e.target.classList.add('active');

              const genre = e.target.getAttribute('data-filter');
              
              if (genre === 'todos') {
                  renderBooks(allBooks);
              } else {
                  // Normalize strings for comparison (remove spaces, lowercase)
                  const normalizedGenre = genre.replace(/\s+/g, '').toLowerCase();
                  const filtered = allBooks.filter(book => {
                      const bookGenre = book.genero.replace(/\s+/g, '').toLowerCase();
                      // Check for exact match or inclusion (e.g. "cienciaficcion" vs "ciencia ficción")
                      return bookGenre === normalizedGenre || bookGenre.includes(normalizedGenre) || normalizedGenre.includes(bookGenre);
                  });
                  renderBooks(filtered);
              }
          });
      });

      // Cart toggle
      cartBtn.addEventListener('click', toggleCart);
      closeCartBtn.addEventListener('click', toggleCart);
      cartOverlay.addEventListener('click', toggleCart);

      // Checkout button
      document.getElementById('checkoutBtn').addEventListener('click', () => {
          if (cart.length === 0) {
              showToast('Tu carrito está vacío');
              return;
          }
          showToast('¡Procesando pago! (Simulación)');
          setTimeout(() => {
              cart = [];
              saveCart();
              updateCartUI();
              toggleCart();
              showToast('¡Compra realizada con éxito!');
          }, 1500);
      });
  }

  // Add item to cart
  function addToCart(id) {
      const book = allBooks.find(b => b.id === id);
      if (!book) return;

      const existingItem = cart.find(item => item.id === id);
      
      if (existingItem) {
          existingItem.quantity += 1;
      } else {
          cart.push({
              id: book.id,
              name: book.name,
              price: book.price,
              image: book.imagen,
              quantity: 1
          });
      }

      saveCart();
      updateCartUI();
      showToast(`✔ "${book.name}" agregado al carrito`);
  }

  // Remove or decrease item
  function removeFromCart(id, totally = false) {
      const index = cart.findIndex(item => item.id === id);
      if (index === -1) return;

      if (totally || cart[index].quantity === 1) {
          cart.splice(index, 1);
      } else {
          cart[index].quantity -= 1;
      }

      saveCart();
      updateCartUI();
  }

  // Update Cart DOM
  function updateCartUI() {
      cartItemsContainer.innerHTML = '';
      let total = 0;
      let count = 0;

      if (cart.length === 0) {
          cartItemsContainer.innerHTML = '<p style="text-align:center; color: var(--text-muted); margin-top: 2rem;">Tu carrito está vacío</p>';
      } else {
          cart.forEach(item => {
              total += item.price * item.quantity;
              count += item.quantity;

              const imgPath = item.image ? `assets/${item.image}` : 'assets/book_reading_icon_159273.png';

              const cartItem = document.createElement('div');
              cartItem.className = 'cart-item';
              cartItem.innerHTML = `
                  <img src="${imgPath}" alt="${item.name}" class="cart-item-img" onerror="this.src='assets/book_reading_icon_159273.png'">
                  <div class="cart-item-info">
                      <div class="cart-item-title">${item.name}</div>
                      <div class="cart-item-price">$${item.price.toLocaleString('es-AR')}</div>
                      <div class="cart-item-controls">
                          <button class="qty-btn minus" data-id="${item.id}">-</button>
                          <span>${item.quantity}</span>
                          <button class="qty-btn plus" data-id="${item.id}">+</button>
                      </div>
                  </div>
                  <button class="remove-btn" data-id="${item.id}"><i class="bi bi-trash"></i></button>
              `;
              cartItemsContainer.appendChild(cartItem);
          });

          // Re-attach listeners for new cart elements
          document.querySelectorAll('.qty-btn.plus').forEach(btn => {
              btn.addEventListener('click', (e) => {
                  addToCart(parseInt(e.target.getAttribute('data-id')));
              });
          });
          
          document.querySelectorAll('.qty-btn.minus').forEach(btn => {
              btn.addEventListener('click', (e) => {
                  removeFromCart(parseInt(e.target.getAttribute('data-id')), false);
              });
          });

          document.querySelectorAll('.remove-btn').forEach(btn => {
              btn.addEventListener('click', (e) => {
                  const id = parseInt(e.currentTarget.getAttribute('data-id'));
                  removeFromCart(id, true);
              });
          });
      }

      cartTotalEl.textContent = `$${total.toLocaleString('es-AR')}`;
      cartCountEl.textContent = count;
      
      if (count > 0) {
          cartCountEl.style.display = 'flex';
      } else {
          cartCountEl.style.display = 'none';
      }
  }

  function saveCart() {
      localStorage.setItem('gitano_cart', JSON.stringify(cart));
  }

  function toggleCart() {
      cartOverlay.classList.toggle('active');
      cartSidebar.classList.toggle('active');
      
      // Prevent body scrolling when cart is open
      if (cartSidebar.classList.contains('active')) {
          document.body.style.overflow = 'hidden';
      } else {
          document.body.style.overflow = '';
      }
  }

  function showToast(message) {
      toast.textContent = message;
      toast.classList.add('show');
      
      // Remove class after 3 seconds
      setTimeout(() => {
          toast.classList.remove('show');
      }, 3000);
  }
});
