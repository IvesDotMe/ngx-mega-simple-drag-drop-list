[![NPM](https://nodei.co/npm/ngx-mega-simple-drag-drop-list.png)](https://npmjs.org/package/ngx-mega-simple-drag-drop-list)

# NgxMegaSimpleDragDropList

Simple Drag and Drop Reordable List

## Screenshot

![Screenshot](https://github.com/IvesDotMe/ngx-mega-simple-drag-drop-list/blob/master/projects/ngx-mega-simple-drag-drop-list/screenshot.png?raw=true)

*had to photoshop the little dragging cursor. Guess it will look different in different OS's and browsers

## Demo

https://ivesdotme.github.io/NgxMegaSimpleDragDropListDemoWithNpmPackage/

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
<div class="item" *ngFor="let item of items;let index = index;" megaSimpleDndList [items]="items" [index]="index" (dropped)="onDropped($event)">
	{{item}}
</div>
```


app.component.css

```css
.item {
	width: 200px;
	border: 1px dashed #808080;
	margin: 10px;
	text-align: center;
	cursor: move;
	font-size: 20px;
	padding: 20px;
}
```