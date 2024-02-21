import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-model',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-model.component.html',
  styleUrl: './form-model.component.css'
})
export class FormModelComponent {
  modelForm: FormGroup;

  constructor() {
    this.modelForm = new FormGroup({
      id: new FormControl(null,[]),
      name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      email: new FormControl(null, [Validators.required, Validators.pattern(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
      edad: new FormControl(null, [Validators.min(18), Validators.max(65)]),
      dni: new FormControl(null, [this.dniValidador]),
      password: new FormControl(null, []),
      repitepass: new FormControl(null, [])
    }, [this.checkpassword])
  }

  ngOninit():void{
    let obj = {
      name: 'Ana Nuñez',
      email: 'ananunezrejon@gmail.com',
      edad:'37',
      dni: '12121212Z',
      password:'123123',
      repitepass:'123123'
    }
    this.modelForm = new FormGroup({
      name: new FormControl(obj.name, []),
      email: new FormControl(obj.email, []),
      edad: new FormControl(obj.edad, []),
      dni: new FormControl(obj.dni, []),

    }, [])
  }

  checkpassword(formValue: AbstractControl): any{
    const password = formValue.get('passford')?.value
    const repitepass = formValue.get('repitepass')?.value
    if(password !== repitepass){
      return{'checkpassword': true}
    }else{
      return null
    }

  }

  dniValidador(controlName: AbstractControl): any {
    const letrasDni: string[] = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"]
    const dni = controlName.value;
    const exp = /^\d{8}[A-Z]{1}/
    if (exp.test(dni)) {
      const letra: string = dni.at(-1)
      const numero: number = Number(dni.substring(0,dni.lenght - 1))
      console.log(numero, letra)
      const position = numero % 23
      return(letra !== letrasDni[position]) ? {'dnivalidador':'La letra no corresponde al dni'}:null
    } else {
      return { 'dnivalidador': 'Formato del dni no es valido' }
    }
  }

  getDataForm(): void {
    console.log(this.modelForm.value)
    this.modelForm.reset()
  }

  checkControl(formControlName: string, validator: string): boolean | undefined {
    return this.modelForm.get(formControlName)?.hasError(validator) && this.modelForm.get(formControlName)?.touched;
  }
}

