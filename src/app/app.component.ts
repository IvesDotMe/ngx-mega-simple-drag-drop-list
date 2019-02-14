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
