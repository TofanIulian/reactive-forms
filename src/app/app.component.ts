import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  title = 'reactive-forms';

  profileForm = new FormGroup({
    bookingGuest: new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      phone: new FormControl(''),
    }),
    guests: new FormArray<FormArray>([
      new FormArray([
        new FormGroup({
          firstName: new FormControl(''),
          lastName: new FormControl(''),
        }),
        new FormGroup({
          firstName: new FormControl(''),
          lastName: new FormControl(''),
        }),
      ]),
      new FormArray([
        new FormGroup({
          firstName: new FormControl(''),
          lastName: new FormControl(''),
        }),
      ]),
    ]),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit() {
    console.warn(this.profileForm.value);
  }

  get guestControls() {
    return (this.profileForm.get('guests') as FormArray)
      .controls as FormArray[];
  }
}
