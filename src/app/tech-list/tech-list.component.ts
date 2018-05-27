import { Component, OnInit } from '@angular/core';
import { TechListService } from './tech-list.service';

@Component({
  selector: 'app-tech-list',
  templateUrl: './tech-list.component.html',
  styleUrls: ['./tech-list.component.css']
})
export class TechListComponent implements OnInit {

  constructor(private _techListService: TechListService) { }
  rep = [1, 2, 3, 4];
  ngOnInit() {
  }

}
