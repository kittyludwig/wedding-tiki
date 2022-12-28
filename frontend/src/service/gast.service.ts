import { Injectable } from '@angular/core';
import {Gast} from "../model/Gast";
import {GASTEN} from "../model/Gast-mock";
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GastService {
  private gastenUrl: string;

  constructor(private messageService: MessageService,
              private httpClient: HttpClient) {
    this.gastenUrl = 'http://localhost:8080/users'
  }

  getGast(id: number): Observable<Gast> {
    // For now, assume that a gast with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const gast = GASTEN.find(g => g.id === id)!;
    this.log(`fetched gast id=${id}`);
    return of(gast);
  }

  getGastByUniekeCode(uniekeCode: string): Observable<Gast> {
    const gast = this.httpClient.get<Gast>('http://localhost:8080/user/' + uniekeCode)
    this.log(`fetched gast id=${uniekeCode}`);
    return gast;
  }

  getGasten(): Observable<Gast[]> {
    const gasten = this.httpClient.get<Gast[]>(this.gastenUrl)
    this.log('Gast is opgehaald')
    return gasten;
  }

  save(gast: Gast) {
    return this.httpClient.post<Gast>(this.gastenUrl, gast);
  }

  private log(message: string) {
    this.messageService.add(`GastService: ${message}`);
  }
}
