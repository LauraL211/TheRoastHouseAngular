import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrl: './home-list.component.css'
})

export class HomeListComponent implements OnInit{
 name = "Lola Bunny";
 constructor() {}
 ngOnInit() {}
}
