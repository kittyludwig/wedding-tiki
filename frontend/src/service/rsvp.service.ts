import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RsvpDto} from "../model/RsvpDto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RsvpService {
  private readonly rsvpUrl: string;

  constructor(private httpClient: HttpClient) {
    this.rsvpUrl = 'http://localhost:8080/dieetwens'
  }

  save(rsvpDto: RsvpDto): Observable<RsvpDto> {
    console.log('In service: ' + rsvpDto.vegetarisch)
    return this.httpClient.post<RsvpDto>(this.rsvpUrl, rsvpDto);
  }
}
