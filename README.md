# ControlValueAccessor
É uma interface de comunicação entra a API de formulários do Angular e um elemento nativo do DOM. Ele interaje sempre com um FormControl, criado explicitamente ou não. Esse projeto apresenta um formulário que busca pelos estados do Brasil, digite no formulário um estado e o formulário irá redirecionar o estado procurado.

## Requisitos
- Angular
- Java
- IDE

## Licença
Distribuido sob a licença MIT License. Veja `LICENSE` para mais informações.

## Guia
- <a href="https://stackblitz.com/edit/fernanda-maki-hirose-control-value-accessor">Rode o projeto no StackBlitz (sem precisar executar comandos)</a>
- <a href="https://fernanda-maki-hirose-control-value-accessor.stackblitz.io">Veja apenas o projeto final</a>

## Dicas extras
- Por que utilizar ControlValueAccessor? Abstrair um comportamento dentro de um componente e que esse componente se comunique diretamente com o FormControl/FormGroup definido no componente pai.
- Para que serve o método registerOnChange? Para passar para o componente uma função que pode ser executada para atualizar o FormControl que está sendo injetado nele. 
- Para que serve o método registerOnTouched? Para passar para o componente uma função que pode ser executada para marcar o FormControl que está sendo injetado nele como touched. 
- Para que serve o método writeValue? Para o componente pai notificar o componente ControlValueAccessor que o FormControl foi atualizado por fora.
- Por que precisamos modificar o comportamento do injetor de dependências para o componente que implementa ControlValueAccessor? Para prevenir o Angular de tentar procurar a dependência fora do injetor do componente que implementa o ControlValueAccessor. 
