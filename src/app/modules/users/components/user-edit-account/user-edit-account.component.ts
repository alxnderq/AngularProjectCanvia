import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../models/user';

@Component({
  selector: 'app-user-edit-account',
  templateUrl: './user-edit-account.component.html',
  styleUrls: ['./user-edit-account.component.scss']
})
export class UserEditAccountComponent implements OnInit, OnChanges {

  formGroup: FormGroup;
  passwordGroup: FormGroup;

  @Input() user: User;

  constructor(
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {
    this.initForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.renderData();
  }

  initForm() {
    this.passwordGroup = this.formBuilder.group({
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ]),
      confirmPassword: new FormControl('', [
        Validators.required
      ])
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });

    this.formGroup = this.formBuilder.group({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(25),
        Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      passwords: this.passwordGroup,
      terms: new FormControl(false, Validators.pattern('true'))
    });
  }

  hasError(controlName: string, errorName: string): boolean {
    return this.formGroup.controls[controlName].hasError(errorName);
  }

  hasErrorGroup(group: string, controlName: string, errorName: string): boolean {
    const formGroup = this.formGroup.get(group) as FormGroup;
    return formGroup.controls[controlName].hasError(errorName);
  }

  renderData() {
    if (this.user && this.formGroup) {
      Object.keys(this.user).forEach(key => {
        if (this.formGroup.get(key)) {
          this.formGroup.get(key).setValue(this.user[key]);
        }
      });
    }
  }

  onSubmit(value: any) {
    alert(value);
  }

}

export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      // return if another validator has already found an error on the matchingControl
      return;
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({mustMatch: true});
    } else {
      matchingControl.setErrors(null);
    }
  };
}
