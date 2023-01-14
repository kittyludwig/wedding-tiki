import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-overnachting-familie',
  templateUrl: './overnachting.component.html',
  styleUrls: ['./overnachting.component.css']
})
export class OvernachtingComponent implements OnInit {
  toonInfoFamilie: boolean;
  toonInfoOverig: boolean;

  constructor() {
    this.toonInfoFamilie = false;
    this.toonInfoOverig = true;
  }

  ngOnInit(): void {
    this.toonInfoFamilie = localStorage.getItem('token') === 'familie';
    this.toonInfoOverig = localStorage.getItem('token') !== 'familie';
  }

}
