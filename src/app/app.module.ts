import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { createCustomElement } from '@angular/elements';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/todo.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoAddComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      todo: reducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: true, // Restrict extension to log-only mode
    }),
    AppRoutingModule
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

