/**
 * Gère l'affichage et les interactions de la Product
 */
//récupératin de l'id kanap
const produit = window.location.search.split("?id=").join("");
console.log(produit);
let produitData = [];

// Récupération des articles de l'API
const fetchProduit = async () => {
    await fetch(`http://localhost:3000/api/products/${produit}`)
        .then((res) => res.json())
        .then((promise) => {
            produitData = promise;
            console.log(produitData);
        });
};
const produitItem = async () => {
    await fetchProduit(); {
            .then(function (ficheProduit) {
        const article = ficheProduit;
        console.table(articles);
        for (let article in articles) {

            // Insertion de l'image
            let productImg = document.createElement("img");
            productArticle.appendChild(productImg);
            productImg.src = ficheProduit[article].imageUrl;
            productImg.alt = ficheProduit[article].altTxt;


            // Insertion de l'élément "article"
            let productArticle = document.createElement("article");
            productLink.appendChild(productArticle);



            // Insertion du titre "h3"
            let productName = document.createElement("h1");
            productArticle.appendChild(productName);
            productName.classList.add("productName");
            productName.innerHTML = resultatAPI[article].name;

            // Insertion de la description "p"
            let productDescription = document.createElement("p");
            productArticle.appendChild(item__content__description__title);
            item__content__description__title.classList.add("productName");
            item__content__description__title.innerHTML = resultatAPI[article].description;
        }
    })
    .catch((erreur) => console.log('Accès aux Produits impossible'))
    };
}

produitItem();


// Répartition des données de l'API dans le DOM
