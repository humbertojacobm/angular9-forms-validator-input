import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { forbiddenNameValidator, emailValidator } from '../forbidden-name.directive';
import { identityReveleadValidator } from '../identity-revealed.directive';
import { UniqueAlterEgoValidator } from '../unique-alter-ego-validator.service';

class Hero{
  name: string;
  alterEgo: string;
  power: string;
}

@Component({
  selector: 'app-hero-cross-field',
  templateUrl: './hero-cross-field.component.html',
  styleUrls: ['./hero-cross-field.component.css']
})
export class HeroCrossFieldComponent implements OnInit {

  heroForm: FormGroup;
  hero: Hero;
  get name() { return this.heroForm.get('name'); }
  get power() { return this.heroForm.get('power'); }
  get alterEgo() { return this.heroForm.get('alterEgo'); }

  constructor(private fb: FormBuilder,
    private alterEgoValidator: UniqueAlterEgoValidator
    ) {
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
                 {asyncValidators: [this.alterEgoValidator.validate.bind(this.alterEgoValidator)],
                  updateOn: 'blur'},
                 [
                  Validators.required,
                  Validators.minLength(4),
                  forbiddenNameValidator(/bob/i),
                 ]
                ],
      power: [this.hero.power, Validators.required]
    }, {
      validators: identityReveleadValidator
    })
  }

}
