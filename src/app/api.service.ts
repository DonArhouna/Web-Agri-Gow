import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://127.0.0.1:8000/api';  // Changez cela en fonction de votre URL API

  constructor(private http: HttpClient) { }

  // Méthodes pour Localites
  getLocalites(): Observable<any> {
    return this.http.get(`${this.baseUrl}/localites/`);
  }

  getLocalite(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/localites/${id}/`);
  }

  createLocalite(localite: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/localites/`, localite);
  }

  updateLocalite(id: number, localite: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/localites/${id}/`, localite);
  }

  deleteLocalite(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/localites/${id}/`);
  }

  // Méthodes pour Utilisateurs
  getUtilisateurs(): Observable<any> {
    return this.http.get(`${this.baseUrl}/utilisateurs/`);
  }

  getUtilisateur(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/utilisateurs/${id}/`);
  }

  createUtilisateur(utilisateur: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/utilisateurs/`, utilisateur);
  }

  updateUtilisateur(id: number, utilisateur: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/utilisateurs/${id}/`, utilisateur);
  }

  deleteUtilisateur(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/utilisateurs/${id}/`);
  }

  // Méthodes pour Cooperatives
  getCooperatives(): Observable<any> {
    return this.http.get(`${this.baseUrl}/cooperatives/`);
  }

  getCooperative(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/cooperatives/${id}/`);
  }

  createCooperative(cooperative: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/cooperatives/`, cooperative);
  }

  updateCooperative(id: number, cooperative: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/cooperatives/${id}/`, cooperative);
  }

  deleteCooperative(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/cooperatives/${id}/`);
  }

  // Méthodes pour Partenaires
  getPartenaires(): Observable<any> {
    return this.http.get(`${this.baseUrl}/partenaires/`);
  }

  getPartenaire(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/partenaires/${id}/`);
  }

  createPartenaire(partenaire: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/partenaires/`, partenaire);
  }

  updatePartenaire(id: number, partenaire: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/partenaires/${id}/`, partenaire);
  }

  deletePartenaire(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/partenaires/${id}/`);
  }
}
