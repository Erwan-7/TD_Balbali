"use strict";
// ============================================
// EXERCICE 2 - CLASSE STAGIAIRE
// ============================================
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stagiaire = void 0;
// 1️⃣ Création de la classe Stagiaire
// Elle possède :
// - un nom (string)
// - une liste de notes (number[])
var Stagiaire = /** @class */ (function () {
    // Constructeur : on donne le nom et le tableau de notes dès la création
    function Stagiaire(nom, notes) {
        this.nom = nom;
        this.notes = notes;
    }
    // 2️⃣ Getters et setters
    Stagiaire.prototype.getNom = function () {
        return this.nom;
    };
    Stagiaire.prototype.setNom = function (nom) {
        this.nom = nom;
    };
    Stagiaire.prototype.getNotes = function () {
        return this.notes;
    };
    Stagiaire.prototype.setNotes = function (notes) {
        this.notes = notes;
    };
    // 3️⃣ Calcul de la moyenne des notes du stagiaire
    Stagiaire.prototype.calculerMoyenne = function () {
        // On vérifie d’abord qu’il y a des notes
        if (this.notes.length === 0)
            return 0;
        // On additionne toutes les notes puis on divise par le nombre de notes
        var somme = this.notes.reduce(function (acc, note) { return acc + note; }, 0);
        return somme / this.notes.length;
    };
    // 4️⃣ Trouver la note maximale du stagiaire
    Stagiaire.prototype.trouverMax = function () {
        // Math.max(...tableau) donne la plus grande valeur
        return Math.max.apply(Math, this.notes);
    };
    // 4️⃣ Trouver la note minimale du stagiaire
    Stagiaire.prototype.trouverMin = function () {
        // Math.min(...tableau) donne la plus petite valeur
        return Math.min.apply(Math, this.notes);
    };
    // Méthode pratique pour afficher un stagiaire
    Stagiaire.prototype.toString = function () {
        return "".concat(this.nom, " - Notes: [").concat(this.notes.join(", "), "] - Moyenne: ").concat(this.calculerMoyenne().toFixed(2));
    };
    return Stagiaire;
}());
exports.Stagiaire = Stagiaire;
