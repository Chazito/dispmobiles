import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'escribirReseña',
  standalone: true
})
export class EscribirReseñaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
