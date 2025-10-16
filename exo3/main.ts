import { Adresse } from "./Adresse";
import { Personne } from "./Personne";
import { ListePersonnes } from "./ListePersonnes";

// 1️ Création de quelques adresses
const adr1 = new Adresse("10 rue de Paris", "Paris", "75000");
const adr2 = new Adresse("5 avenue du Port", "Marseille", "13000");
const adr3 = new Adresse("2 place de la Liberté", "Lyon", "69000");
const adr4 = new Adresse("8 rue du Lac", "Annecy", "74000");

// 2️ Création de personnes avec leurs adresses
const p1 = new Personne("Alice", "F", [adr1, adr4]);
const p2 = new Personne("Bob", "M", [adr2]);
const p3 = new Personne("Charlie", "M", [adr3, adr2]);

// 3️ Création de la liste des personnes
const liste = new ListePersonnes([p1, p2, p3]);

// 4️ Affichage initial
liste.afficherListe();

// 5️ Recherche par nom
console.log("\n=== Recherche par nom ===");
const found = liste.findByNom("Bob");
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
