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
  techs = [{
    name: 'Robotics',
    description: 'Free workshop on Robotics to build up the bacis os the robotics. First come first serve basis. Please Hurry',
    imgSrc: './../assets/images/robotics.jpg'
  }, {
    name: 'Virtual Reality',
    description: 'Virtual reality (VR) is a computer-generated scenario that simulates experience through senses and perception',
    imgSrc: './../assets/images/VR.jpg'
  }, {
    name: 'Neural Network',
    description: 'An artificial neural network is an interconnected group of nodes, akin to the vast network of neurons in a brain',
    imgSrc: './../assets/images/neuralNetwork.jpg'
  }, {
    name: 'Artificial Intelligence',
    description: 'AI is intelligence demonstrated by machines, in contrast to the natural intelligence displayed by humans',
    imgSrc: './../assets/images/AI.jpg'
  }];
  ngOnInit() {
  }

}
