import { Pipe, PipeTransform } from '@angular/core';
import {FlightDelay} from "../../models/flight.model";

@Pipe({
  name: 'convertDelay'
})
export class ConvertDelayPipe implements PipeTransform {

  transform(delay: FlightDelay): string {
    let stringDelay = ''
    if (delay.days !== undefined) {
      stringDelay += `${delay.days} days `
    }
    if (delay.hours !== undefined) {
      stringDelay += `${delay.hours} hours `
    }
    if (delay.minutes !== undefined) {
      stringDelay += `${delay.minutes} minutes `
    }
    return stringDelay;
  }

}
