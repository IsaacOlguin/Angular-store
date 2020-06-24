import { AbstractControl } from '@angular/forms';

export class Validador {
    static isPriceValid(control: AbstractControl) {
        const value = control.value;
        // console.log(value);
        if ( 0 < value && value <= 100000){
            return null;
        } else {
            return {
                price_invalid : true
            };
        }
    }
}
