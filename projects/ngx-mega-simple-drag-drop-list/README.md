[![NPM](https://nodei.co/npm/ngx-mega-simple-drag-drop-list.png)](https://npmjs.org/package/ngx-mega-simple-drag-drop-list)

# NgxMegaSimpleDragDropList

Angular 2/3/4/5/6/7 Drag Drop Simple Reordable List Items

## Screenshot

![Screenshot](https://github.com/IvesDotMe/ngx-mega-simple-drag-drop-list/blob/master/projects/ngx-mega-simple-drag-drop-list/screenshot.png?raw=true)

*had to photoshop the little dragging cursor. Guess it will look different in different OS's and browsers

## Demo

https://ives.me/NgxMegaSimpleDragDropListDemoWithNpmPackage/

## Install

```shell
npm i ngx-mega-simple-drag-drop-list
```

app.module.ts

```typescript
import { NgxMegaSimpleDragDropListModule } from 'ngx-mega-simple-drag-drop-list';

@NgModule({
	imports: [
		NgxMegaSimpleDragDropListModule
	],
})

```

app.component.ts

```typescript

import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	items = [1, 2, 3, 4, 5]; 

	constructor() { }

	ngOnInit() {}

	onDropped(newItems) {
		this.items = newItems;
	}
}

```

app.component.html

```html
<div class="card" *ngFor="let item of items;let index = index;" megaSimpleDndList [items]="items" [index]="index" (dropped)="onDropped($event)">
	<div class="card-content">
		{{item}}
	</div>
</div>
```


app.component.css

```css
.card {
	cursor: move;
	float: left;
	position: relative;
	margin: .5rem 1rem 1rem 0;
	background-color: #fff;
	transition: box-shadow opacity .25s;
	border-radius: 2px;
	box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
}

.card .card-content{
	pointer-events: none; /*make sure you add this to all card children. This ensures only the card is dragged*/
	padding: 40px;
	border-radius: 0 0 2px 2px;
	font-size: 30px;	
	text-align: center;
}

.hover {
	box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.75);
}

.draggin {
	opacity: 0.4;
}
```