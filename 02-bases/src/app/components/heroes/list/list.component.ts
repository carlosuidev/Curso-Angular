import { Component } from '@angular/core';

@Component({
    selector: 'app-heroes-list',
    templateUrl: 'list.component.html',
})
export class ListComponent {
    public heroesDB: string[] = [
        'Spider-Man',
        'Iron Man',
        'Hulk',
        'Thor',
        'Hawkeye'
    ]

    deleteLasstHero(): void{
        this.heroesDB.pop();
    }

    restoreHeroes(): void {
        this.heroesDB = [
            'Spider-Man',
            'Iron Man',
            'Hulk',
            'Thor',
            'Hawkeye'
        ]
    }
}