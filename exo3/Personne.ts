import { Adresse } from "./Adresse";

// 1️ Classe Personne
// Chaque personne contient :
// - un nom
// - un sexe ("M" ou "F")
// - un tableau d’adresses
export class Personne {
  private nom: string;
  private sexe: string;
  private adresses: Adresse[];

  // Constructeur avec 3 paramètres
  constructor(nom: string, sexe: string, adresses: Adresse[]) {
    this.nom = nom;
    this.sexe = sexe;
    this.adresses = adresses;
  }

  // Getters / Setters
  public getNom(): string {
    return this.nom;
  }

  public setNom(nom: string): void {
    this.nom = nom;
  }

  public getSexe(): string {
    return this.sexe;
  }

  public setSexe(sexe: string): void {
    this.sexe = sexe;
  }

  public getAdresses(): Adresse[] {
    return this.adresses;
  }

  public setAdresses(adresses: Adresse[]): void {
    this.adresses = adresses;
  }

  // Méthode utilitaire : afficher une personne et ses adresses
  public toString(): string {
    const adressesStr = this.adresses.map((a) => a.toString()).join(" | ");
    return `${this.nom} (${this.sexe}) -> ${adressesStr}`;
  }
}
