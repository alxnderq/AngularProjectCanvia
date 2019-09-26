import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-header-bar-back',
  templateUrl: './header-bar-back.component.html',
  styleUrls: ['./header-bar-back.component.scss']
})
export class HeaderBarBackComponent implements OnInit {

  @Input() title = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }

}
