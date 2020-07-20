
// Déclarations de  CLASSE
class Voiture {
/**
 * @param {string} mark
 * @param {string} model
 * @param {number} year
 * @param {string} registration
 * @param {string} color
 * @param {number} weight
 * @param {number} power
 * @param {number} tankCapacities
 * @param {number} lvlFuel
 * @param {number} nbPlace 
 * @param {boolean} insur
 * @param {string} msg
 * @param {string} paint
 * @param {string} custom
 * @param {number} fuel
 */

    constructor(mark, model, year, registration, color, weight, power , nbPlace, insur, msg, paint, custom) {

// Déclaration des VARIABLES sécurisé

    /** @type {string} id de la voiture privé */   
        let initRegistration = registration;
    /** @type {string} Couleur d'originie avant modif */    
        let initColor = color; 
    /** @type {number} poids du véhicule */
        let initWeight = weight; 
    /** @type {number} Puissance du vhl */
        let initPower = power; 
    /** @type {number} Capacité du réservoir 60 L */    
        let initTankCapacities = 60; 
    /** @type {number} Niveau actuel d'éssence, il y a 5L a la réception du VHL */
        let initLvlFuel = 5; 
    /** @type {number} Nombre de place dans le véhicule */    
        let initNbPlace = nbPlace; 
    /** @type {boolean} Assurance du véhicule */    
        let initInsur = insur; 
    /** @type {string} Message d'accueil */    
        let initMsg = msg; 
    /** @type {number} Consomation d'éssence  */    
        let conso = 0 ;
    /** @type {number} Distance pacourus */    
        let distance = 0 ;
    /** @type {number} Vitesse moyenne du véhicule pendant le trajet */
        let vitesseMoyenne = 0;
    /** @type {number} Consomation moyenne d'éssence pendant le trajet */
        let consoMoyenne ;

// Déclaration des VARIABLES PUBLIQUE
    /**@type {string} Marque du véhicule */
        this.mark = mark; 
    /** @type {string} Modèle du véhicule */
        this.model = model; 
    /** @type {string} Année du véhicule  */
        this.year = year; 
    /** @type {string} Repeindre le véhicule */
        this.paint = paint; 
    /** @type {string} Proposition de repeindre le véhicule */
        this.custom = 0;
    /** @type {number} Capacité du réservoir */
        this.tankCapacities = 60 ;
    /** @type {string} Liste des couleurs disponible pour repeindre le véhicule */
        this.listColors = ["bleu" , "rouge", "vert", "jaune", "noir", "blanc"];

// GETTERS
        this.getConsoMoyenne = function () {
            return consoMoyenne;
        }
        this.getVitesseMoyenne = function () {
            return vitesseMoyenne;
        };
        this.getDistance = function () {
            return distance;
        };
        this.getConso = function () {
            return conso;
        };
        this.getInitPower = function () {
            return initPower;
        };
        this.getInitRegistration = function () {
            return initRegistration;
        };
        this.getInitColor = function () {
            return initColor;
        };
        this.getInitWeight = function () {
            return initWeight;
        };
        this.getInitTankCapacities = function () {
            return initTankCapacities;
        };
        this.getInitLvlFuel = function () {
            return initLvlFuel;
        };
        this.getInitNbPlace = function () {
            return initNbPlace;
        };
        this.getInitInsur = function () {
            return initInsur;
        };
        this.getInitMsg = function () {
            return initMsg;
        };

// SETTERS
        this.setInitColor = function (colors) {
            colors.toLowerCase();
            if (this.listColors.indexOf(colors) == -1) {
                throw new Error ("Couleur invalide");
            }
            initColor = colors;
        };
        this.setInitRegistration = function (registration) {
            initRegistration = registration;
            return this.getInitRegistration
        };
        this.setInitMsg = function (message) {
            initMsg = message;
        };
        this.setInitLvlFuel = function (lvlFuel) {
            if (lvlFuel > 0 && lvlFuel < this.getInitTankCapacities()) {
                initLvlFuel = lvlFuel;
                return true;
            }
            return false;
          
        }
        this.setInitInsur = function (insur) {
                initInsur = true;
                insur = true
                return "parfait le véhicule est assuré"
        }
    }

// Liste des METHODES (fonctions)
    affiche() {
        return "Tu as acheter une " + this.mark + " " + this.model + " de" + this.getInitPower() + "cv.";
    }

    repaint(paint) {
        if (paint === this.getInitColor()) {
            return "Tu as bien fait de faire ce rafraichissement !";
        }
        else if (paint !== this.getInitColor()) { // attention a ne PAS METTRE DE SETTER mais toujours un getter
        try { // instruction qu' on souhaite exécuter
                this.setInitColor(paint);
            return "Tres belle nouvelle peinture mec !";
        } catch (e) { // instruction a éxecuter si une exception est levée dans le bloc try
            console.log(e); // e = Error
            return false; // renvoi erreur ligne 76
        }
    }
    }
    toString() {
        return ("immatriculation : " +immatriculation+ "\n puissance : " + this.getInitPower() + " cv \n La couleur du véhicule : " +this.getInitColor() );
    }

    seDeplacer (consoMoyenne) {
        this.getDistance = parseInt(prompt("Combien de km allez-vous parcourir ?"));
        this.getVitesseMoyenne = parseInt(prompt("Quel sera votre vitesse moyenne ? "));

    if (this.getVitesseMoyenne > 130) {
        this.getConso = 12 / 100;
    } else if ( this.getVitesseMoyenne < 50) {
        this.getConso = 10 / 100;
    } else if ( this.getVitesseMoyenne >= 50 && this.getVitesseMoyenne <= 90) {
        this.getConso = 5 / 100;
    } else if ( this.getVitesseMoyenne > 90 && this.getVitesseMoyenne < 130) {
        this.getConso = 8 / 100;
    } 
    consoMoyenne = this.getConso * this.getDistance;

    if ( consoMoyenne < this.getInitTankCapacities())  {
        console.log(" Tu as assez d'éssence mec ! ");
        console.log("Tu vas consommer " + consoMoyenne + " Litres sur ton trajet.");
    }
    else if ( consoMoyenne > this.getInitTankCapacities()) {
        console.log(" Tu vas devoir faire le plein sur le trajet. ");
    }
    }

    mettreEssence (fuel) {
        console.log(fuel)
        if(!this.setInitLvlFuel(this.getInitLvlFuel () + fuel))
        {
            console.log(" ça coule partout");
        } 
        if (this.getInitLvlFuel()  == this.getInitTankCapacities()) {
                console.log (" Y'a le plein c'est bon ");
        } else if (this.getInitLvlFuel() < this.getInitTankCapacities()) {
                console.log(" Tu n'es pas a 100% ");
        } console.log(this.getInitLvlFuel() + " Litres");
        }
}

// Traitements

// Nouvelles déclaration de VARIABLE
let msgPeinture ;
let makeVhl ;
let satisfait = false;
let immatriculation = "";
let fuel = 0;

// Création de fille de la classe Voiture
makeVhl = confirm("Voulez vous que l'ont crée votre voiture ensemble ?")

if (makeVhl) {
4
alert("Commençons avec un modèle de base")

let megane = new Voiture("Renault", "Megane" , "2017", immatriculation, "rouge", "1200", "10" );

// PEINTURE
custom = prompt("Ta couleur d'origine est rouge. Si tu veux repeindre ta voiture écrit OUI \n sinon écrit NON \n (oui ou non)"); // Méthode ligne 93
    
if (custom === "oui") {
    do{
        paint = (prompt("Les couleurs disponibles sont : Jaune, Bleu, Vert, Rouge, Bleu, Noir, Blanc \n De quel couleurs veux tu la repeindre ? ")) ;
    msgPeinture = megane.repaint(paint);
    }
    while (!msgPeinture)
    console.log(msgPeinture)// permet d'afficher les msg venant de repaint ligne 98 et venant du setter ligne 76
    } 
else if (custom === "non") {
    console.log("Dommage");
    }

alert("Passons a la suite")

// ASSURANCE

// toujours pas mis en booléen
while (!satisfait) {
satisfait = confirm (" Vous devez souscrire une assurance, nous ne pourrons pas continuer sinon")
if (satisfait) { 
    alert(megane.setInitInsur())
}

}

// METTRE ESSENCE
essence = confirm(" Le véhciule vous seras livré avec seulement 5 litres d'éssence. Veux-tu faire le plein d'éssence ? \n ( réservoir de 60 Litres )") // Méthode ligne 133
            
        if (essence) { // confirm essence

            fuel = parseInt(prompt(" Combien de litres ? "));
            console.log(fuel)
            megane.mettreEssence(fuel);
        } else if (essence === "non") {
            console.log("Ok pas de recomplétement");
        }

// IMMATRICULATION

let verif = new RegExp ('^[A-Z]{2}-[0-9]{3}-[A-Z]{2}$');

while (!satisfait)
{
    do
    {
        immatriculation = prompt('Entrez une immatriculation valide.\nExemple : AJ-123-BK');
        if (!verif.test(immatriculation)) alert('Attention à bien respecter le modèle (majuscule et tirets compris)!');
    }
    while (!verif.test(immatriculation))
    satisfait = confirm ('Votre nouvelle immatriculation est le: "'+immatriculation+'".\nCela vous convient-il ?'); // utilisation du booleen
}
satisfait = false;





// Affichage
megane.seDeplacer();

alert(megane.toString()); // ligne 103 

megane.setInitMsg("Tu es l'heureux propriétaire d'une Renault Mégane"); // ligne 107

alert(megane.getInitMsg())

alert(megane.affiche()); // ligne 94

} else {
    console.log("fini")
}
