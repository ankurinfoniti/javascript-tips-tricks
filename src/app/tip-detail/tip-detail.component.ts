import { Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Tips } from '../shared/model/tips.model';
import { tips } from '../shared/data/tips';

@Component({
  selector: 'app-tip-detail',
  imports: [RouterLink],
  templateUrl: './tip-detail.component.html',
  styleUrl: './tip-detail.component.css',
})
export class TipDetailComponent {
  @Input() slug!: string;
  tip?: Tips;

  ngOnInit() {
    this.tip = tips.find((t) => t.slug === this.slug);
  }
}
