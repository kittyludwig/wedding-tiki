import { Injectable } from '@angular/core';
import {Gast} from "../model/Gast";
import {HttpClient} from "@angular/common/http";
import {RsvpDto} from "../model/RsvpDto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DieetwensService {
  private dieetwensUrl: string;

  constructor(private httpClient: HttpClient) {
    this.dieetwensUrl = 'http://localhost:8080/dieetwens'
  }

  save(dieetwens: RsvpDto): Observable<RsvpDto> {
    console.log('In service: ' + dieetwens.vegetarisch)
    return this.httpClient.post<RsvpDto>(this.dieetwensUrl, dieetwens);
  }
}
