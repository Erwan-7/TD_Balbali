// 1️ Classe Adresse
// Chaque adresse contient :
// - une rue
// - une ville
// - un code postal

export class Adresse {
  private rue: string;
  private ville: string;
  private codePostal: string;

  // Constructeur : initialise les trois attributs
  constructor(rue: string, ville: string, codePostal: string) {
    this.rue = rue;
    this.ville = ville;
    this.codePostal = codePostal;
  }

  // Getters et Setters
  public getRue(): string {
    return this.rue;
  }

  public setRue(rue: string): void {
    this.rue = rue;
  }

  public getVille(): string {
    return this.ville;
  }

  public setVille(ville: string): void {
    this.ville = ville;
  }

  public getCodePostal(): string {
    return this.codePostal;
  }

  public setCodePostal(cp: string): void {
    this.codePostal = cp;
  }

  // Méthode pratique pour afficher une adresse
  public toString(): string {
    return `${this.rue}, ${this.ville} (${this.codePostal})`;
  }
}
