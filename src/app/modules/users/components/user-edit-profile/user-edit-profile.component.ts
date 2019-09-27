import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {CountriesService} from '../../../../@common/services/countries.service';
import {PhoneValidator} from '../../../../@common/validators/phone.validator';


@Component({
  selector: 'app-user-edit-profile',
  templateUrl: './user-edit-profile.component.html',
  styleUrls: ['./user-edit-profile.component.scss']
})
export class UserEditProfileComponent implements OnInit {

  listGender: Array<string> = ['Male', 'Female'];
  listCountries: Array<any>;

  formGroup: FormGroup;

  private subscription: Subscription = new Subscription();

  constructor(
    private formBuilder: FormBuilder,
    private countriesService: CountriesService
  ) {
  }

  ngOnInit() {
    this.getListCountries();
    this.initForm();
  }

  initForm() {
    const countryForm: FormControl = new FormControl('', [Validators.required]);

    this.formGroup = this.formBuilder.group({
      fullName: new FormControl('', [Validators.required]),
      birthday: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      country: countryForm,
      phone: new FormControl('', Validators.compose([
        Validators.required,
        PhoneValidator.validCountryPhone(countryForm)
      ])),
      bio: new FormControl('', [Validators.maxLength(256)])
    });
  }

  getListCountries() {
    const sub = this.countriesService.getListCountries().subscribe(result => {
      this.listCountries = result;
    }, error => {
      console.log(error);
    }, () => {
      console.log('complete');
    });
    this.subscription.add(sub);
  }

  hasError(controlName: string, errorName: string): boolean {
    return this.formGroup.controls[controlName].hasError(errorName);
  }

  onSubmit(value: any) {
    console.log(value);
  }

}
