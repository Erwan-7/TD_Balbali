import { Stagiaire } from "./Stagiaire";

// 5️ Classe Formation
// Contient :
// - un intitulé (string)
// - un nombre de jours (number)
// - une liste de stagiaires (Stagiaire[])
export class Formation {
  private intitule: string;
  private nbrJours: number;
  private stagiaires: Stagiaire[];

  // Constructeur de la classe Formation
  constructor(intitule: string, nbrJours: number, stagiaires: Stagiaire[]) {
    this.intitule = intitule;
    this.nbrJours = nbrJours;
    this.stagiaires = stagiaires;
  }

  // Getters / Setters (6️)
  public getIntitule(): string {
    return this.intitule;
  }

  public setIntitule(intitule: string): void {
    this.intitule = intitule;
  }

  public getNbrJours(): number {
    return this.nbrJours;
  }

  public setNbrJours(nbrJours: number): void {
    this.nbrJours = nbrJours;
  }

  public getStagiaires(): Stagiaire[] {
    return this.stagiaires;
  }

  public setStagiaires(stagiaires: Stagiaire[]): void {
    this.stagiaires = stagiaires;
  }

  // 6️ Calculer la moyenne générale de la formation
  // (moyenne des moyennes de tous les stagiaires)
  public calculerMoyenneFormation(): number {
    if (this.stagiaires.length === 0) return 0;

    let total = 0;
    for (const s of this.stagiaires) {
      total += s.calculerMoyenne();
    }
    return total / this.stagiaires.length;
  }

  // 7️ Trouver l’indice du stagiaire ayant la meilleure moyenne
  public getIndexMax(): number {
    if (this.stagiaires.length === 0) return -1;

    let meilleurIndex = 0;
    let meilleureMoyenne = this.stagiaires[0].calculerMoyenne();

    for (let i = 1; i < this.stagiaires.length; i++) {
      const moyenne = this.stagiaires[i].calculerMoyenne();
      if (moyenne > meilleureMoyenne) {
        meilleureMoyenne = moyenne;
        meilleurIndex = i;
      }
    }
    return meilleurIndex;
  }

  // 8️ Afficher le nom du meilleur stagiaire
  public afficherNomMax(): void {
    const index = this.getIndexMax();
    if (index === -1) {
      console.log("Aucun stagiaire trouvé !");
      return;
    }
    console.log(`Le meilleur stagiaire est : ${this.stagiaires[index].getNom()}`);
  }

  // 9️ Afficher la note minimale du meilleur stagiaire
  public afficherMinMax(): void {
    const index = this.getIndexMax();
    if (index === -1) return;

    const meilleur = this.stagiaires[index];
    console.log(`Note minimale du meilleur stagiaire (${meilleur.getNom()}) : ${meilleur.trouverMin()}`);
  }

  // 10 Trouver et afficher la moyenne d’un stagiaire selon son nom
  public trouverMoyenneParNom(nom: string): void {
    //  version sans .find() → compatible toutes versions TS
    let stagTrouve: Stagiaire | undefined = undefined;
    for (const s of this.stagiaires) {
      if (s.getNom() === nom) {
        stagTrouve = s;
        break;
      }
    }

    if (stagTrouve) {
      console.log(`La moyenne de ${nom} est : ${stagTrouve.calculerMoyenne().toFixed(2)}`);
    } else {
      console.log(`Aucun stagiaire trouvé avec le nom "${nom}".`);
    }
  }
}
