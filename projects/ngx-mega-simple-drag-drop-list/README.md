[![NPM](https://nodei.co/npm/ngx-mega-simple-drag-drop-list.png)](https://npmjs.org/package/ngx-mega-simple-drag-drop-list)

# NgxMegaSimpleDragDropList

Simple Drag and Drop Reordable List

##Demo

https://github.com/IvesDotMe/ngx-mega-simple-drag-drop-list

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