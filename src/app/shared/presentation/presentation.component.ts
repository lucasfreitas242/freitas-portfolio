import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})

export class PresentationComponent implements OnInit{

  public isMobile: boolean = false;
  
  constructor() {}

  ngOnInit(): void {
    if (window.innerWidth <= 767) {
      this.isMobile = true
    }
  }

}
