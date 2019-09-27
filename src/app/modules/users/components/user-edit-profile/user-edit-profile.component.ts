import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {CountriesService} from '../../../../@common/services/countries.service';
import {PhoneValidator} from '../../../../@common/validators/phone.validator';
import {User} from '../../models/user';


@Component({
  selector: 'app-user-edit-profile',
  templateUrl: './user-edit-profile.component.html',
  styleUrls: ['./user-edit-profile.component.scss']
})
export class UserEditProfileComponent implements OnInit, OnChanges {

  listGender: Array<string> = ['Male', 'Female'];
  listCountries: Array<any>;

  formGroup: FormGroup;

  @Input() user: User;

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

  ngOnChanges(changes: SimpleChanges): void {
    this.renderData();
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

  renderData() {
    if (this.user && this.formGroup) {
      Object.keys(this.user).forEach(key => {
        if (this.formGroup.get(key)) {
          this.formGroup.get(key).setValue(this.user[key]);
        }
      });
    }
  }

  hasError(controlName: string, errorName: string): boolean {
    return this.formGroup.controls[controlName].hasError(errorName);
  }

  onSubmit(value: any) {
    alert(value);
  }

}
