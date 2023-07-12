import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat'
})
export class CurrencyFormatPipe implements PipeTransform {

  transform(value: string): string {
    if (value === null || value === undefined) {
      return '';
    }
    const currencyCode  = 'ARS';
    let formattedValue = parseFloat( value).toLocaleString('es-AR', { style: 'currency', currency: currencyCode });

    return formattedValue;
  }

}
