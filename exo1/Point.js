"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
// 1️ Définition de la classe Point avec deux attributs privés : abs et ord
var Point = /** @class */ (function () {
    // Constructeur avec deux paramètres
    function Point(abs, ord) {
        this.abs = abs;
        this.ord = ord;
    }
    // 2️ Getters et setters pour chaque attribut
    Point.prototype.getAbs = function () {
        return this.abs;
    };
    Point.prototype.setAbs = function (value) {
        this.abs = value;
    };
    Point.prototype.getOrd = function () {
        return this.ord;
    };
    Point.prototype.setOrd = function (value) {
        this.ord = value;
    };
    // 3️ Méthode pour calculer la distance entre ce point (this) et un autre point p
    Point.prototype.calculerDistance = function (p) {
        // Formule : sqrt((x1 - x2)^2 + (y1 - y2)^2)
        var dx = this.abs - p.getAbs();
        var dy = this.ord - p.getOrd();
        return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    };
    // 4️ Méthode statique pour calculer la distance entre deux points donnés
    Point.distance = function (x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    };
    // 5️ Méthode pour calculer le milieu du segment entre ce point et un autre
    Point.prototype.calculerMilieu = function (p) {
        var xM = (this.abs + p.getAbs()) / 2;
        var yM = (this.ord + p.getOrd()) / 2;
        // On retourne un nouvel objet Point représentant le milieu
        return new Point(xM, yM);
    };
    // Méthode utilitaire pour afficher facilement un point
    Point.prototype.toString = function () {
        return "(".concat(this.abs, ", ").concat(this.ord, ")");
    };
    return Point;
}());
exports.Point = Point;
