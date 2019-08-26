import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { createCustomElement } from '@angular/elements';
import { StoreModule } from '@ngrx/store';
import { reducerTodo } from './reducers/todo.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ReactiveFormsModule } from '@angular/forms';
import { reducerCounter } from './reducers/counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoAddComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      todo: reducerTodo,
      counter: reducerCounter
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: true, // Restrict extension to log-only mode
    }),
    AppRoutingModule,
    ButtonsModule,
    BrowserAnimationsModule,
    InputsModule,
    ReactiveFormsModule
  ],
  providers: [],
  entryComponents: [TodoListComponent, TodoAddComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const elementsToExport = [
      ['todo-add', TodoAddComponent],
      ['todo-list', TodoListComponent]
    ];

    elementsToExport.forEach(([name, element]) =>
      customElements.define(name as string, createCustomElement(element as any, { injector: this.injector })
      ));
  }
}

