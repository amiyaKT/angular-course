import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
})
export class ConvertPipe implements PipeTransform {
  transform(value: number, unit: String): number | Error {
    if (!value) {
      return null;
    }

    if (!unit) {
      unit = 'km';
    }

    switch (unit) {
      case 'km':
        return value * 1.60934;
      case 'm':
        return value * 1.60934 * 1000;
      default:
        return new Error('Target unit not supported!');
    }
  }
}
