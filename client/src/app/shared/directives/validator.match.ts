/* tslint:disable */
// taken from https://github.com/NetanelBasal/ngx-text-equality-validator
import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { Input } from '@angular/core';

@Directive({
  selector: '[validateEqualTo][ngModel],[validateEqualTo][formControlName]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: forwardRef(() => TextEqualityValidatorDirective), multi: true}
  ]
})
export class TextEqualityValidatorDirective implements Validator {
  @Input() validateEqualTo: string;
  oldVal: string;
  private _onChange: () => void;

  registerOnValidatorChange( fn: () => void ) {
    this._onChange = fn;
  }

  validate( c: AbstractControl ) {
    let passwordVal = c.value;
    let repeatEle = c.root.get(this.validateEqualTo);
    if ( repeatEle ) {
      this.oldVal = repeatEle.value;
    }
    c.root.valueChanges.subscribe(changes => {
      if ( this.oldVal !== changes[this.validateEqualTo] ) {
        this._onChange();
      }
    });
    return this.checkEquality(passwordVal, repeatEle);

  }

  checkEquality( passwordVal: string, repeatEle: any ) {
    if ( repeatEle && passwordVal !== repeatEle.value ) return {
      validateEqual: true
    };
    return null;
  }

}
