"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stagiaire_1 = require("./Stagiaire");
var Formation_1 = require("./Formation");
// 1️ Création de quelques stagiaires avec leurs notes
var s1 = new Stagiaire_1.Stagiaire("Alice", [15, 12, 14]);
var s2 = new Stagiaire_1.Stagiaire("Bob", [10, 9, 11]);
var s3 = new Stagiaire_1.Stagiaire("Charlie", [18, 17, 19]);
// 2️ Affichage des stagiaires
console.log("=== Liste des stagiaires ===");
console.log(s1.toString());
console.log(s2.toString());
console.log(s3.toString());
// 3️ Création d’une formation avec les 3 stagiaires
var formation = new Formation_1.Formation("Développement Web", 10, [s1, s2, s3]);
// 4️ Test de la moyenne générale
console.log("\n=== Moyenne générale de la formation ===");
console.log("Moyenne formation :", formation.calculerMoyenneFormation().toFixed(2));
// 5️ Nom du meilleur stagiaire
console.log("\n=== Meilleur stagiaire ===");
formation.afficherNomMax();
// 6️ Note minimale du meilleur stagiaire
console.log("\n=== Note minimale du meilleur stagiaire ===");
formation.afficherMinMax();
// 7️ Moyenne d’un stagiaire recherché par nom
console.log("\n=== Recherche d’un stagiaire par nom ===");
formation.trouverMoyenneParNom("Alice");
formation.trouverMoyenneParNom("Bob");
formation.trouverMoyenneParNom("Zoe"); // test si non trouvé
