import { Component } from '@angular/core'


@Component({
    selector: 'app-counter',
    template: `
        <h1>{{ title }}</h1>

        <p>El contador está a <strong>{{ counter }}</strong></p>

        <button (click)="increase()">+1</button>
        <button (click)="decrease()">-1</button>
        <button (click)="reset(10)">Reset</button>
    `
})
export class CounterComponent {
    public title: string = 'Contador App';
    public counter: number = 10;

    increase():void {
        this.counter = this.counter + 1;
    }

    decrease():void {
        this.counter = this.counter - 1;
    }

    reset(n:number){
        this.counter = n;
    }
}