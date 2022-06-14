/**
 * Gère l'affichage et les interactions de la Product
 */
//récupératin de l'id kanap
var str = window.location.href;
var url = new URL(str);
var idProduct = url.searchParams.get("id");
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
                let productProduit = document.createElement("article");
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
var iNodeList = document.getElementsByClassName('item').getElementsByClassName('article');
if (iNodeList > 0) {
    var oNodeList = item.getElementsByClassName("*");
    if (oNodeList.lenght > 0) {
        console.log(iNodeList);
    } else {
        /*non trouvé*/
    }
} else {
    /*message"item non touvé"*/
}// insertion de l'élément "item__img"
let productItemImg = document.createElement(".item__img");
productItem.appendChild(productItemImg);
//insertion de l'élément "item__content"
let productItemContent = document.createElement(".item__content");
productItem.appendChild(productItemContent);
//insertion de l'élément "item__content__title__price"
let productItemContentTitlePrice = document.createElement(".item__content__title__price");
productItemContent.appendChild(productItemContentTitlePrice);
//insertion de l'élément"title"
let productTitle = document.createElement("#title");
productItemContent.appendChild(productTitle);
//insertion de l'élément"price"
let productPrice = document.createElement("#price");
productItemContent.appendChild(productPrice);
//insertion de l'élément"item__content__description"
let productItemContentDescription = document.createElement(".item__content__description");
productItemContent.appendChild(productItemContentDescription);
//insertion de l'élément"item__content__description__title"
let productItemContentDescriptionTitle = document.createElement(".item__content__description__title");
productItemContentDescription.appendChild(productItemContentDescriptionTitle);
//insertion de l'élément"item__content__description__title"
let productItemContentIdDescription = document.createElement("#description");
productItemContentDescription.appendChild(productItemContentIdDescription);
// Insertion de l'élément "article"
// Insertion du titre "h1"
let productName = document.createElement("h1");
productname = article.name;
document.querySelector('h1').appendChild('title');



// Insertion de la description "p"
let productDescription = document.createElement("p");
productDescriptin = article.description;
description.appendChild(productDescription);

    // Insertion de l'élément "a"
    // Insertion de l'élément "article"
    // Insertion de l'image
