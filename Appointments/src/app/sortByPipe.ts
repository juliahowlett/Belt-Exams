import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({name: "sortBy",  pure: false})

@Injectable()
export class sortByPipe implements PipeTransform {

  transform(array: Array<string>, args: string): Array<string> {
    array.sort((a: any, b: any) => {
	    if ( a[args] < b[args] ){
	    	return -1;
	    }else if( a[args] > b[args] ){
	        return 1;
	    }else{
	    	return 0;	
	    }
    });
    return array;
  }
}