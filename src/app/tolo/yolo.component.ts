import { Component, OnInit } from '@angular/core';

import yolo, { downloadModel } from 'tfjs-yolo-tiny';



@Component({
  selector: 'app-yolo',
  templateUrl: './yolo.component.html',
  styleUrls: ['./yolo.component.scss']
})
export class YoloComponent implements OnInit {

  constructor() { }

  async ngOnInit() {
    };
  }
