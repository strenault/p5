/**
 * Gère l'affichage et les interractions de panier
 */
var objRef = document.body;
document.body = objRef;


let addProduit = JSON.parse(localStorage.getItem('produit'));
console.log(addProduit);

produitpanier();

function produitpanier() {
    let produit = addProduit;


    console.log(produit);
    //afficher le panier dans cart
    // Insertion de l'élément "cart"
    let productCart = document.createElement("cart");
    document.querySelector(".cart").appendChild(productCart);
    productCart.href = "window.location.href";

    // Insertion de l'élément "cart__items"
    let productCartItems = document.createElement("section");
    document.querySelector("section").setAttribute("id", "cart__items")
    productCart.appendChild(productCartItems);
    //construction panier

    let productImg = document.createElement("img");
    document.querySelector("#cart__item__img").appendChild(productImg);
    productImg.src = produit.imgProduit;
    productImg.alt = produit.altImgProduit;

}
