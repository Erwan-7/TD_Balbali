"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TroisPoints = void 0;
var TroisPoints = /** @class */ (function () {
    // Constructeur avec trois paramètres
    function TroisPoints(premier, deuxieme, troisieme) {
        this.premier = premier;
        this.deuxieme = deuxieme;
        this.troisieme = troisieme;
    }
    // Getters / Setters pour les trois points
    TroisPoints.prototype.getPremier = function () {
        return this.premier;
    };
    TroisPoints.prototype.setPremier = function (p) {
        this.premier = p;
    };
    TroisPoints.prototype.getDeuxieme = function () {
        return this.deuxieme;
    };
    TroisPoints.prototype.setDeuxieme = function (p) {
        this.deuxieme = p;
    };
    TroisPoints.prototype.getTroisieme = function () {
        return this.troisieme;
    };
    TroisPoints.prototype.setTroisieme = function (p) {
        this.troisieme = p;
    };
    // 7️ Tester l'alignement des trois points
    TroisPoints.prototype.TesterAlignement = function () {
        var AB = this.premier.calculerDistance(this.deuxieme);
        var AC = this.premier.calculerDistance(this.troisieme);
        var BC = this.deuxieme.calculerDistance(this.troisieme);
        // Trois points A, B, C sont alignés si AB = AC + BC, AC = AB + BC, ou BC = AB + AC
        var epsilon = 1e-9; // tolérance pour les erreurs d'arrondi
        return (Math.abs(AB - (AC + BC)) < epsilon ||
            Math.abs(AC - (AB + BC)) < epsilon ||
            Math.abs(BC - (AB + AC)) < epsilon);
    };
    // 8️ Vérifier si les trois points forment un triangle isocèle
    TroisPoints.prototype.estIsocele = function () {
        var AB = this.premier.calculerDistance(this.deuxieme);
        var AC = this.premier.calculerDistance(this.troisieme);
        var BC = this.deuxieme.calculerDistance(this.troisieme);
        // Un triangle est isocèle si deux côtés ont la même longueur
        var epsilon = 1e-9;
        return (Math.abs(AB - AC) < epsilon ||
            Math.abs(AB - BC) < epsilon ||
            Math.abs(AC - BC) < epsilon);
    };
    return TroisPoints;
}());
exports.TroisPoints = TroisPoints;
