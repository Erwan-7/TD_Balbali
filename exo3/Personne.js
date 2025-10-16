"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personne = void 0;
// 1️ Classe Personne
// Chaque personne contient :
// - un nom
// - un sexe ("M" ou "F")
// - un tableau d’adresses
var Personne = /** @class */ (function () {
    // Constructeur avec 3 paramètres
    function Personne(nom, sexe, adresses) {
        this.nom = nom;
        this.sexe = sexe;
        this.adresses = adresses;
    }
    // Getters / Setters
    Personne.prototype.getNom = function () {
        return this.nom;
    };
    Personne.prototype.setNom = function (nom) {
        this.nom = nom;
    };
    Personne.prototype.getSexe = function () {
        return this.sexe;
    };
    Personne.prototype.setSexe = function (sexe) {
        this.sexe = sexe;
    };
    Personne.prototype.getAdresses = function () {
        return this.adresses;
    };
    Personne.prototype.setAdresses = function (adresses) {
        this.adresses = adresses;
    };
    // Méthode utilitaire : afficher une personne et ses adresses
    Personne.prototype.toString = function () {
        var adressesStr = this.adresses.map(function (a) { return a.toString(); }).join(" | ");
        return "".concat(this.nom, " (").concat(this.sexe, ") -> ").concat(adressesStr);
    };
    return Personne;
}());
exports.Personne = Personne;
