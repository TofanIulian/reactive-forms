import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  title = 'reactive-forms';

  travelerDetailsForm = new FormGroup({
    bookingGuest: new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      phone: new FormControl(''),
    }),
    rooms: new FormArray<FormArray>([
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
    console.warn(this.travelerDetailsForm.value);
  }

  get roomsControls() {
    return (this.travelerDetailsForm.get('rooms') as FormArray)
      .controls as FormArray[];
  }
}
