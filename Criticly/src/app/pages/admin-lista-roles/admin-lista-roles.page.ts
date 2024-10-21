import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ServicebdService } from 'src/app/services/servicebd.service';

@Component({
  selector: 'app-admin-lista-roles',
  templateUrl: './admin-lista-roles.page.html',
  styleUrls: ['./admin-lista-roles.page.scss'],
})
export class AdminListaRolesPage implements OnInit {

  arregloRoles : any = [
    {
      idRol : "",
      nombre : ""
    }
  ]

  constructor(private bd : ServicebdService, private router : Router) { 

  }

  ngOnInit() {
    this.bd.dbState().subscribe(res=>{
      this.bd.selectRol();
      if(res){
        //subscribirme al observable del select
        this.bd.fetchRol().subscribe(data=>{
          this.arregloRoles = data;
        })
      }
    });
  }

  modificar(x:any){
    let navigationExtras : NavigationExtras = {
      state :{
        rol : x
      }
    }
    this.router.navigate(['/admin-editar-rol'],navigationExtras);
  }

  eliminar(x:any){
    this.bd.eliminarRol(x.idRol);
  }

  irAgregar(){
    this.router.navigate(['/admin-editar-rol']);
  }

}
