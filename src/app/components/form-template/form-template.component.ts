import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-template',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-template.component.html',
  styleUrl: './form-template.component.css'
})
export class FormTemplateComponent {

  arrData: any[]=[]

  getDataForm(miFormulario:any):void{

   this.arrData.push(miFormulario.value)
   console.log(this.arrData)
   miFormulario.reset()
  }
}
