"use strict";
// 1️ Classe Adresse
// Chaque adresse contient :
// - une rue
// - une ville
// - un code postal
Object.defineProperty(exports, "__esModule", { value: true });
exports.Adresse = void 0;
var Adresse = /** @class */ (function () {
    // Constructeur : initialise les trois attributs
    function Adresse(rue, ville, codePostal) {
        this.rue = rue;
        this.ville = ville;
        this.codePostal = codePostal;
    }
    // Getters et Setters
    Adresse.prototype.getRue = function () {
        return this.rue;
    };
    Adresse.prototype.setRue = function (rue) {
        this.rue = rue;
    };
    Adresse.prototype.getVille = function () {
        return this.ville;
    };
    Adresse.prototype.setVille = function (ville) {
        this.ville = ville;
    };
    Adresse.prototype.getCodePostal = function () {
        return this.codePostal;
    };
    Adresse.prototype.setCodePostal = function (cp) {
        this.codePostal = cp;
    };
    // Méthode pratique pour afficher une adresse
    Adresse.prototype.toString = function () {
        return "".concat(this.rue, ", ").concat(this.ville, " (").concat(this.codePostal, ")");
    };
    return Adresse;
}());
exports.Adresse = Adresse;
