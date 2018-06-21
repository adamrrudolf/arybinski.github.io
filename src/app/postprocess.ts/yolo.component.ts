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
    const model = await downloadModel();
    const inputImage = webcam.capture();

    const boxes = await yolo(inputImage, model);

    boxes.forEach(box => {
      const {
        top, left, bottom, right, classProb, className,
      } = box;

      drawRect(left, top, right-left, bottom-top, `${className} ${classProb}`)
    });
  }

}
