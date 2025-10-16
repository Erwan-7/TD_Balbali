"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListePersonnes = void 0;
// 2️ Classe ListePersonnes
// Contient un tableau de Personne
var ListePersonnes = /** @class */ (function () {
    // Constructeur avec un tableau de personnes
    function ListePersonnes(personnes) {
        this.personnes = personnes;
    }
    // Getters et Setters
    ListePersonnes.prototype.getPersonnes = function () {
        return this.personnes;
    };
    ListePersonnes.prototype.setPersonnes = function (personnes) {
        this.personnes = personnes;
    };
    // 3️ Chercher une personne par nom
    ListePersonnes.prototype.findByNom = function (s) {
        // On parcourt toutes les personnes
        for (var _i = 0, _a = this.personnes; _i < _a.length; _i++) {
            var p = _a[_i];
            if (p.getNom() === s) {
                return p; // On retourne la première correspondance
            }
        }
        return null; // Si aucune trouvée
    };
    // 4️ Vérifier si une personne a au moins une adresse avec le code postal donné
    ListePersonnes.prototype.findByCodePostal = function (cp) {
        for (var _i = 0, _a = this.personnes; _i < _a.length; _i++) {
            var p = _a[_i];
            for (var _b = 0, _c = p.getAdresses(); _b < _c.length; _b++) {
                var a = _c[_b];
                if (a.getCodePostal() === cp) {
                    return true; // Trouvé !
                }
            }
        }
        return false; // Rien trouvé
    };
    // 5️ Compter le nombre de personnes vivant dans une ville donnée
    ListePersonnes.prototype.countPersonneVille = function (ville) {
        var compteur = 0;
        for (var _i = 0, _a = this.personnes; _i < _a.length; _i++) {
            var p = _a[_i];
            for (var _b = 0, _c = p.getAdresses(); _b < _c.length; _b++) {
                var a = _c[_b];
                if (a.getVille().toLowerCase() === ville.toLowerCase()) {
                    compteur++;
                    break; // On compte une seule fois par personne
                }
            }
        }
        return compteur;
    };
    // 6️ Modifier le nom d’une personne (oldNom → newNom)
    ListePersonnes.prototype.editPersonneNom = function (oldNom, newNom) {
        for (var _i = 0, _a = this.personnes; _i < _a.length; _i++) {
            var p = _a[_i];
            if (p.getNom() === oldNom) {
                p.setNom(newNom);
            }
        }
    };
    // 7️ Modifier la ville des personnes ayant un nom donné
    ListePersonnes.prototype.editPersonneVille = function (nom, newVille) {
        for (var _i = 0, _a = this.personnes; _i < _a.length; _i++) {
            var p = _a[_i];
            if (p.getNom() === nom) {
                var adresses = p.getAdresses();
                for (var _b = 0, adresses_1 = adresses; _b < adresses_1.length; _b++) {
                    var a = adresses_1[_b];
                    a.setVille(newVille);
                }
            }
        }
    };
    // Méthode pratique pour tout afficher
    ListePersonnes.prototype.afficherListe = function () {
        console.log("=== Liste des personnes ===");
        for (var _i = 0, _a = this.personnes; _i < _a.length; _i++) {
            var p = _a[_i];
            console.log(p.toString());
        }
    };
    return ListePersonnes;
}());
exports.ListePersonnes = ListePersonnes;
