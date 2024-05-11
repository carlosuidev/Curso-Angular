l# NOTAS DE ANGULAR CURSO

## Generar:

- App > v17 -> `ng new mi_proyecto`
- App < v17 -> `ng new mi_proyecto --no-standalone`
- Componentes -> `ng g c mi_componente`
- Módulo -> `ng g m mi_modulo`
- Pipe -> `ng g p mi_pipe`


## Estructura de un Componente:

mi-componente.component.ts
```ts
import { Component } from '@angular/core';

@Component({
  selector: 'dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent{
  
}
export class AppModule { }
```

mi-componente.component.html
```html
<mi-componente></mi-componente>
```

## Estructura de un Módulo (No Standalone, para versiones anteriores a la 17)

mi-modulo.module.ts
```ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ...
  ],
  exports: [
    ...
  ],
  imports: [
    CommonModule,
  ]
})
export class MiModulo { }
```

Ejemplo para guardar páginas (componente) en un módulo que se usen en el `app.component.html`:
1. Generamos un módulo.
2. En `delclations:` y `exports:` incluímos el componente
3. En el `app.module.ts` importamos el módulo creado, la zona de `imports:`
4. Podemos usar el componente página que contiene el módulo, por ejemplo `<mi-página>`, en el `app.component.html`


## Directivas

- ngFor: se usa para repetir estructas `<li *ngFor="let item of list">`, se pueden añadir elementos a la directiva `<li *ngFor="let item of list; let i = index; let isFirst = first; let isLast = last; let isEven = even; let isOdd = odd;></li>`
- ngIf: si cumple una condición se muestra `<p *ngIf="condition">`, se puede usar un else `<p *ngIf="condition; else elseBlock">` y mostrará un bloque con el nombre del else `<ng-template #elseBlock>`, se usa un ng-template para ello.
- ngClass: enlaza clases basadas en condiciones `<div [ngClass]="{'active': isActive, 'disabled': isDisabled}">`
- ngStyle: enlaza estilos `<div [ngStyle]="{'property': 'value'}">` o `<div [ngStyle]="getStyles()">`


## Data Binding

Para ccambiar los valores usando un input (imaginemos un objeto)
1. Declaramos un objeto en el .ts del componente `public user:User = { 'name': '' }`
2. Importamos `FormsModule` en los módulos.
3. En el .html delcaramos un input `<input type="text" name="name" [(ngModel)]="user.name" placeholder="Nombre">`


## @Input

Nos permite recibir información al componente hijo desde el padre:

1. Creamos un array `data` en el componente padre (.ts)
2. Desde el componente padre (.html) pasamos de atributo en el componente hijo la info `<my-child [myProperty]="data">`
3. Y en el componente hijo (.ts) usamos `@Input() myProperty`


## @Output

Nos permite enviar información del componente hijo al padre

1. En el hijo importamos `EventEmitter`
2. Le añadimos el emitter 
  `@Output()` 
  `public onNewUser: EventEmitter<User> = new EventEmitter;`
3. Se crea un evento en el hijo para lanzar el emiter al pade `sendData(){ this.onNewUser.emit(this.user) }`
4. En el .html del componente padre iremos al elemento hijo para añadir el sistema del emiter `<app-add-user (onNewUser)="onNewUser($event)"></app-add-user>`
5. Creamos una función en el componente padre para gestionar la información `onNewUser(user:User):void{ console.log(user) }`