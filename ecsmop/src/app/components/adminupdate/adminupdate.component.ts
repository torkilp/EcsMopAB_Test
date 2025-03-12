import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { SoftwareUpdate } from '../../entities/softwareupdate';




@Component({
  selector: 'admin-update',
  templateUrl: './adminupdate.component.html',
  styleUrl: './adminupdate.component.css'
})
export class AdminUpdateComponent implements OnInit {
  title = 'Admin Update';

  softwareupdatelist: Array<SoftwareUpdate> = new Array<SoftwareUpdate>();

  constructor() { }


  ngOnInit() {
    this.initData();
  }

  initData(): void {

    this.softwareupdatelist.push(Object.assign(new SoftwareUpdate(), { id: "DSP_121", date: "24-01-31", description: "Windows Update", status: "Recommended", info: "Windows Update" }));
    this.softwareupdatelist.push(Object.assign(new SoftwareUpdate(), { id: "DSP_122", date: "24-01-31", description: "Windows Update", status: "Security", info: "Security Update" }));
    this.softwareupdatelist.push(Object.assign(new SoftwareUpdate(), { id: "DSP_123T", date: "24-01-31", description: "Windows Update", status: "Recommended", info: "Windows Update" }));

  }




}