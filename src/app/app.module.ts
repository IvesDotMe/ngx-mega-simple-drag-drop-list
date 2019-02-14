import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxMegaSimpleDragDropListModule } from 'ngx-mega-simple-drag-drop-list';
import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		NgxMegaSimpleDragDropListModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
