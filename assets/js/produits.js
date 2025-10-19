// Liste des produits
var productList = {
  "Bananes mures": [200, 2999, 5, "Mungo", "../assets/img/bananes.jpg"],
  "Papayes vertes": [500, 700, 10, "Ebolowa", "../assets/img/papayes.jpg"],
  "Maniocs": [600, 4000, 7, "Nyong", "../assets/img/manioc.jpg"],
  "Oranges": [400, 3500, 3, "Nyong", "../assets/img/orange.jpg"]
};

// Élément du DOM
const conteneur = document.querySelector('.conteneur-grid');

// Insérer les produits
function addElements(products = productList) { // Par défaut, utilise productList
  conteneur.innerHTML = ''; // Vider le conteneur
  Object.keys(products).forEach(nom => {
    const product = {
      nom: nom,
      poids: products[nom][0],
      prix: products[nom][1],
      quantite: products[nom][2],
      origine: products[nom][3],
      image: products[nom][4]
    };
    
    for (let index = 0; index < product.quantite; index++) {
      const card = document.createElement('div');
      card.className = "card-product";
      card.innerHTML = `
        <a href="#">
          <img src="${product.image}" alt="${product.nom}"/>
        </a>
        <p class="product-name">${product.nom}</p>
        <p class="product-origin">${product.poids} g</p>
        <p class="product-origin">${product.origine}</p> <!-- Correction : origine -->
        <p class="product-price">${product.prix} FCFA</p>
        <button>Ajouter au panier</button>
      `;
      conteneur.appendChild(card);
    }
  });
}

function applyFilters() {
  const originFilter = document.getElementById('origin-filter').value;
  const priceFilter = document.getElementById('price-filter').value;

  const filteredProducts = Object.fromEntries(
    Object.entries(productList).filter(([_, details]) => {
      const matchesOrigin = !originFilter || details[3] === originFilter;
      const matchesPrice = !priceFilter || (parseInt(priceFilter) >= details[1]);
      return matchesOrigin && matchesPrice;
    })
  );

  addElements(filteredProducts); // Utilise addElements
  //menuFilterContainer.classList.remove('active'); // Ferme le menu
}

// Récupération des éléments du DOM
const iconMenu = document.getElementById('icon-menu');
const paginationMenu = document.getElementById('pagination-menu');
const iconFilter = document.getElementById('icon-filter');
const menuFilterContainer = document.querySelector('.menu-filter-container');
const closeBtnFilter = document.getElementById('close-btn-filter');

// Événements
iconFilter.addEventListener('click', () => {
  menuFilterContainer.classList.toggle('active');
  iconFilter.classList.toggle('hidden');
  iconMenu.classList.toggle('hidden');
});

closeBtnFilter.addEventListener('click', () => {
  menuFilterContainer.classList.remove('active');
  iconFilter.classList.remove('hidden');
  iconMenu.classList.remove('hidden');
});

iconMenu.addEventListener('click', () => {
  paginationMenu.classList.toggle('visible');
  iconFilter.classList.toggle('hidden');
});

document.addEventListener('DOMContentLoaded', () => {
  addElements();
});