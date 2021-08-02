import { Component, VERSION } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  template: `
    <h3>Parent form value: {{ search }}</h3>
    <span *ngIf="isSearchTouched">Touched</span>
    <hr>
    <form [formGroup]="form"> <!--o search está dentro desse formControl-->
      <jv-typeahead formControlName="search"></jv-typeahead> <!--existe um formControl chamado search-->
    </form>
  `,
})
export class AppComponent {
  
  form = new FormGroup({
    search: new FormControl({ value: '', disabled: true }),
  });

  // adiciona a letra 'A' no formulário depois de um tempo e procura estados com essa letra
  constructor() {
    setTimeout(() =>
      this.form.controls['search'].setValue('A'),
      2000,
    );
  }

  // procura um valor no formulário
  get search(): string {
    return this.form.value.search;
  }

  // verifica se o componente pai foi touched 
  get isSearchTouched(): boolean {
    return this.form.controls['search'].touched;
  }
}
