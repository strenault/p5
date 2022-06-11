/**
 * Gère l'affichage et les interactions de la Product
 */
//récupératin de l'id kanap
const produits = window.location.search.split("?id=").join("");
console.log(produits);
let produitData = [];

// Insertion de l'élément "article"
const apiProduit = async () => {
    await fetch(`http://localhost:3000/api/products/${produits}`)
        .then((res) => res.json())
        .then((promise) => {
            produitData = promise;
            console.log(produitData);
        });

};
// Répartition des données de l'API dans le DOM
// Répartition des données de l'API dans le DO
async function fillSection() {
    var result = await apiProduit()
        .then(function (resultatApiProduit) {
            const articles = produitData;
            console.table(produitData);
            for (let produitData in articles) {

                // Insertion de l'élément "article"
                let productMain = document.createElement("articles");
                document.querySelector(".item").appendChild(productMain);
                productMain.href = `http://localhost:3000/api/products/${produitData}`;

                // Insertion de l'élément "produit"
                let productProduit = document.createElement("ProduitData");
                productMain.appendChild(productProduit);
                // Insertion de l'image
                let productImg = document.createElement("img");
                productProduit.appendChild(productImg);
                productImg.src = articles.imageUrl;
                productImg.alt = articles.altTxt;

            };
        });
};
fillSection();
    // Insertion de l'élément "article"
    // Insertion de l'élément "a"
    // Insertion de l'élément "article"
    // Insertion de l'image
