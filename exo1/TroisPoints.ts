import { Point } from "./Point";

export class TroisPoints {
  // 6️ Attributs privés de type Point
  private premier: Point;
  private deuxieme: Point;
  private troisieme: Point;

  // Constructeur avec trois paramètres
  constructor(premier: Point, deuxieme: Point, troisieme: Point) {
    this.premier = premier;
    this.deuxieme = deuxieme;
    this.troisieme = troisieme;
  }

  // Getters / Setters pour les trois points
  public getPremier(): Point {
    return this.premier;
  }

  public setPremier(p: Point): void {
    this.premier = p;
  }

  public getDeuxieme(): Point {
    return this.deuxieme;
  }

  public setDeuxieme(p: Point): void {
    this.deuxieme = p;
  }

  public getTroisieme(): Point {
    return this.troisieme;
  }

  public setTroisieme(p: Point): void {
    this.troisieme = p;
  }

  // 7️ Tester l'alignement des trois points
  public TesterAlignement(): boolean {
    const AB = this.premier.calculerDistance(this.deuxieme);
    const AC = this.premier.calculerDistance(this.troisieme);
    const BC = this.deuxieme.calculerDistance(this.troisieme);

    // Trois points A, B, C sont alignés si AB = AC + BC, AC = AB + BC, ou BC = AB + AC
    const epsilon = 1e-9; // tolérance pour les erreurs d'arrondi
    return (
      Math.abs(AB - (AC + BC)) < epsilon ||
      Math.abs(AC - (AB + BC)) < epsilon ||
      Math.abs(BC - (AB + AC)) < epsilon
    );
  }

  // 8️ Vérifier si les trois points forment un triangle isocèle
  public estIsocele(): boolean {
    const AB = this.premier.calculerDistance(this.deuxieme);
    const AC = this.premier.calculerDistance(this.troisieme);
    const BC = this.deuxieme.calculerDistance(this.troisieme);

    // Un triangle est isocèle si deux côtés ont la même longueur
    const epsilon = 1e-9;
    return (
      Math.abs(AB - AC) < epsilon ||
      Math.abs(AB - BC) < epsilon ||
      Math.abs(AC - BC) < epsilon
    );
  }
}
