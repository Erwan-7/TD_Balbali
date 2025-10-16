"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Formation = void 0;
// 5️ Classe Formation
// Contient :
// - un intitulé (string)
// - un nombre de jours (number)
// - une liste de stagiaires (Stagiaire[])
var Formation = /** @class */ (function () {
    // Constructeur de la classe Formation
    function Formation(intitule, nbrJours, stagiaires) {
        this.intitule = intitule;
        this.nbrJours = nbrJours;
        this.stagiaires = stagiaires;
    }
    // Getters / Setters (6️)
    Formation.prototype.getIntitule = function () {
        return this.intitule;
    };
    Formation.prototype.setIntitule = function (intitule) {
        this.intitule = intitule;
    };
    Formation.prototype.getNbrJours = function () {
        return this.nbrJours;
    };
    Formation.prototype.setNbrJours = function (nbrJours) {
        this.nbrJours = nbrJours;
    };
    Formation.prototype.getStagiaires = function () {
        return this.stagiaires;
    };
    Formation.prototype.setStagiaires = function (stagiaires) {
        this.stagiaires = stagiaires;
    };
    // 6️ Calculer la moyenne générale de la formation
    // (moyenne des moyennes de tous les stagiaires)
    Formation.prototype.calculerMoyenneFormation = function () {
        if (this.stagiaires.length === 0)
            return 0;
        var total = 0;
        for (var _i = 0, _a = this.stagiaires; _i < _a.length; _i++) {
            var s = _a[_i];
            total += s.calculerMoyenne();
        }
        return total / this.stagiaires.length;
    };
    // 7️ Trouver l’indice du stagiaire ayant la meilleure moyenne
    Formation.prototype.getIndexMax = function () {
        if (this.stagiaires.length === 0)
            return -1;
        var meilleurIndex = 0;
        var meilleureMoyenne = this.stagiaires[0].calculerMoyenne();
        for (var i = 1; i < this.stagiaires.length; i++) {
            var moyenne = this.stagiaires[i].calculerMoyenne();
            if (moyenne > meilleureMoyenne) {
                meilleureMoyenne = moyenne;
                meilleurIndex = i;
            }
        }
        return meilleurIndex;
    };
    // 8️ Afficher le nom du meilleur stagiaire
    Formation.prototype.afficherNomMax = function () {
        var index = this.getIndexMax();
        if (index === -1) {
            console.log("Aucun stagiaire trouvé !");
            return;
        }
        console.log("Le meilleur stagiaire est : ".concat(this.stagiaires[index].getNom()));
    };
    // 9️ Afficher la note minimale du meilleur stagiaire
    Formation.prototype.afficherMinMax = function () {
        var index = this.getIndexMax();
        if (index === -1)
            return;
        var meilleur = this.stagiaires[index];
        console.log("Note minimale du meilleur stagiaire (".concat(meilleur.getNom(), ") : ").concat(meilleur.trouverMin()));
    };
    // 10 Trouver et afficher la moyenne d’un stagiaire selon son nom
    Formation.prototype.trouverMoyenneParNom = function (nom) {
        //  version sans .find() → compatible toutes versions TS
        var stagTrouve = undefined;
        for (var _i = 0, _a = this.stagiaires; _i < _a.length; _i++) {
            var s = _a[_i];
            if (s.getNom() === nom) {
                stagTrouve = s;
                break;
            }
        }
        if (stagTrouve) {
            console.log("La moyenne de ".concat(nom, " est : ").concat(stagTrouve.calculerMoyenne().toFixed(2)));
        }
        else {
            console.log("Aucun stagiaire trouv\u00E9 avec le nom \"".concat(nom, "\"."));
        }
    };
    return Formation;
}());
exports.Formation = Formation;
