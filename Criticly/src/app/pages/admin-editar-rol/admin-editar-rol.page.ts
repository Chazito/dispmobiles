import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ServicebdService } from 'src/app/services/servicebd.service';

@Component({
  selector: 'app-admin-editar-rol',
  templateUrl: './admin-editar-rol.page.html',
  styleUrls: ['./admin-editar-rol.page.scss'],
})
export class AdminEditarRolPage implements OnInit {

  constructor(private bd : ServicebdService, private router : Router) { 

  }

  ngOnInit() {
    
  }

}
