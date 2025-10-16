// 1️ Création de la classe Stagiaire
// Elle possède :
// - un nom (string)
// - une liste de notes (number[])
export class Stagiaire {
  private nom: string;         // Nom du stagiaire
  private notes: number[];     // Tableau de notes

  // Constructeur : on donne le nom et le tableau de notes dès la création
  constructor(nom: string, notes: number[]) {
    this.nom = nom;
    this.notes = notes;
  }

  // 2️ Getters et setters
  public getNom(): string {
    return this.nom;
  }

  public setNom(nom: string): void {
    this.nom = nom;
  }

  public getNotes(): number[] {
    return this.notes;
  }

  public setNotes(notes: number[]): void {
    this.notes = notes;
  }

  // 3️ Calcul de la moyenne des notes du stagiaire
  public calculerMoyenne(): number {
    // On vérifie d’abord qu’il y a des notes
    if (this.notes.length === 0) return 0;

    // On additionne toutes les notes puis on divise par le nombre de notes
    const somme = this.notes.reduce((acc, note) => acc + note, 0);
    return somme / this.notes.length;
  }

  // 4️ Trouver la note maximale du stagiaire
  public trouverMax(): number {
    // Math.max(...tableau) donne la plus grande valeur
    return Math.max(...this.notes);
  }

  // 4️ Trouver la note minimale du stagiaire
  public trouverMin(): number {
    // Math.min(...tableau) donne la plus petite valeur
    return Math.min(...this.notes);
  }

  // Méthode pratique pour afficher un stagiaire
  public toString(): string {
    return `${this.nom} - Notes: [${this.notes.join(", ")}] - Moyenne: ${this.calculerMoyenne().toFixed(2)}`;
  }
}
