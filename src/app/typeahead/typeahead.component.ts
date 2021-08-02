import { Component, Self, Optional } from "@angular/core";
import { ControlValueAccessor, FormControl,  NgControl } from "@angular/forms";

import { autocomplete } from './typeahead.utils';

@Component({
  selector: 'jv-typeahead',
  template: `
    <input [formControl]="control"
           (focus)="onFocus()">

           
    <!--mostra uma lista de estados brasileiros que batem com a string que o usuário digitar no input-->
    <ul>
      <li *ngFor="let state of filteredStates"
          (click)="onSelect(state)">
        {{ state }}
      </li>
    </ul>
  `,
})
export class TypeaheadComponent implements ControlValueAccessor {

  control = new FormControl('');
  disabled: boolean;
  private onChange: (value: string) => void;
  private onTouched: () => void;


  // @Self() diz para o injetor de dependências procurar só na camada desse componente, se não tiver nesse componente vai jogar um erro
  // @Optional() torna a injeção opcional, se não existe um NgControl não vai jogar um erro

  constructor(@Optional() @Self() ngControl: NgControl) {

    // cria a variável que vai armazenar o valor, faz o binding entre o componente e as implementações abaixo
    ngControl.valueAccessor = this;

    // atualiza o formulário do componente pai, procura a letra 'B'
    setTimeout(() => ngControl.control.setValue('B'), 3000);
  }

  // passa uma função que vamos guardar o resultado dentro do formulário, essa função avisa o formulário do componente pai que o valor foi atualizado e passar o valor atualizado
  registerOnChange(fn: (value: string) => void) {
    this.onChange = fn;
  }

  // chamamos essa função quando queremos atualizar o formulário do componente pai que o input foi tocado
  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  // só recebe um boolean, o formulário é chamado caso esteja habilitado ou desabilitado
  setDisabledState(isDisabled: boolean) {
    if (isDisabled) {
      this.control.disable();
    } else {
      this.control.enable();
    }
  }

  // espera receber uma string do formulário do componente pai
  writeValue(value: string) {
    console.log('writeValue', value);
    this.control.setValue(value);
  }

  onSelect(value: string) {
    this.onChange(value);
  }

  // atualiza o formulário do componente pai quando for touched
  onFocus() {
    this.onTouched();
  }

  // só vai executar o autocomplete quando o value tiver uma informação válida dentro, como ele é inicialmente undefined não se vê nada preenchido
  get filteredStates(): string[] {
    return !!this.control.value ?
      autocomplete(this.control.value) : [];
  }
}
