import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demo',
})
export class DemoPipe implements PipeTransform {
  transform(n: number, extension: string = 'Kilograms') {
        return (n * 1000).toFixed(2) + extension;
    }
}
