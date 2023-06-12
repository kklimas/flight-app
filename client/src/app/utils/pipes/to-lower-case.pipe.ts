import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toLowerCase'
})
export class ToLowerCasePipe implements PipeTransform {

  transform(value: string): string {
    if (value === undefined || value === null) {
      return '';
    }
    return value[0] + value.slice(1, value.length).toLowerCase();
  }

}
