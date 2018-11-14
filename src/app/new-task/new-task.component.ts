import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  priorityOptions = [
    { value: 'critical', label: 'Critical', icon: 'flash_on' },
    { value: 'important', label: 'Important', icon: 'directions_bike' },
    { value: 'normal', label: 'Normal', icon: 'directions_run' },
    { value: 'low', label: 'Low', icon: 'directions_walk' }
  ];

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      title: ['', Validators.required],
      description: ['']
    });
    this.secondFormGroup = this._formBuilder.group({
      dueDate: ['']
    });
    this.thirdFormGroup = this._formBuilder.group({
      priority: ['']
    });
  }
}
