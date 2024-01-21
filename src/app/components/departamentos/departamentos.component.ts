import { DepartamentoService } from './../../departamento.service';
import { Departamento } from './../../Departamento';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrl: './departamentos.component.css',
  imports: [
    FormsModule, ReactiveFormsModule
  ],
  standalone: true
})
export class DepartamentosComponent implements OnInit {

  Departamento: any;
  tituloFormulario: string;

  constructor(private departamentoService: DepartamentoService) { }


  ngOnInit(): void {
    this.tituloFormulario = `Novo Departamento`;
    this.Departamento = new FormGroup({
      Nome: new FormControl("", [Validators.required]),
      Sigla: new FormControl("", [Validators.required]),

    });

  }

  EnviarDepartamento(): void{
    const departamento : Departamento = this.Departamento.value;

    console.log(departamento);
    this.departamentoService.CadastarDepartamento(departamento).subscribe(resultado =>{
      alert('Departamento criado');
    })
  }


}
