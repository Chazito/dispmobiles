import { Component } from '@angular/core';
import { ServicebdService } from '../services/servicebd.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  arregloDestacados : any = [
    {
      idTitulo: "",
      idTipoTitulo: "",
      nombre: "",
      sinopsis: "",
      duracion: "", 
      URLImagen: "",
      URLTrailer: "",
      fechaEstreno: Date
    }
  ];
  arregloCriticados : any = [
    {
      idTitulo: "",
      idTipoTitulo: "",
      nombre: "",
      sinopsis: "",
      duracion: "", 
      URLImagen: "",
      URLTrailer: "",
      fechaEstreno: Date
    }
  ];
  arregloMejores : any = [
    {
      idTitulo: "",
      idTipoTitulo: "",
      nombre: "",
      sinopsis: "",
      duracion: "", 
      URLImagen: "",
      URLTrailer: "",
      fechaEstreno: Date
    }
  ];

  constructor(private db : ServicebdService) {
    this.db.selectDestacados();
    this.db.selectCriticados();
    this.db.selectMejores();
  }

  ngOnInit(){
    
    this.db.dbState().subscribe(res=>{
      if(res){
        this.db.fetchDestacados().subscribe(data =>{
          this.arregloDestacados = data;
        })
        this.db.fetchCriticados().subscribe(data =>{
          this.arregloCriticados = data;
        })
        this.db.fetchMejor().subscribe(data =>{
          this.arregloMejores = data;
        })
      }
    })
  }

}
