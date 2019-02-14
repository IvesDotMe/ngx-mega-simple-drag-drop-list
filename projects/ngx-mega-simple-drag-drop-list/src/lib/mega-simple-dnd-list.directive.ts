import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
	selector: '[megaSimpleDndList]'
})
export class MegaSimpleDndListDirective {
	@Input() items: any[];
	@Input() index: number;
	@Output() dropped = new EventEmitter<any[]>();

	@HostBinding() draggable = true;

	constructor() { }

	@HostListener('dragstart', ['$event'])
	dragstart($event: DragEvent) {
		$event.dataTransfer.setData('indexSource', this.index.toString());
	}

	@HostListener('drop', ['$event'])
	drop($event: DragEvent) {
		const indexSource = Number($event.dataTransfer.getData('indexSource'));

		[this.items[indexSource], this.items[this.index]] = [this.items[this.index], this.items[indexSource]];

		this.dropped.emit(this.items);
		$event.preventDefault();
	}

	@HostListener('dragover', ['$event'])
	dragover($event: DragEvent) {
		$event.preventDefault();
	}

}
