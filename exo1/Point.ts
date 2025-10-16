// 1️ Définition de la classe Point avec deux attributs privés : abs et ord
export class Point {
  // Attributs privés (coordonnées du point)
  private abs: number;
  private ord: number;

  // Constructeur avec deux paramètres
  constructor(abs: number, ord: number) {
    this.abs = abs;
    this.ord = ord;
  }

  // 2️ Getters et setters pour chaque attribut
  public getAbs(): number {
    return this.abs;
  }

  public setAbs(value: number): void {
    this.abs = value;
  }

  public getOrd(): number {
    return this.ord;
  }

  public setOrd(value: number): void {
    this.ord = value;
  }

  // 3️ Méthode pour calculer la distance entre ce point (this) et un autre point p
  public calculerDistance(p: Point): number {
    // Formule : sqrt((x1 - x2)^2 + (y1 - y2)^2)
    const dx = this.abs - p.getAbs();
    const dy = this.ord - p.getOrd();
    return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
  }

  // 4️ Méthode statique pour calculer la distance entre deux points donnés
  public static distance(x1: number, y1: number, x2: number, y2: number): number {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
  }

  // 5️ Méthode pour calculer le milieu du segment entre ce point et un autre
  public calculerMilieu(p: Point): Point {
    const xM = (this.abs + p.getAbs()) / 2;
    const yM = (this.ord + p.getOrd()) / 2;
    // On retourne un nouvel objet Point représentant le milieu
    return new Point(xM, yM);
  }

  // Méthode utilitaire pour afficher facilement un point
  public toString(): string {
    return `(${this.abs}, ${this.ord})`;
  }
}
