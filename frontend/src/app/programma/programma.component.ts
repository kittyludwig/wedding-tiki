import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-programma-dag',
  templateUrl: './programma.component.html',
  styleUrls: ['./programma.component.css']
})
export class ProgrammaComponent implements OnInit {
  toonInfoDag: boolean;
  toonInfoAvond: boolean;

  constructor() {
    this.toonInfoDag = false;
    this.toonInfoAvond = true;
  }

  ngOnInit(): void {
    this.toonInfoDag = localStorage.getItem('token') === 'familie' || localStorage.getItem('token') === 'daggast';
    this.toonInfoAvond = localStorage.getItem('token') === 'avondgast';
  }
}
