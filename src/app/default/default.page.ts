import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default',
  templateUrl: './default.page.html',
  styleUrls: ['./default.page.scss'],
})
export class DefaultPage implements OnInit {

  constructor(public router:Router) {
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 2400);
  }

  ngOnInit() {
  }

}
