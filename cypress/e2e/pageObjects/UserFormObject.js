export class UserFormPage {
  //locators
  form_heading = "[data-cy=headerTest]";
  form_first_name_label = "[data-cy=firstNameLabelTest]";
  form_first_name_value = "[data-cy=firstNameTest]";
  form_last_name_label = "[data-cy=lastNameLabelTest]";
  form_last_name_value = "[data-cy=lastNameTest]";
  form_gender_parent = "[data-cy=gender_radio_parent]";
  form_gender_label = "[data-cy=genderLabelTest]";
  form_gender_male_value = "[data-cy=maleGender]";
  form_gender_female_value = "[data-cy=femaleGender]";
  form_gender_other_value = "[data-cy=otherGender]";
  form_country_label = "[data-cy=countryLabelTest]";
  form_country_value = "[data-cy=countryTest]";
  form_mobile_number_label = "[data-cy=mobileNumberLabelTest]";
  form_mobile_number_value = "[data-cy=mobileNumberTest]";
  form_email_label = "[data-cy=emailLabelTest]";
  form_email_value = "[data-cy=emailTest]";
  form_password_label = "[data-cy=passwordLabelTest]";
  form_password_value = "[data-cy=passwordTest]";
  form_confirm_password_label = "[data-cy=confirmPasswordLabelTest]";
  form_confirm_password_value = "[data-cy=confirmPasswordTest]";
  form_register_btn = "[data-cy=registerButton]";

  click_on_Register_Btn() {
    cy.get(this.form_register_btn)
      .should("exist")
      .and("be.enabled")
      .and("have.attr", "type", "submit")
      .and("have.attr", "id", "formregisterbutton")
      .click();
  }
  check_First_Name_Label() {
    cy.get(this.form_first_name_label)
      .should("exist")
      .and("have.attr", "for", "firstname")
      .and("have.text", "First Name");
    cy.log("First Name Label Veified!");
  }
  check_First_Name_Field(firstNameValue) {
    cy.get(this.form_first_name_value).should("exist").clear();
    cy.get(this.form_first_name_value)
      .should("exist")
      .and("be.visible")
      .and("have.attr", "id", "firstname")
      .and("have.attr", "type", "text")
      .and("have.attr", "name", "firstName")
      .and("have.attr", "placeholder", "Enter your First Name")
      .and("have.attr", "class", "form-control")
      .focus()
      .type(firstNameValue)
      .should("have.value", firstNameValue);
  }

  test_FirstName_Field(inputValue) {
    this.check_First_Name_Label();
    this.check_First_Name_Field(inputValue);
    this.click_on_Register_Btn();
  }
  check_Last_Name_Label() {
    cy.get(this.form_last_name_label)
      .should("exist")
      .and("have.attr", "for", "lastname")
      .and("have.text", "Last Name");
    cy.log("Last Name Label Veified!");
  }
  check_Last_Name_Field(lastNameValue) {
    cy.get(this.form_last_name_value).should("exist").clear();
    cy.get(this.form_last_name_value)
      .should("exist")
      .and("be.visible")
      .and("have.attr", "id", "lastname")
      .and("have.attr", "type", "text")
      .and("have.attr", "name", "lastName")
      .and("have.attr", "placeholder", "Enter your Last Name")
      .and("have.attr", "class", "form-control")
      .focus()
      .type(lastNameValue)
      .should("have.value", lastNameValue);
  }

  test_LastName_Field(inputValue) {
    this.check_Last_Name_Label();
    this.check_Last_Name_Field(inputValue);
    this.click_on_Register_Btn();
  }

  verify_gender_label(index, value) {
    cy.get(this.form_gender_parent)
      .find(".form-check-label")
      .eq(index)
      .should("exist")
      .and("have.attr", "id", value);
  }
  select_Click_Radio_Gender(index, radioValue) {
    cy.get(this.form_gender_parent)
      .find(".form-check-input")
      .eq(index)
      .should("exist")
      .and("have.attr", "type", "radio")
      .and("have.attr", "placeholder", "select Gender")
      .and("have.attr", "value", radioValue)
      .check()
      .and("be.checked");
  }

  select_Gender(index, labelvalue, radiovalue) {
    this.verify_gender_label(index, labelvalue);
    this.select_Click_Radio_Gender(index, radiovalue);
  }

  verify_Mobile_Number_Label() {
    cy.get(this.form_mobile_number_label)
      .should("exist")
      .and("be.visible")
      .and("have.attr", "for", "mobilenumber")
      .and("have.text", "Mobile Number");
  }
  check_Mobile_Number_Field(numvalue) {
    cy.get(this.form_mobile_number_value)
      .should("exist")
      .and("be.visible")
      .clear();
    cy.get(this.form_mobile_number_value)
      .should("exist")
      .and("be.visible")
      .and("have.attr", "name", "mobileNumber")
      .and("have.attr", "id", "mobileNumber")
      .and("have.attr", "class", "form-control")
      .and("have.attr", "placeholder", "Enter your Mobile Number")
      .and("have.attr", "type", "text")
      .type(numvalue)
      .should("have.attr", "value", numvalue);
  }
  test_Mobile_Number_Field(value) {
    this.verify_Mobile_Number_Label();
    this.check_Mobile_Number_Field(value);
    this.click_on_Register_Btn();
  }
  verify_Country_Label() {
    cy.get(this.form_country_label)
      .should("exist")
      .and("be.visible")
      .and("have.attr", "for", "country")
      .and("have.text", "Country");
  }
  check_Select_Country_Field(selectValue) {
    cy.get(this.form_country_value)
      .should("exist")
      .and("be.visible")
      .and("have.attr", "name", "country")
      .and("have.attr", "id", "country")
      .and("have.attr", "type", "select")
      .and("have.attr", "class", "form-control")
      .and("have.attr", "placeholder", "Select Your Country")
      .and("not.have.attr", "type", "text")
      .select(selectValue)
      .and("have.value", selectValue);
  }
  test_Select_Country_Field(select_CountryValue) {
    this.verify_Country_Label();
    this.check_Select_Country_Field(select_CountryValue);
  }
  verify_Email_Label() {
    cy.get(this.form_email_label)
      .should("exist")
      .and("be.visible")
      .and("have.attr", "for", "email")
      .and("have.text", "Email");
  }
  check_Email_Field(emailValue) {
    cy.get(this.form_email_value).should("exist").and("be.visible").clear();
    cy.get(this.form_email_value)
      .should("exist")
      .and("be.visible")
      .and("have.attr", "name", "email")
      .and("have.attr", "id", "email")
      .and("have.attr", "type", "email")
      .and("have.attr", "class", "form-control")
      .and("have.attr", "placeholder", "Enter your Email")
      .type(emailValue)
      .should("have.value", emailValue);
  }
  test_Email_Field(emailValue) {
    this.verify_Email_Label();
    this.check_Email_Field(emailValue);
    this.click_on_Register_Btn();
  }
  verify_Password_Field() {
    cy.get(this.form_password_label)
      .should("exist")
      .and("be.visible")
      .and("have.attr", "for", "password")
      .and("have.text", "Password");
  }
  clear_Password_Field() {
    cy.get(this.form_password_value).should("exist").and("be.visible").clear();
  }
  //Password-Wrong Password(Lentgh < 8)
  pass_false_New_Password_len_false_Field(newPassValue) {
    cy.get(this.form_password_value)
      .should("exist")
      .and("be.visible")
      .and("have.attr", "name", "password")
      .and("have.attr", "id", "password")
      .and("have.attr", "type", "password")
      .and("have.attr", "class", "form-control")
      .and("have.attr", "placeholder", "Enter your Password")
      .focus()
      .should("exist")
      .and("have.focus")
      .type(newPassValue)
      .should("have.attr", "value", newPassValue)
      .invoke("text")
      .then(() => {
        const splitData = [...newPassValue];
        cy.log("Count Characters of Password", splitData);
        expect(splitData).to.have.length.at.most(9);
      });
  }

  //Password-Wrong Password(Lentgh > 8)
  pass_false_New_Password_len_true_Field(newPassValue) {
    cy.get(this.form_password_value)
      .should("exist")
      .and("be.visible")
      .and("have.attr", "name", "password")
      .and("have.attr", "id", "password")
      .and("have.attr", "type", "password")
      .and("have.attr", "class", "form-control")
      .and("have.attr", "placeholder", "Enter your Password")
      .should("exist")
      .and("be.visible")
      .and("be.enabled")
      .type(newPassValue)
      .should("have.attr", "value", newPassValue)
      .invoke("text")
      .then(() => {
        const splitData = [...newPassValue];
        cy.log("Count Characters of Password", splitData);
        expect(splitData).to.have.length.at.least(10);
      });
  }

  //Password-True Password(Lentgh > 8)
  pass_true_New_Password_len_true_Field(newPassValue) {
    cy.get(this.form_password_value)
      .should("exist")
      .and("be.visible")
      .and("have.attr", "name", "password")
      .and("have.attr", "id", "password")
      .and("have.attr", "type", "password")
      .and("have.attr", "class", "form-control")
      .and("have.attr", "placeholder", "Enter your Password")
      .should("exist")
      .and("be.enabled")
      .type(newPassValue)
      .should("have.attr", "value", newPassValue)
      .invoke("text")
      .then(() => {
        const splitData = [...newPassValue];
        cy.log("Count Characters of Password", splitData);
        expect(splitData).to.have.length.at.least(10);
      });
  }

  verify_Confirm_Password_Label() {
    cy.get(this.form_confirm_password_label)
      .should("exist")
      .and("be.visible")
      .and("have.attr", "for", "confirmpassword")
      .and("have.text", "Confirm Password");
  }
  check_Confirm_Password_Field(confimPassValue) {
    cy.get(this.form_confirm_password_value).should("exist").clear();
    cy.get(this.form_confirm_password_value)
      .should("exist")
      .and("be.visible")
      .and("have.attr", "name", "confirmPassword")
      .and("have.attr", "id", "confirmPassword")
      .and("have.attr", "type", "password")
      .and("have.attr", "class", "form-control")
      .and("have.attr", "placeholder", "Enter your Confirm Password")
      .type(confimPassValue)
      .should("have.attr", "value", confimPassValue);
  }
}
