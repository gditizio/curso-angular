import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  src_img: string = "https://images.pexels.com/photos/17481292/pexels-photo-17481292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

}
