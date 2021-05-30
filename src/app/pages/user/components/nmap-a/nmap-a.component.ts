import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-nmap-a',
  templateUrl: './nmap-a.component.html',
  styleUrls: ['./nmap-a.component.scss']
})
export class NmapAComponent implements OnInit {
  profileForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      address: this.fb.group({
        aliases: this.fb.array([
          this.fb.control('')
        ]),
        street: [''],
        city: [''],
        state: [''],
        zip: ['']
      }),
     
    });
  }

  get aliases() {
    return this.profileForm.get('address')?.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }
  
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

}
