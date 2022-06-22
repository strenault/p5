/**
 * Gère l'affichage et les interractions de panier
 */
//Initialisation du local storage
let produitLocalStorage = JSON.parse(localStorage.getItem("produit"));
const PosEmptyCarty = document.querySelector('.cart');

produitpanier();

function produitpanier() {

    //panier vide -> localStorage eest  vide
    if (produitLocalStorage === null || produitLocalStorage == 0) {
        const emptyCard = '<p> panier est vide </p>';
        PosEmptyCarty.innerHTML = emptyCard;
    }
    // s'il y' a des produits
    else {
        for (let produit in produitLocalStorage) {
            let productPanier = document.createElement("panier");
            document.querySelector(".cart").appendChild(productPanier);
            productPanier.className = "cart";

            // insertion de div qui contient la photo
            let productDivArt = document.createElement("div");
            productPanier.appendChild(productDivArt);
            productDivArt.className = "cart__items";
            productDivArt.setAttribute('data-id', produitLocalStorage[produit].idProduit);

            let productArticle = document.createElement("article");
            productPanier.appendChild(productArticle);


            // insertion de div qui contient la photo
            let productDivImg = document.createElement("div");
            productArticle.appendChild(productDivImg);
            productDivImg.className = "cart__item__img";

            let productImg = document.createElement("img");
            productDivImg.appendChild(productImg);
            productImg.src = produitLocalStorage[produit].imgProduit;
            productImg.alt = produitLocalStorage[produit].altImgProduit;

            // insertion element div
            let productItemContent = document.createElement("div");
            productArticle.appendChild(productItemContent);
            productDivImg.className = "cart__item__content";

            //

            let productItemContentTitlePrice = document.createElement("div");
            productItemContent.appendChild(productItemContentTitlePrice);
            productItemContentTitlePrice.className = "cart__item__content__description";

            // titre
            let productTitle = document.createElement('h2');
            productItemContentTitlePrice.appendChild(productTitle);
            productTitle.innerHTML = produitLocalStorage[produit].nomProduit;

            // couleur
            let productColor = document.createElement('p');
            productItemContentTitlePrice.appendChild(productColor);
            productColor.innerHTML = produitLocalStorage[produit].couleurProduit;

            // prix
            let productPrice = document.createElement('p');
            productItemContentTitlePrice.appendChild(productPrice);
            productPrice.innerHTML = produitLocalStorage[produit].prixProduit + " € ";

            // settings
            let productItemContentSettings = document.createElement("div");
            productItemContent.appendChild(productItemContentSettings);
            productItemContentSettings.className = "cart__item__content__settings";

            // Insertion de l'élément "div"
            let productItemContentSettingsQuantity = document.createElement("div");
            productItemContentSettings.appendChild(productItemContentSettingsQuantity);
            productItemContentSettingsQuantity.className = "cart__item__content__settings__quantity";


            // Insertion de "Qté : "
            let productQte = document.createElement("p");
            productItemContentSettingsQuantity.appendChild(productQte);
            productQte.innerHTML = "Qté :";

            // insertion input

            let productQuantity = document.querySelector("input");
            productItemContentSettingsQuantity.appendChild(productQuantity);
            productQuantity.value = produitLocalStorage[produit].quantiteProduit;
            productQuantity.className = "itemQuantity";
            productQuantity.setAttribute("type", "number");
            productQuantity.setAttribute("min", "1");
            productQuantity.setAttribute("max", "100");
            productQuantity.setAttribute("name", "itemQuantity");


            // Insertion de l'élément "div"
            let productItemContentSettingsDelete = document.createElement("div");
            productItemContentSettings.appendChild(productItemContentSettingsDelete);
            productItemContentSettingsDelete.className = "cart__item__content__settings__delete";

            // Insertion de "p" supprimer
            let productSupprimer = document.createElement("p");
            productItemContentSettingsDelete.appendChild(productSupprimer);
            productSupprimer.className = "deleteItem";
            productSupprimer.innerHTML = "Supprimer";
            productSupprimer.addEventListener("click", (e) => {
                e.preventDefault;

                // enregistrer l'id et la couleur séléctionnés par le bouton supprimer
                let deleteId = produitLocalStorage[produit].idProduit;
                let deleteColor = produitLocalStorage[produit].couleurProduit;

                // filtrer l'élément cliqué par le bouton supprimer
                produitLocalStorage = produitLocalStorage.filter(elt => elt.idProduit !== deleteId || elt.couleurProduit !== deleteColor);

                // envoyer les nouvelles données dans le localStorage
                localStorage.setItem('cart', JSON.stringify(produitLocalStorage));

                // avertir de la suppression et recharger la page
                alert('Votre article a bien été supprimé.');
                location.reload();

                //Si pas de produits dans le local storage on affiche que le panier est vide
                if (produitLocalStorage.length === 0) {
                    localStorage.clear();
                }
                //Refresh rapide de la page
                location.reload();
            });

            let productDivCart = document.createElement('div');
            productPanier.appendChild(productDivCart);
            productDivCart.className = "cart__price";

            let productCartPrice = document.createElement('carte__price');
            productDivCart.appendChild(productCartPrice);
            productCartPrice.className = "cart__price";


            let productTotalQ = document.createElement('span');
            productCartPrice.appendChild(productTotalQ);
            productTotalQ.setAttribute("totalQuantity", "id");


            let productTotalPrix = document.createElement('span');
            productCartPrice.appendChild(productTotalPrix);
            productTotalPrix.setAttribute("totalPrice", "id");
        }
    }
    //Création de cart


}



function modifyQtt() {
    let qttModif = document.querySelectorAll(".itemQuantity");

    for (let k = 0; k < qttModif.length; k++) {
        qttModif[k].addEventListener("change", (event) => {
            event.preventDefault();

            //Selection de l'element à modifier en fonction de son id ET sa couleur
            let quantityModif = produitLocalStorage[produit].quantiteProduit;
            let qttModifValue = qttModif[produit].valueAsNumber;

            const resultFind = produitLocalStorage.find((el) => el.qttModifValue !== quantityModif);

            resultFind.qtyKanap = qttModifValue;
            produitLocalStorage[cart].quantiteProduit = resultFind.qtyKanat;

            localStorage.setItem("cart", JSON.stringify(cartLocalStorage));

            // refresh rapide
            location.reload();
        })
    }
}
modifyQtt();


function getTotals() {

    // Récupération du total des quantités
    var elemsQtt = document.getElementsByClassName('itemQuantity');
    var myLength = elemsQtt.length,
        totalQtt = 0;

    for (var i = 0; i < myLength; ++i) {
        totalQtt += elemsQtt[i].valueAsNumber;
    }
    //Récupération du prix de l'article

    let prixcart = cartLocalStorage[cart].prixProduit;


    let cartTotalQuantity = document.getElementById('totalQuantity');
    cartTotalQuantity.innerHTML = totalQtt;

    // Récupération du prix total
    totalPrice = 0;
    for (var i = 0; i < myLength; ++i) {
        totalPrice += (elemsQtt[i].valueAsNumber * prixcart);
    }

    let cartTotalPrice = document.getElementById('totalPrice');
    cartTotalPrice.innerHTML = totalPrice;
}





const prenom = document.getElementById("firstName");
const nom = document.getElementById("lastName");
const ville = document.getElementById("city");
const adresse = document.getElementById("address");
const mail = document.getElementById("email");



// email
const emailErrorMsg = document.getElementById("emailErrorMsg");
function validateEmail(mail) {
    const regexMail =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regexMail.test(mail) == false) {
        return false;
    } else {
        emailErrorMsg.innerHTML = null;
        return true;
    }
}
// pour les noms : caractères acceptés par RegEx

const regexName = /^[a-z][a-z '-.,]{1,31}$|^$/i;

// prenom
const firstNameErrorMsg = document.getElementById("firstNameErrorMsg");
function validateFirstName(prenom) {
    if (regexName.test(prenom) == false) {
        return false;
    } else {
        firstNameErrorMsg.innerHTML = null;
        return true;
    }
}

// nom
const lastNameErrorMsg = document.getElementById("lastNameErrorMsg");
function validateLastName(nom) {
    if (regexName.test(nom) == false) {
        return false;
    } else {
        lastNameErrorMsg.innerHTML = null;
        return true;
    }
}

// ville
const cityErrorMsg = document.getElementById("cityErrorMsg");
function validateCity(ville) {
    if (regexName.test(ville) == false) {
        return false;
    } else {
        cityErrorMsg.innerHTML = null;
        return true;
    }
}



