import { Personne } from "./Personne";
import { Adresse } from "./Adresse";

// 2️ Classe ListePersonnes
// Contient un tableau de Personne
export class ListePersonnes {
  private personnes: Personne[];

  // Constructeur avec un tableau de personnes
  constructor(personnes: Personne[]) {
    this.personnes = personnes;
  }

  // Getters et Setters
  public getPersonnes(): Personne[] {
    return this.personnes;
  }

  public setPersonnes(personnes: Personne[]): void {
    this.personnes = personnes;
  }

  // 3️ Chercher une personne par nom
  public findByNom(s: string): Personne | null {
    // On parcourt toutes les personnes
    for (const p of this.personnes) {
      if (p.getNom() === s) {
        return p; // On retourne la première correspondance
      }
    }
    return null; // Si aucune trouvée
  }

  // 4️ Vérifier si une personne a au moins une adresse avec le code postal donné
  public findByCodePostal(cp: string): boolean {
    for (const p of this.personnes) {
      for (const a of p.getAdresses()) {
        if (a.getCodePostal() === cp) {
          return true; // Trouvé !
        }
      }
    }
    return false; // Rien trouvé
  }

  // 5️ Compter le nombre de personnes vivant dans une ville donnée
  public countPersonneVille(ville: string): number {
    let compteur = 0;
    for (const p of this.personnes) {
      for (const a of p.getAdresses()) {
        if (a.getVille().toLowerCase() === ville.toLowerCase()) {
          compteur++;
          break; // On compte une seule fois par personne
        }
      }
    }
    return compteur;
  }

  // 6️ Modifier le nom d’une personne (oldNom → newNom)
  public editPersonneNom(oldNom: string, newNom: string): void {
    for (const p of this.personnes) {
      if (p.getNom() === oldNom) {
        p.setNom(newNom);
      }
    }
  }

  // 7️ Modifier la ville des personnes ayant un nom donné
  public editPersonneVille(nom: string, newVille: string): void {
    for (const p of this.personnes) {
      if (p.getNom() === nom) {
        const adresses = p.getAdresses();
        for (const a of adresses) {
          a.setVille(newVille);
        }
      }
    }
  }

  // Méthode pratique pour tout afficher
  public afficherListe(): void {
    console.log("=== Liste des personnes ===");
    for (const p of this.personnes) {
      console.log(p.toString());
    }
  }
}
