import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
   @Output() parametrosSeleccionados = new EventEmitter<any>()

  categoriaSeleccionada = "general";
  paisSeleccionado = "co";

  categorias:any[] = [
    { value: "general", nombre: "General"},
    { value: "bussines", nombre: "Negocios"},
    { value: "entertaiment", nombre: "Entretenimiento"},
    { value: "health", nombre: "Salud"},
    { value: "science", nombre: "Ciencia"},
    { value: "sport", nombre: "Deportes"},
    { value: "technology", nombre: "Tecnología"}
  ]

   paises:any[] = [
    { value: "co", nombre: "Colombia"},
    { value: "br", nombre: "Brasil"},
    { value: "fr", nombre: "Francia"},
    { value: "mx", nombre: "México"},
    { value: "hu", nombre: "Hungria"},
    { value: "ru", nombre: "Rusia"}

  ]

  constructor() { }

  ngOnInit(): void {
  }

  buscarNoticias(){
    const PARAMETROS ={
      categoria : this.categoriaSeleccionada,
      pais : this.paisSeleccionado
    }

    this.parametrosSeleccionados.emit(PARAMETROS);
  }

}
