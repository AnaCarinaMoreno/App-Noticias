import { Component } from '@angular/core';
import { NoticiasService } from './services/noticias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App-Noticias';

  listNoticias:any[]= [];
  loading = false;

constructor (private _noticiasService: NoticiasService){

}

 buscarNoticias(parametros:any){
  this.loading = true;
  this._noticiasService.getNoticias(parametros).subscribe(data => {
    this.loading = false;
    this.listNoticias = data.articles;
    
  })

 }

}
