Importamos la librería al componente ReactiveFormsModule

Creamos un atributo dentro de la etiqueta form que se llama formGroup que contendrá el nombre del formulario

Necesitamos implementar el evento ngSubmit que llame una función que en este caso no recibe ningún parámetro. La función te genera un objeto JSON

A cada campo de formulario solo le tendremos que añadir un atributo formControlName con el nombre del campo

Inicializamos dentro del ts el objeto FormGroup creando el punto 2, donde tenemos obligación de dar alta cada uno de los campos. Aquí es donde ejecutamos las validaciones.


