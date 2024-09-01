import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  menudata:any;
  formcomponents:any=[];
  constructor(private router:Router) { 
    this.router.navigate(['navigation/Dashboard']);
  }

  ngOnInit(): void {
    document.getElementById("main-content").style.marginLeft = "250px";
    this.menudata={
      "moduleDTOList":[
        {
        "pmoduleid":0,
        "pmodulename":"HOME",
        "pmodulenamehtml":"Dashboard"
        },
        // {
        // "pmoduleid":2,
        // "pmodulename":"BLOCK",
        // "pmodulenamehtml":"loans"
        // },
        // {
        // "pmoduleid":3,
        // "pmodulename":"VACANCIES",
        // "pmodulenamehtml":"chit"
        // },
        // {
        // "pmoduleid":4,
        // "pmodulename":"TRANSACTIONS",
        // "pmodulenamehtml":"transactions"
        // },
        {
        "pmoduleid":1,
        "pmodulename":"PROPERTY",
        "pmodulenamehtml":"propertySetup",
        "pFormsDTO":[
          {
            "pformid":0,
            "pformName":"Block Building Creation",
            "pformNamehtml":"/navigation/propertySetup/BlockBuildingCreation"
          },
          {
            "pformid":1,
            "pformName":"Floor Plans",
            "pformNamehtml":"/navigation/propertySetup/FloorPlans"
          },
          {
            "pformid":2,
            "pformName":"Room Allocation",
            "pformNamehtml":"/navigation/propertySetup/RoomUnitAllocation"
          }
        ]
        },
        {
        "pmoduleid":2,
        "pmodulename":"TENANT",
        "pmodulenamehtml":"tenantManagement",
        "pFormsDTO":[
          {
            "pformid":0,
            "pformName":"Lease Agreements",
            "pformNamehtml":"/navigation/tenantManagement/LeaseAgreements"
          },
          {
            "pformid":1,
            "pformName":"Move in - Move Out",
            "pformNamehtml":"/navigation/tenantManagement/MoveinMoveOut"
          },
          {
            "pformid":2,
            "pformName":"Tenant Profiles",
            "pformNamehtml":"/navigation/tenantManagement/TenantProfiles"
          },
        ]
        },
        {
        "pmoduleid":3,
        "pmodulename":"PAYMENT",
        "pmodulenamehtml":"paymentManagement"
        },
    ]
    }
    console.log(this.menudata.moduleDTOList);
  }
  closeNav(){
    debugger
    document.getElementById("mySidenav").style.width = "0px";
    document.getElementById("main-content").style.marginLeft = "0px";
  }
  openNav() {
    debugger
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main-content").style.marginLeft = "250px";
  }
  openforms($event){
    debugger
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main-content").style.marginLeft = "250px";
    console.log($event);
    this.formcomponents=this.menudata.moduleDTOList[$event].pFormsDTO;
    console.log('Forms',this.formcomponents);
  }
  //test
}
