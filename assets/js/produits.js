//liste des produits 

var productList = {"Bananes mures":[200,2999,5,"Mungo","../assets/img/bananes.jpg"],
  "Papayes vertes":[500,700,10,"Ebolowa","../assets/img/bananes.jpg"],
  "Maniocs":[600,4000,10,"Nyong","../assets/img/bananes.jpg"],
  "Oranges":[400,3500,20,"Nyong","../assets/img/bananes.jpg"]};

//element du DOM
const conteneur = document.querySelector('.conteneur-grid');

//inserer les produits 

function ajouterElements() {
  // Parcourir les cles de l'objet productList
  Object.keys(productList).forEach(nom => {
    const product = {
      nom: nom,
      poids: productList[nom][0],
      prix: productList[nom][1],
      quantite: productList[nom][2],
      origine: productList[nom][3],
      image: productList[nom][4]
    };

    const card = document.createElement('div');
    card.className = "card-product";

    // Ajouter le contenu HTML
    card.innerHTML = `
      <a href="#">
        <img src="${product.image}" alt="${product.nom}"/>
      </a>
      <p class="product-name">${product.nom} <br> ${product.poids}g</p>
      <p class="product-price">${product.prix} FCFA</p>
      <button>Ajouter au panier</button>
    `;

    // Ajouter la carte au conteneur

          conteneur.appendChild(card);

      
    
  });
}

document.addEventListener('DOMContentLoaded', () => {
    ajouterElements();
});