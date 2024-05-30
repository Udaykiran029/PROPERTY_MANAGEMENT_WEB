import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-room-unit-allocation-view',
  templateUrl: './room-unit-allocation-view.component.html',
  styleUrls: ['./room-unit-allocation-view.component.css']
})
export class RoomUnitAllocationViewComponent implements OnInit {
  RoomUnitAllocationView:FormGroup;
  itemslst:any=[];
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.FormDetails();
    // this.itemslst=['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16'];
    this.itemslst=[
      {roomno:'Room 1',floorno:1,blockno:1,status:true},
      {roomno:'Room 2',floorno:2,blockno:2,status:false},
      {roomno:'Room 3',floorno:3,blockno:3,status:true},
      {roomno:'Room 4',floorno:4,blockno:4,status:true},
      {roomno:'Room 5',floorno:5,blockno:5,status:false},
      {roomno:'Room 6',floorno:6,blockno:6,status:true},
      {roomno:'Room 7',floorno:7,blockno:7,status:true},
      {roomno:'Room 8',floorno:8,blockno:8,status:false},
      {roomno:'Room 9',floorno:9,blockno:9,status:true},
      {roomno:'Room 10',floorno:10,blockno:10,status:true},
      {roomno:'Room 11',floorno:11,blockno:11,status:false},
      {roomno:'Room 12',floorno:12,blockno:12,status:true},
      {roomno:'Room 13',floorno:13,blockno:13,status:true},
      {roomno:'Room 14',floorno:14,blockno:14,status:false},
      {roomno:'Room 15',floorno:15,blockno:15,status:true},
      {roomno:'Room 16',floorno:16,blockno:16,status:false},
    ];
  }
  FormDetails(){
    this.RoomUnitAllocationView=this.fb.group({
      fromdate:[new Date()]
    });
  }
}
