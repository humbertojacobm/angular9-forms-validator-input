import { Injectable } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, catchError, delay} from 'rxjs/operators'

const ALTER_EGOS = ['Eric'];

@Injectable({providedIn: 'root'})
export class HeroesService{
  isAlterEgoTaken(alterEgo: string): Observable<boolean> {
    const isTaken = ALTER_EGOS.includes(alterEgo);
    return of(isTaken).pipe(delay(400));
  }
}

// interface HeroesService{
//   isAlterEgoTaken: (alterEgo: string) => Observable<boolean>;
// }

@Injectable({
  providedIn: 'root'
})
export class UniqueAlterEgoValidator implements AsyncValidator {

  constructor(private heroesService: HeroesService) { }

  validate(
    ctrl: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null>
  {
    return this.heroesService.isAlterEgoTaken(ctrl.value).pipe(
      map(isTaken => ( isTaken ? {uniqueAlterEgo: true} : null)),
      catchError(() => of(null))
    )
  }
}
