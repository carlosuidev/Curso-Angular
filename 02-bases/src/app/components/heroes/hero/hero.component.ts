import { Component } from '@angular/core'


@Component({
    selector: 'app-heroes-hero',
    templateUrl: './hero.component.html'
})
export class HeroComponent {
    public name: string = 'IronMan'
    public age: number = 40

    get capitalizeName(): string {
        return this.name.toUpperCase()
    } 

    getName(): string{
      return `${this.name} - ${this.age}`;
    }

    changeName(): void{
      this.name = 'Spider-Man';
    }

    changeAge(): void{
      this.age = 25;
    }
}