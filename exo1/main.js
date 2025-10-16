"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Point_1 = require("./Point");
var TroisPoints_1 = require("./TroisPoints");
// Création de quelques points pour les tests
var A = new Point_1.Point(0, 0);
var B = new Point_1.Point(3, 4);
var C = new Point_1.Point(6, 8);
//  Test 1 : Affichage des points
console.log(" Test 1 : Affichage des points");
console.log("A =", A.toString());
console.log("B =", B.toString());
console.log("C =", C.toString());
//  Test 2 : Distance entre deux points
console.log("\n Test 2 : Distances");
console.log("Distance (A,B) =", A.calculerDistance(B));
console.log("Distance (statique A,B) =", Point_1.Point.distance(0, 0, 3, 4));
//  Test 3 : Calcul du milieu
console.log("\n Test 3 : Milieu du segment AB");
var M = A.calculerMilieu(B);
console.log("Milieu AB =", M.toString());
//  Test 4 : Vérification de l’alignement
console.log("\n Test 4 : Alignement des points A, B et C");
var trio1 = new TroisPoints_1.TroisPoints(A, B, C);
console.log("Les points A, B et C sont-ils alignés ?", trio1.TesterAlignement());
//  Test 5 : Vérification isocèle
console.log("\n Test 5 : Triangle isocèle");
var D = new Point_1.Point(0, 0);
var E = new Point_1.Point(4, 0);
var F = new Point_1.Point(2, 3.46); // Triangle isocèle (environ)
var trio2 = new TroisPoints_1.TroisPoints(D, E, F);
console.log("Les points D, E et F forment-ils un triangle isocèle ?", trio2.estIsocele());
