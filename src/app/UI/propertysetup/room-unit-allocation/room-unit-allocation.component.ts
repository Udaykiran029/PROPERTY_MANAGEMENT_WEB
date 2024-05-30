import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-room-unit-allocation',
  templateUrl: './room-unit-allocation.component.html',
  styleUrls: ['./room-unit-allocation.component.css']
})
export class RoomUnitAllocationComponent implements OnInit {
  result:any=[];
  RoomAllocation:FormGroup;
  roomslst:any=[];
  roooms:any=[];
  blockid:any;
  roomtenantdetails:any=[
    // {pBlock: 2,
    // pFloors: 6,
    // pRooms: "",
    // pcontactno:"dfds",
    // pemail: "dfd",
    // pname: "sdfgssdfsd"}
  ];
  constructor(private commonservice:CommonService,private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.FormDetails();
    this.commonservice.GetAllBlocks().subscribe(res=>{
      this.result=res;
      console.log(this.result);
    });
  }
  FormDetails(){
    this.RoomAllocation=this.fb.group({
      pBlock:[''],
      pFloors:[''],
      pRooms:[''],
      tenantdetailslst:this.tenantdetails(),
      tenantdetailslist:this.fb.array([]),
      pname:[''],
      pcontactno:[''],
      pemail:['']
    });
  }
  tenantdetails(){
    return this.fb.group({
      pname:[''],
      pcontactno:[''],
      pemail:['']
    })
  }
  blockChange($event){
    debugger
    this.blockid=$event.pblock_id
    this.commonservice.GetFloorsByBlockId($event.pblock_id).subscribe(res=>{
      this.roomslst=res;
      console.log('Floors',this.roomslst)
    })
  }
  floorChange($event){
    debugger
    this.commonservice.GetAllRoomNumberByFloorid(this.blockid,$event.pfloorid).subscribe(res=>{
      this.roooms=res;
      console.log('rooms',this.roooms)
    })
  }
  addtenantdetails(){
    debugger
    //if (this.roomtenantdetails.length<0){
      let values=this.RoomAllocation.value;
      this.roomtenantdetails.push(values);
      console.log(this.roomtenantdetails);
    

  }
  viewRoomunitAllocation(){
    this.router.navigate(['/navigation/propertySetup/RoomUnitAllocationView']);
  }
}
