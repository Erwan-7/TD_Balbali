"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Adresse_1 = require("./Adresse");
var Personne_1 = require("./Personne");
var ListePersonnes_1 = require("./ListePersonnes");
// 1️ Création de quelques adresses
var adr1 = new Adresse_1.Adresse("10 rue de Paris", "Paris", "75000");
var adr2 = new Adresse_1.Adresse("5 avenue du Port", "Marseille", "13000");
var adr3 = new Adresse_1.Adresse("2 place de la Liberté", "Lyon", "69000");
var adr4 = new Adresse_1.Adresse("8 rue du Lac", "Annecy", "74000");
// 2️ Création de personnes avec leurs adresses
var p1 = new Personne_1.Personne("Alice", "F", [adr1, adr4]);
var p2 = new Personne_1.Personne("Bob", "M", [adr2]);
var p3 = new Personne_1.Personne("Charlie", "M", [adr3, adr2]);
// 3️ Création de la liste des personnes
var liste = new ListePersonnes_1.ListePersonnes([p1, p2, p3]);
// 4️ Affichage initial
liste.afficherListe();
// 5️ Recherche par nom
console.log("\n=== Recherche par nom ===");
var found = liste.findByNom("Bob");
console.log(found ? found.toString() : "Aucune personne trouvée.");
// 6️ Recherche par code postal
console.log("\n=== Recherche par code postal ===");
console.log("Existe-t-il une personne avec le code postal 13000 ?", liste.findByCodePostal("13000"));
// 7️ Compter les personnes d'une ville
console.log("\n=== Compter personnes par ville ===");
console.log("Nombre de personnes à Marseille :", liste.countPersonneVille("Marseille"));
// 8️ Modifier un nom
console.log("\n=== Modification de nom ===");
liste.editPersonneNom("Alice", "Alicia");
liste.afficherListe();
// 9️ Modifier la ville d’une personne donnée
console.log("\n=== Modification de ville ===");
liste.editPersonneVille("Alicia", "Toulouse");
liste.afficherListe();
