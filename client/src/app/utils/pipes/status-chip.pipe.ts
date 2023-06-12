import {Pipe, PipeTransform} from '@angular/core';
import {ThemePalette} from "@angular/material/core";

@Pipe({
  name: 'statusChip'
})
export class StatusChipPipe implements PipeTransform {

  transform(value: string): ThemePalette {
    switch (value) {
      case 'ACTIVE':
        return 'primary'
      case 'DELAYED':
        return 'warn'
      default:
        return 'accent'
    }
  }
}
