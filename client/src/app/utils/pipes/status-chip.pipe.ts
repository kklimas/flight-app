import {Pipe, PipeTransform} from '@angular/core';
import {ThemePalette} from "@angular/material/core";

@Pipe({
  name: 'statusChip'
})
export class StatusChipPipe implements PipeTransform {

  transform(value: string): ThemePalette {
    switch (value) {
      case 'ACTIVE':
      case 'NEW':
      case 'INCOME':
        return 'primary'
      case 'DELAYED':
      case 'PAID':
      case 'OUTCOME':
        return 'warn'
      default:
        return 'accent'
    }
  }
}
