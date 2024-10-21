import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ServicebdService } from 'src/app/services/servicebd.service';

@Component({
  selector: 'app-admin-editar-rol',
  templateUrl: './admin-editar-rol.page.html',
  styleUrls: ['./admin-editar-rol.page.scss'],
})
export class AdminEditarRolPage implements OnInit {

  rol : any = {
    idRol : "",
    nombre : ""
  };
  editMode : boolean = false;

  constructor(private bd : ServicebdService, private router : Router, private activatedRoute : ActivatedRoute) { 
    activatedRoute.queryParams.subscribe(res =>{
      if(this.router.getCurrentNavigation()?.extras.state){
        this.rol = this.router.getCurrentNavigation()?.extras?.state?.['rol'];
        this.editMode = true;
      }
      else{
        this.editMode = false;
      }
    })
  }

  ngOnInit() {
    
  }

  cancelEdit() {
    // Navigate back to the roles list
    this.router.navigate(['/admin-lista-roles']);
  }
  
  updateDatabase() {
    // Call the function to update the role in the database
    this.bd.modificarRol(this.rol).then(() => {
      // Navigate back to the roles list after successful update
      this.router.navigate(['/admin-lista-roles']);
    });
  }
  
  saveChanges() {
    // Handle the logic for saving changes when not in edit mode
    this.bd.insertarRol(this.rol).then(() => {
      this.router.navigate(['/admin-lista-roles']);
    });
  }

}
