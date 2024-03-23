import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-key-logger',
  templateUrl: './key-logger.component.html',
  styleUrls: ['./key-logger.component.scss']
})
export class KeyLoggerComponent implements OnInit {

  /*
    static : The static property indicates whether the element we want to
    query will be available during component initialization.
  */
  @ViewChild('keyUpContainer', {static: true}) inputKeyboard: ElementRef | undefined;
  keys: string = '';

  ngOnInit(): void {
      /*
        $ sign : When we define an observable variable, we tend to append the $ sign to the
        variable name. It is a convention that we follow to identify observables in
        our code efficiently and quickly

        fromEvent : One of them is the fromEvent operator, which creates an observable from
        the DOM event of a native HTML element.
      */
      const logger$ = fromEvent<KeyboardEvent>(this.inputKeyboard?.nativeElement, 'keyup');
      logger$.subscribe(evt => this.keys += evt.key);
  }

}
