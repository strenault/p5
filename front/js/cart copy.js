/**
 * Gère l'affichage et les interractions de panier
 */
let addProduit = JSON.parse(localStorage.getItem('produit'));
console.log(addProduit);
produitpanier();

function produitpanier() {
    let produit = addProduit;
    console.log(produit);
    //construction panier
    const cartitem = document.createElement("section").setAttribute("id", "cart__items");

    document.getElementById("cart__items").innerHTML += `<!--  <article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
                                                                                        <div class="cart__item__img">
                                                                                        <img src="${produit.imgProduit}" alt="${produit.altImgProduit}">
                                                                                        </div>
                                                                                        <div class="cart__item__content">
                                                                                        <div class="cart__item__content__description">
                                                                                            <h2>${produit.nomProduit}</h2>
                                                                                            <p>${produit.couleurProduit}</p>
                                                                                            <p>${produit.prixProduit}</p>
                                                                                        </div>
                                                                                        <div class="cart__item__content__settings">
                                                                                            <div class="cart__item__content__settings__quantity">
                                                                                            <p>Qté : ${produit.quantiteProduit}</p>
                                                                                            <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
                                                                                            </div>
                                                                                            <div class="cart__item__content__settings__delete">
                                                                                            <p class="deleteItem">Supprimer</p>
                                                                                            </div>
                                                                                        </div>
                                                                                        </div>
                                                                                    </article> -->
                                                                                    `

        ;


    console.log("#carte__items")

}



//afficher le panier dans cart

// Répartition des données de l'API dans le DOM

//insertion de l'image









