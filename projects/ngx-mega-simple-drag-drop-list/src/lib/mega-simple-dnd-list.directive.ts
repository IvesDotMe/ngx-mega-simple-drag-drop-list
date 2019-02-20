import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
	selector: '[megaSimpleDndList]'
})
export class MegaSimpleDndListDirective {
	@Input() items: any[];
	@Input() index: number;
	@Input() hoverStyle = 'hover';
	@Input() dragStyle = 'draggin';
	@Input() isSwap = false;
	@Output() dropped = new EventEmitter<any[]>();

	@HostBinding() draggable = true;

	constructor() { }

	@HostListener('dragstart', ['$event'])
	dragstart($event: DragEvent) {
		$event.dataTransfer.setData('indexSource', this.index.toString());
		$event.srcElement.classList.add(this.dragStyle);
	}

	@HostListener('dragend', ['$event'])
	dragend($event: DragEvent) {
		$event.srcElement.classList.remove(this.dragStyle);
	}

	@HostListener('dragenter', ['$event'])
	dragenter($event) {
		if (!$event.srcElement.classList.contains(this.dragStyle)) { // Only add the hoverStyle to the other elements
			$event.srcElement.classList.add(this.hoverStyle);
		}
		$event.preventDefault();
	}

	@HostListener('dragleave', ['$event'])
	dragleave($event: DragEvent) {
		$event.srcElement.classList.remove(this.hoverStyle);
	}

	@HostListener('drop', ['$event'])
	drop($event: DragEvent) {
		$event.srcElement.classList.remove(this.hoverStyle);
		const indexSource = Number($event.dataTransfer.getData('indexSource'));

		this.items = (this.isSwap)
			? this.swapItemsInArray(indexSource, this.index, this.items)
			: this.reorderArray(indexSource, this.index, this.items);

		this.dropped.emit(this.items);
		$event.preventDefault();
	}

	@HostListener('dragover', ['$event'])
	dragover($event) {
		$event.preventDefault();  // prevent default to allow drop
	}

	private swapItemsInArray = (oldIndex, newIndex, originalArray) => {
		[originalArray[oldIndex], originalArray[newIndex]] = [originalArray[newIndex], originalArray[oldIndex]];
		return originalArray;
	}

	private reorderArray = (oldIndex, newIndex, originalArray) => {
		const movedItem = originalArray.find((item, index) => index === oldIndex);
		const remainingItems = originalArray.filter((item, index) => index !== oldIndex);

		const reorderedItems = [
			...remainingItems.slice(0, newIndex),
			movedItem,
			...remainingItems.slice(newIndex)
		];

		return reorderedItems;
	}

}
