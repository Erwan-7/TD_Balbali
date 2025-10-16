import { Point } from "./Point";
import { TroisPoints } from "./TroisPoints";

// Création de quelques points pour les tests
const A = new Point(0, 0);
const B = new Point(3, 4);
const C = new Point(6, 8);

//  Test 1 : Affichage des points
console.log(" Test 1 : Affichage des points");
console.log("A =", A.toString());
console.log("B =", B.toString());
console.log("C =", C.toString());

//  Test 2 : Distance entre deux points
console.log("\n Test 2 : Distances");
console.log("Distance (A,B) =", A.calculerDistance(B));
console.log("Distance (statique A,B) =", Point.distance(0, 0, 3, 4));

//  Test 3 : Calcul du milieu
console.log("\n Test 3 : Milieu du segment AB");
const M = A.calculerMilieu(B);
console.log("Milieu AB =", M.toString());

//  Test 4 : Vérification de l’alignement
console.log("\n Test 4 : Alignement des points A, B et C");
const trio1 = new TroisPoints(A, B, C);
console.log("Les points A, B et C sont-ils alignés ?", trio1.TesterAlignement());

//  Test 5 : Vérification isocèle
console.log("\n Test 5 : Triangle isocèle");
const D = new Point(0, 0);
const E = new Point(4, 0);
const F = new Point(2, 3.46); // Triangle isocèle (environ)
const trio2 = new TroisPoints(D, E, F);
console.log("Les points D, E et F forment-ils un triangle isocèle ?", trio2.estIsocele());
