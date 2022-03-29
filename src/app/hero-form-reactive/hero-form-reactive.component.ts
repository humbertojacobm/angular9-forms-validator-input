import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { forbiddenNameValidator, emailValidator } from '../forbidden-name.directive';

class Hero{
  name: string;
  alterEgo: string;
  power: string;
}

@Component({
  selector: 'app-hero-form-reactive',
  templateUrl: './hero-form-reactive.component.html',
  styleUrls: ['./hero-form-reactive.component.css']
})
export class HeroFormReactiveComponent implements OnInit {
  heroForm: FormGroup;
  hero: Hero;
  get name() { return this.heroForm.get('name'); }
  get power() { return this.heroForm.get('power'); }
  get alterEgo() { return this.heroForm.get('alterEgo'); }

  constructor(private fb: FormBuilder) {
    this.hero= new Hero();
    this.hero.name="humberto",
    this.hero.alterEgo="superman",
    this.hero.power="k"
  }

  ngOnInit() {
    this.heroForm = this.fb.group({
      name : [this.hero.name,
               [
                 Validators.required,
                 Validators.minLength(4),
                 forbiddenNameValidator(/bob/i)
               ]
              ],
      alterEgo: [this.hero.alterEgo,
                 [
                  emailValidator(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i)
                 ]
                ],
      power: [this.hero.power, Validators.required]
    })
  }

}
