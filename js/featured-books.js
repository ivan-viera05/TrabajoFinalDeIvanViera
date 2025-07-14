// Featured Books Management
class FeaturedBooksManager {
    constructor() {
        this.libros = [];
        this.featuredBooksContainer = document.getElementById('featured-books');
        this.viewMoreBtn = document.getElementById('viewMoreBtn');
        this.allProductsSection = document.getElementById('allProductsSection');
        
        this.init();
    }

    async init() {
        await this.loadBooks();
        this.displayFeaturedBooks();
        this.setupEventListeners();
    }

    async loadBooks() {
        try {
            const response = await fetch('libros.json');
            this.libros = await response.json();
        } catch (error) {
            console.error('Error loading books:', error);
        }
    }

    getFeaturedBooks() {
        // Select 6 featured books from different genres
        const featuredBooks = [];
        const genres = ['ciencia ficción', 'policial', 'romance', 'suspenso y drama', 'terror'];
        
        // Get one or two books from each genre
        genres.forEach(genre => {
            const genreBooks = this.libros.filter(book => 
                book.genero.toLowerCase().includes(genre.toLowerCase())
            );
            
            if (genreBooks.length > 0) {
                // Get a random book from this genre or the first one
                const randomBook = genreBooks[Math.floor(Math.random() * genreBooks.length)];
                featuredBooks.push(randomBook);
            }
        });

        // If we need more books, add some random ones
        while (featuredBooks.length < 6 && featuredBooks.length < this.libros.length) {
            const randomBook = this.libros[Math.floor(Math.random() * this.libros.length)];
            if (!featuredBooks.find(book => book.id === randomBook.id)) {
                featuredBooks.push(randomBook);
            }
        }

        return featuredBooks.slice(0, 6); // Return maximum 6 books
    }

    displayFeaturedBooks() {
        const featuredBooks = this.getFeaturedBooks();
        
        this.featuredBooksContainer.innerHTML = featuredBooks.map(book => `
            <div data-aos="zoom-in" class="container-product d-flex p-5 col-sm-6 col-md-4 col-xl-3" id="${book.name}">
                <div class="row justify-content-center">
                    <a class="book-container" href="html/shop.html" onclick="redirectToShop('${book.id}', '${book.name}', '${book.autor}', '${book.price}', '${book.imagen}', '${book.descripcion}')" target="_blank" rel="noreferrer noopener">
                        <div class="book">
                            <img alt="${book.name}" src="assets/${book.imagen}">
                        </div>
                    </a>
                    <div class="descripcion-product col-12 mt-4 text-center">
                        <h3 class="title-product montserrat-title">${book.name}</h3>
                        <h4 class="autor-product oswald-author">${book.autor}</h4>
                        <div class="d-flex price-btn-product justify-content-around align-items-center">
                            <p class="price-product no-cambiar-color">$${book.price}</p>
                            <button class="btn-product mx-1 border d-inline addToCartBtn" onclick="agregarAlCarrito('${book.id}', '${book.name}', '${book.autor}', '${book.price}', '${book.imagen}', '${book.descripcion}')">Agregar al carrito</button>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');

        // Initialize AOS for featured books
        if (typeof AOS !== 'undefined') {
            AOS.refresh();
        }
    }

    setupEventListeners() {
        this.viewMoreBtn.addEventListener('click', () => {
            this.showAllProducts();
        });
    }

    showAllProducts() {
        // Hide featured section
        const featuredSection = document.querySelector('.featured-section');
        featuredSection.style.display = 'none';
        
        // Show all products section
        this.allProductsSection.classList.add('show');
        
        // Scroll to all products section
        this.allProductsSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });

        // Update page title
        document.title = 'Todos los Libros - El Gitano';
        
        // Add a "back to featured" button
        this.addBackToFeaturedButton();
    }

    addBackToFeaturedButton() {
        const existingBackBtn = document.querySelector('.back-to-featured-btn');
        if (existingBackBtn) return; // Button already exists

        const backButton = document.createElement('button');
        backButton.className = 'btn btn-outline-secondary back-to-featured-btn mb-3';
        backButton.innerHTML = '<i class="bi bi-arrow-left me-2"></i>Volver a Destacados';
        backButton.style.marginLeft = '1rem';
        
        backButton.addEventListener('click', () => {
            this.showFeaturedSection();
        });

        // Insert the button at the beginning of the all products section
        const mainContainer = this.allProductsSection.querySelector('main');
        mainContainer.insertBefore(backButton, mainContainer.firstChild);
    }

    showFeaturedSection() {
        // Show featured section
        const featuredSection = document.querySelector('.featured-section');
        featuredSection.style.display = 'block';
        
        // Hide all products section
        this.allProductsSection.classList.remove('show');
        
        // Remove back button
        const backBtn = document.querySelector('.back-to-featured-btn');
        if (backBtn) {
            backBtn.remove();
        }
        
        // Scroll to featured section
        featuredSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });

        // Update page title
        document.title = 'El Gitano - Librería Online';
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const featuredBooksManager = new FeaturedBooksManager();
});
