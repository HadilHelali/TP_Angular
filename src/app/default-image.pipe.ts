import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if (value) value = value.trim();
    if (value)
    {return value}
    else{return 'default_image.jpg'}
  }

}
