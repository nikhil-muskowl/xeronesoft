import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { FormService } from '../providers/form.service';
import { ContactService } from '../providers/contact.service';

@Component({
  selector: 'app-get-in-touch',
  templateUrl: './get-in-touch.component.html',
  styleUrls: ['./get-in-touch.component.css']
})
export class GetInTouchComponent implements OnInit {

  private contactForm: FormGroup;
  private heading = 'Get in Touch';

  private responseData;

  private status;
  private messageTitle;
  private message;

  private name;
  private email;
  private contact;
  private inquiry;

  public formErrors = {
    name: '',
    email: '',
    contact: '',
    inquiry: '',
  };

  constructor(
    private formBuilder: FormBuilder,
    private formService: FormService,
    private contactService: ContactService,
  ) {
    this.name = '';
    this.email = '';
    this.contact = '';
    this.inquiry = '';

    this.createForm();
  }
  public createForm() {
    this.contactForm = this.formBuilder.group({
      name: [this.name, Validators.compose([
        Validators.required
      ])],
      email: [this.email, Validators.compose([
        Validators.required
      ])],
      contact: [this.contact, Validators.compose([
        Validators.required
      ])],
      inquiry: [this.inquiry,
      Validators.compose([
        Validators.minLength(10),
        Validators.maxLength(500),
        Validators.required,
      ])],
    });

    this.contactForm.valueChanges.subscribe((data) => {
      this.formErrors = this.formService.validateForm(this.contactForm, this.formErrors, true)
    });
  }


  public onSubmit() {
    // mark all fields as touched
    this.formService.markFormGroupTouched(this.contactForm);
    if (this.contactForm.valid) {

      this.contactService.contact(this.contactForm.value).subscribe(
        response => {
          this.responseData = response;

          this.status = this.responseData.status;
          this.message = this.responseData.message;

          if (!this.status) {
            this.messageTitle = 'Warning!';
            if (this.responseData.result) {
              this.responseData.result.forEach(element => {
                if (element.id == 'name') {
                  this.formErrors.name = element.text
                }
                if (element.id == 'email') {
                  this.formErrors.email = element.text
                }
                if (element.id == 'contact') {
                  this.formErrors.contact = element.text
                }
                if (element.id == 'inquiry') {
                  this.formErrors.inquiry = element.text
                }
              });
            }
          } else {
            this.messageTitle = 'Sucess!';
            this.contactForm.reset();
          }
        },
        err => {
          console.error(err);
        }
      );

    } else {
      this.formErrors = this.formService.validateForm(this.contactForm, this.formErrors, false);
    }
  }

  ngOnInit() {
  }

}
