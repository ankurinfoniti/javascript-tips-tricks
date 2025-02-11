import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import AOS from 'aos';

import { tips } from '../shared/data/tips';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  tips = tips;

  ngOnInit(): void {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true,
    });
  }
}
