importamos en el componente donde vamos a realizar el formulario la librería formsmodule. Exactamente igual que para el two way databiding

Creamos la maqueta de formulario en el html con la etiqueta form

A este form le colocamos un nombre o un template igualamos ese nombre a ngform de esta forma
#nombreForm= "ngForm"

Crea un evento de tipo submit que en este caso se llama (ngsubmit)="funcionTS(nombreForm.value)" Ojo funcionTs es un nombre generico a esta funcion le pasamos obligatoriamente como parámetro el nombre formulario creado antes.

Todos los campos del formulario (input, checkbox, select, textarea...) deberán llevar un name="" y un atributo ngModel. Ojo sin parentesis ni corchetes

La función devolverá un objeto json con cada uno de los campos de formulario con su name=""

