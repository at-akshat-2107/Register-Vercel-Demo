import { UserFormPage } from "../pageObjects/UserFormObject";

const userForm = new UserFormPage();

describe("User Form Test Cases", () => {
  it("Go to WebPage", () => {
    cy.visit("https://register-vercel-demo.vercel.app/");
  });
  describe("First Name Field Test Cases", () => {
    it("First Name->Empty Field Not Allowed", () => {
      userForm.check_First_Name_Label();
      userForm.click_on_Register_Btn();
    });
    it("First Name->Numbers Not Allowed", () => {
      userForm.test_FirstName_Field("12547 85");
    });
    it("First Name->Special Characters Not Allowed", () => {
      userForm.test_FirstName_Field("@#$% ^&%$");
    });
    it("First Name->Spaces Allowed", () => {
      userForm.test_FirstName_Field("a b c d");
    });
    it("First Name->Capital Letters Allowed", () => {
      userForm.test_FirstName_Field("FIRSTNAME");
    });
    it("First Name->Small Letters Allowed", () => {
      userForm.test_FirstName_Field("firstname");
    });
    it("First Name->Capital and Numbers Not Allowed", () => {
      userForm.test_FirstName_Field("FIRST123");
    });
    it("First Name->Capital and Special Characters Not Allowed", () => {
      userForm.test_FirstName_Field("FI@RST@#$%");
    });
    it("First Name->Capital Letters and Spaces Allowed", () => {
      userForm.test_FirstName_Field("FIRST NAME DEMO");
    });
    it("First Name->Capital and Small Letters Allowed", () => {
      userForm.test_FirstName_Field("FirstName");
    });
    it("First Name->Small and Numbers Not Allowed", () => {
      userForm.test_FirstName_Field("first123");
    });
    it("First Name->Small and Special Characters Not Allowed", () => {
      userForm.test_FirstName_Field("firs@#tr$%q");
    });
    it("First Name->Small and Spaces Allowed", () => {
      userForm.test_FirstName_Field("first name");
    });
    it("First Name->Spaces and Numbers Not Allowed", () => {
      userForm.test_FirstName_Field("123 456 789");
    });
    it("First Name->Special Characters and Numbers Not Allowed", () => {
      userForm.test_FirstName_Field("@#78@#4568$%1*#");
    });
    it("First Name->Special Characters and Spaces Not Allowed", () => {
      userForm.test_FirstName_Field("#$% @#& *#!^");
    });
    it("First Name->Capital,Small and Numbers Not Allowed", () => {
      userForm.test_FirstName_Field("First123Name");
    });
    it("First Name->Capital,Small and Special Characters Not Allowed", () => {
      userForm.test_FirstName_Field("First@Name");
    });
    it("First Name->Capital,Small and Spaces Allowed", () => {
      userForm.test_FirstName_Field("First Name");
    });
    it("First Name->Capital,Small and Spaces Allowed", () => {
      userForm.test_FirstName_Field("Jinay");
    });
  });
  describe("Last Name Field Test Cases", () => {
    it("Last Name->Empty Field Not Allowed", () => {
      userForm.check_Last_Name_Label();
      userForm.click_on_Register_Btn();
    });
    it("Last Name->Numbers Not Allowed", () => {
      userForm.test_LastName_Field("56798");
    });
    it("Last Name->Special Characters Not Allowed", () => {
      userForm.test_LastName_Field("@#$%^&%$");
    });
    it("Last Name->Spaces Allowed", () => {
      userForm.test_LastName_Field("f D @ Q");
    });
    it("Last Name->Capital Letters Allowed", () => {
      userForm.test_LastName_Field("LASTNAME");
    });
    it("Last Name->Small Letters Allowed", () => {
      userForm.test_LastName_Field("lastname");
    });
    it("Last Name->Capital and Numbers Not Allowed", () => {
      userForm.test_LastName_Field("LAST123");
    });
    it("Last Name->Capital and Special Characters Not Allowed", () => {
      userForm.test_LastName_Field("!@LA@ST@$%");
    });
    it("Last Name->Capital Letters and Spaces Allowed", () => {
      userForm.test_LastName_Field("LAST NAME DEMO");
    });
    it("Last Name->Capital and Small Letters Allowed", () => {
      userForm.test_LastName_Field("LastName");
    });
    it("Last Name->Small and Numbers Not Allowed", () => {
      userForm.test_LastName_Field("last123");
    });
    it("Last Name->Small and Special Characters Not Allowed", () => {
      userForm.test_LastName_Field("las@#tr$%q");
    });
    it("Last Name->Small and Spaces Allowed", () => {
      userForm.test_LastName_Field("last name");
    });
    it("Last Name->Spaces and Numbers Not Allowed", () => {
      userForm.test_LastName_Field("1 23 785 8 9");
    });
    it("Last Name->Special Characters and Numbers Not Allowed", () => {
      userForm.test_LastName_Field("52@#78@#454$%1*#");
    });
    it("Last Name->Special Characters and Spaces Not Allowed", () => {
      userForm.test_LastName_Field("@$ % @#& *#! ^");
    });
    it("Last Name->Capital,Small and Numbers Not Allowed", () => {
      userForm.test_LastName_Field("Last123Name");
    });
    it("Last Name->Capital,Small and Special Characters Not Allowed", () => {
      userForm.test_LastName_Field("Last@Name");
    });
    it("Last Name->Capital,Small and Spaces Allowed", () => {
      userForm.test_LastName_Field("Last Name");
    });
    it("Last Name->Capital,Small and Spaces Allowed", () => {
      userForm.test_LastName_Field("Shah");
    });
  });
  describe("Gender Field Test Cases", () => {
    it("Gender->No Any Option Selected", () => {
      userForm.click_on_Register_Btn();
    });
    it("Gender->Male Selected", () => {
      userForm.select_Gender(0, "Male", "male");
    });
    it("Gender->Female Selected", () => {
      userForm.select_Gender(1, "Female", "female");
    });
    it("Gender->Other Selected", () => {
      userForm.select_Gender(2, "Other", "other");
    });
    it("Gender->Fill Male Value", () => {
      userForm.select_Gender(0, "Male", "male");
    });
  });
  describe("Select Country Field Test Cases", () => {
    it("Select Country-Russia", () => {
      userForm.test_Select_Country_Field("Russia");
    });
    it("Select Country-Australia", () => {
      userForm.test_Select_Country_Field("Australia");
    });
    it("Select Country-Finland", () => {
      userForm.test_Select_Country_Field("Finland");
    });
    it("Select Country-Switzerland", () => {
      userForm.test_Select_Country_Field("Switzerland");
    });
    it("Select Country-India", () => {
      userForm.test_Select_Country_Field("India");
    });
    it("Select Country-Oman", () => {
      userForm.test_Select_Country_Field("Oman");
    });
    it("Select Country-Singapore", () => {
      userForm.test_Select_Country_Field("Singapore");
    });
    it("Select Country-Canada", () => {
      userForm.test_Select_Country_Field("Canada");
    });
    it("Select Country-United States of America", () => {
      userForm.test_Select_Country_Field("United States of America");
    });
    it("Select Country-United Kingdom", () => {
      userForm.test_Select_Country_Field("United Kingdom");
    });
    it("Select Country-Pakistan", () => {
      userForm.test_Select_Country_Field("Pakistan");
    });
    it("Select Country-Nepal", () => {
      userForm.test_Select_Country_Field("Nepal");
    });
    it("Select Country-India", () => {
      userForm.test_Select_Country_Field("India");
    });
  });
  describe("Mobile Number Field Test Cases", () => {
    it("Mobile Number->Empty Field", () => {
      userForm.verify_Mobile_Number_Label();
      userForm.click_on_Register_Btn();
    });
    it("Mobile Number->Capital Letters Not Allowed", () => {
      userForm.test_Mobile_Number_Field("MOBILENUMBER");
    });
    it("Mobile Number->Small Letters Not Allowed", () => {
      userForm.test_Mobile_Number_Field("mobilenumber");
    });
    it("Mobile Number->Special Characters Not Allowed", () => {
      userForm.test_Mobile_Number_Field("!@#$%&*()");
    });
    it("Mobile Number->Spaces Not Allowed", () => {
      userForm.test_Mobile_Number_Field("M o b i l e");
    });
    it("Mobile Number->Numbers with Capital Letters Not Allowed", () => {
      userForm.test_Mobile_Number_Field("99Q7458AWE");
    });
    it("Mobile Number->Numbers with Small Letters Not Allowed", () => {
      userForm.test_Mobile_Number_Field("85awed1247");
    });
    it("Mobile Number->Numbers with Special Characters Not Allowed", () => {
      userForm.test_Mobile_Number_Field("8547@#2#$1");
    });
    it("Mobile Number->Numbers with Spaces Not Allowed", () => {
      userForm.test_Mobile_Number_Field("95 5 74 745");
    });
    it("Mobile Number->Length-3(<10) Not Allowed", () => {
      userForm.test_Mobile_Number_Field("958");
    });
    it("Mobile Number->Length-5(<10) Not Allowed", () => {
      userForm.test_Mobile_Number_Field("95854");
    });
    it("Mobile Number->Length-9(<10) Not Allowed", () => {
      userForm.test_Mobile_Number_Field("958541423");
    });
    it("Mobile Number->Length-10 Allowed", () => {
      userForm.test_Mobile_Number_Field("9585414237");
    });
    it("Mobile Number->Length-10,start with 0 Not Allowed", () => {
      userForm.test_Mobile_Number_Field("0123456789");
    });
    it("Mobile Number->Length-10,start with 1 Not Allowed", () => {
      userForm.test_Mobile_Number_Field("1234567890");
    });
    it("Mobile Number->Length-10,start with 2 Not Allowed", () => {
      userForm.test_Mobile_Number_Field("2345678901");
    });
    it("Mobile Number->Length-10,start with 3 Not Allowed", () => {
      userForm.test_Mobile_Number_Field("3456789012");
    });
    it("Mobile Number->Length-10,start with 4 Not Allowed", () => {
      userForm.test_Mobile_Number_Field("4567890123");
    });
    it("Mobile Number->Length-10,start with 5 Not Allowed", () => {
      userForm.test_Mobile_Number_Field("5678901234");
    });
    it("Mobile Number->Length<10,start with 6 Not Allowed", () => {
      userForm.test_Mobile_Number_Field("6789123");
    });
    it("Mobile Number->Length<10,start with 7 Not Allowed", () => {
      userForm.test_Mobile_Number_Field("78912754");
    });
    it("Mobile Number->Length<10,start with 8 Not Allowed", () => {
      userForm.test_Mobile_Number_Field("87461");
    });
    it("Mobile Number->Length<10,start with 9 Not Allowed", () => {
      userForm.test_Mobile_Number_Field("957824177");
    });
    it("Mobile Number->Length=10,start with 6,Captital Letters Not Allowed", () => {
      userForm.test_Mobile_Number_Field("695A824B1C");
    });
    it("Mobile Number->Length=10,start with 7,Captital Letters Not Allowed", () => {
      userForm.test_Mobile_Number_Field("7ER578DCV1");
    });
    it("Mobile Number->Length=10,start with 8,Captital Letters Not Allowed", () => {
      userForm.test_Mobile_Number_Field("8G578DCV1A");
    });
    it("Mobile Number->Length=10,start with 9,Captital Letters Not Allowed", () => {
      userForm.test_Mobile_Number_Field("9SD8258AW7");
    });
    it("Mobile Number->Length=10,start with 6,Small Letters Not Allowed", () => {
      userForm.test_Mobile_Number_Field("6mb85wd74q");
    });
    it("Mobile Number->Length=10,start with 7,Small Letters Not Allowed", () => {
      userForm.test_Mobile_Number_Field("758eedf54a");
    });
    it("Mobile Number->Length=10,start with 8,Small Letters Not Allowed", () => {
      userForm.test_Mobile_Number_Field("852qa4sd79");
    });
    it("Mobile Number->Length=10,start with 9,Small Letters Not Allowed", () => {
      userForm.test_Mobile_Number_Field("98x5er2d85");
    });
    it("Mobile Number->Length=10,start with 6,Spaces Not Allowed", () => {
      userForm.test_Mobile_Number_Field("6 854 74 4");
    });
    it("Mobile Number->Length=10,start with 7,Spaces Not Allowed", () => {
      userForm.test_Mobile_Number_Field("7 25 412 1");
    });
    it("Mobile Number->Length=10,start with 8,Spaces Not Allowed", () => {
      userForm.test_Mobile_Number_Field("842 41 1 3");
    });
    it("Mobile Number->Length=10,start with 9,Spaces Not Allowed", () => {
      userForm.test_Mobile_Number_Field("9 256 4 14");
    });
    it("Mobile Number->Length=10,start with 6,Special Characters Not Allowed", () => {
      userForm.test_Mobile_Number_Field("62@14!@#12");
    });
    it("Mobile Number->Length=10,start with 7,Special Characters Not Allowed", () => {
      userForm.test_Mobile_Number_Field("751!@$415#");
    });
    it("Mobile Number->Length=10,start with 8,Special Characters Not Allowed", () => {
      userForm.test_Mobile_Number_Field("8527!@#$12");
    });
    it("Mobile Number->Length=10,start with 9,Special Characters Not Allowed", () => {
      userForm.test_Mobile_Number_Field("9@52$12%45");
    });
    it("Mobile Number->Length=10,start with 6,Numbers Allowed", () => {
      userForm.test_Mobile_Number_Field("6789012345");
    });
    it("Mobile Number->Length=10,start with 7,Numbers Allowed", () => {
      userForm.test_Mobile_Number_Field("7890123456");
    });
    it("Mobile Number->Length=10,start with 8,Numbers Allowed", () => {
      userForm.test_Mobile_Number_Field("8901234567");
    });
    it("Mobile Number->Length=10,start with 9,Numbers Allowed", () => {
      userForm.test_Mobile_Number_Field("9012345678");
    });
  });
  describe("Email Field Test Field Cases", () => {
    it("Email->Not Empty Field", () => {
      userForm.verify_Email_Label();
      userForm.click_on_Register_Btn();
    });
    it("Email->Dot is Not Present in Domain Name", () => {
      userForm.test_Email_Field("example@testcom");
    });
    it("Email->Double Dot is Not Allowed in Domain Name", () => {
      userForm.test_Email_Field("example..demo@testcom");
    });
    it("Email->At(@) Not Present in Domain Name", () => {
      userForm.test_Email_Field("exampletest.com");
    });
    it("Username(Subdomain) Not Present in Domain Name", () => {
      userForm.test_Email_Field("@test.com");
    });
    it("Email->Double Quotes Not Allowed in Username(Subdomain)", () => {
      userForm.test_Email_Field('example+"firstname"lastname@example.com');
    });

    it("Email->Only Dot Sign is Not Allowed in Username(Subdomain)", () => {
      userForm.test_Email_Field(".@test.com");
    });
    it("Email->Dot Sign with Capital Letters is Allowed in Username(Subdomain)", () => {
      userForm.test_Email_Field("EXAMPLE.EMAIL.DEMO@test.com");
    });
    it("Email->Dot Sign with Small Letters is Allowed in Username(Subdomain)", () => {
      userForm.test_Email_Field("example.email.demo@test.com");
    });
    it("Email->Dot Sign with Numbers is Allowed in Username(Subdomain)", () => {
      userForm.test_Email_Field("123.456.789@test.com");
    });
    it("Email->Dot Sign with Underscore is Allowed in Username(Subdomain)", () => {
      userForm.test_Email_Field("_._._@test.com");
    });
    it("Email->Dot Sign with Special Characters is Not Allowed in Username(Subdomain)", () => {
      userForm.test_Email_Field("!@#.$%^.$%^&@test.com");
    });

    it("Email->Only Plus sign Allowed in Username(Subdomain)", () => {
      userForm.test_Email_Field("+@gmail.com");
    });
    it("Email->Plus Sign with Capital Letters is Allowed in Username(Subdomain)", () => {
      userForm.test_Email_Field("EXAMPLE+EMAIL+DEMO@test.com");
    });
    it("Email->Plus Sign with Small Letters is Allowed in Username(Subdomain)", () => {
      userForm.test_Email_Field("example+email+demo@test.com");
    });
    it("Email->Plus Sign with Numbers is Allowed in Username(Subdomain)", () => {
      userForm.test_Email_Field("123+456+789@test.com");
    });
    it("Email->Plus Sign with Underscore is Allowed in Username(Subdomain)", () => {
      userForm.test_Email_Field("_+_+_@test.com");
    });
    it("Email->Plus Sign with Special Characters is Not Allowed in Username(Subdomain)", () => {
      userForm.test_Email_Field("!@#+$%^+$%+^&@test.com");
    });
    it("Email->Only Underscore sign Allowed in Username(Subdomain)", () => {
      userForm.test_Email_Field("_@gmail.com");
    });
    it("Email->Underscore Sign with Capital Letters is Allowed in Username(Subdomain)", () => {
      userForm.test_Email_Field("EXAMPLE_EMAIL_DEMO@test.com");
    });
    it("Email->Underscore Sign with Small Letters is Allowed in Username(Subdomain)", () => {
      userForm.test_Email_Field("example_email_demo@test.com");
    });
    it("Email->Underscore Sign with Numbers is Allowed in Username(Subdomain)", () => {
      userForm.test_Email_Field("123_456_789@test.com");
    });
    it("Email->Underscore Sign with Special Characters is Not Allowed in Username(Subdomain)", () => {
      userForm.test_Email_Field("!@#_$%^_$%_^&@test.com");
    });
    it("Email->Only Capital Letters Allowed in Username(Subdomain)", () => {
      userForm.test_Email_Field("TESTEMAIL@example.com");
    });
    it("Email->Capital Letters with Small Letters is Allowed in Username(Subdomain)", () => {
      userForm.test_Email_Field("EXAMPLEtestDEMO@test.com");
    });
    it("Email->Capital Letters with Special Characters is Allowed in Username(Subdomain)", () => {
      userForm.test_Email_Field("EXAMPLE_$%^DEMO_$%_^&@test.com");
    });
    it("Email->Capital Letters with Numbers is Allowed in Username(Subdomain)", () => {
      userForm.test_Email_Field("EXAMPLE123DEMO@test.com");
    });
    it("Email->Only Small Letters Allowed in Username(Subdomain)", () => {
      userForm.test_Email_Field("testemail@example.com");
    });
    it("Email->Small Letters with Special Characters is Allowed in Username(Subdomain)", () => {
      userForm.test_Email_Field("example_$%^demo_$%_^&@gmail.com");
    });
    it("Email->Small Letters with Numbers is Allowed in Username(Subdomain)", () => {
      userForm.test_Email_Field("example123demo@gmail.com");
    });
    it("Email->Only Numbers Allowed in Username(Subdomain)", () => {
      userForm.test_Email_Field("123456@example.com");
    });
    it("Email->Only Special Characters Allowed in Username(Subdomain)", () => {
      userForm.test_Email_Field("#$%*!@example.com");
    });
    it("Email->Numbers with Special Characters is Allowed in Username(Subdomain)", () => {
      userForm.test_Email_Field("example123demo@gmail.com");
    });
    it("Email->Fill Value", () => {
      userForm.test_Email_Field("jinay.shah.458@gmail.com");
    });
  });
  describe("Password Field Test Cases", () => {
    it("Password->Not Empty Field", () => {
      userForm.verify_Password_Field();
      userForm.click_on_Register_Btn();
    });
    describe("Wrong Combinations for  Password", () => {
      describe("New Password have Length less than 10 Characters", () => {
        it("New Password(with Length < 10)-only Capitals", () => {
          userForm.verify_Password_Field();
          userForm.pass_false_New_Password_len_false_Field("TESTING");
          userForm.click_on_Register_Btn();
        });
        it("New Password(with Length < 10)-only Small Letters", () => {
          userForm.clear_Password_Field();
          userForm.verify_Password_Field();
          userForm.pass_false_New_Password_len_false_Field("testing");
          userForm.click_on_Register_Btn();
        });
        it("New Password(with Length < 10)-only Numbers", () => {
          userForm.clear_Password_Field();
          userForm.verify_Password_Field();
          userForm.pass_false_New_Password_len_false_Field("1234567");
          userForm.click_on_Register_Btn();
        });
        it("New Password(with Length < 10)-only Special Characters", () => {
          userForm.clear_Password_Field();
          userForm.verify_Password_Field();
          userForm.pass_false_New_Password_len_false_Field("!@#$%^*");
          userForm.click_on_Register_Btn();
        });
        it("New Password(with Length < 10)-Capital and Small Letters", () => {
          userForm.clear_Password_Field();
          userForm.verify_Password_Field();
          userForm.pass_false_New_Password_len_false_Field("TESTing");
          userForm.click_on_Register_Btn();
        });
        it("New Password(with Length < 10)-Captital and Numbers", () => {
          userForm.clear_Password_Field();
          userForm.verify_Password_Field();
          userForm.pass_false_New_Password_len_false_Field("TEST123");
          userForm.click_on_Register_Btn();
        });
        it("New Password(with Length < 10)-Captial and Special Characters", () => {
          userForm.clear_Password_Field();
          userForm.verify_Password_Field();
          userForm.pass_false_New_Password_len_false_Field("TEST@#$");
          userForm.click_on_Register_Btn();
        });
        it("New Password(with Length < 10)-Small Letters and Numbers", () => {
          userForm.clear_Password_Field();
          userForm.verify_Password_Field();
          userForm.pass_false_New_Password_len_false_Field("test123");
          userForm.click_on_Register_Btn();
        });
        it("New Password(with Length < 10)-Small Letters and Special Characters", () => {
          userForm.clear_Password_Field();
          userForm.verify_Password_Field();
          userForm.pass_false_New_Password_len_false_Field("test@#$");
          userForm.click_on_Register_Btn();
        });
        it("New Password(with Length < 10)-Numbers and Special Characters", () => {
          userForm.clear_Password_Field();
          userForm.verify_Password_Field();
          userForm.pass_false_New_Password_len_false_Field("1234@#$");
          userForm.click_on_Register_Btn();
        });
      });
      describe("New Password have Length more than or equal to 10 Characters", () => {
        it("New Password(with Length >= 10)-only Capitals", () => {
          userForm.clear_Password_Field();
          userForm.verify_Password_Field();
          userForm.pass_false_New_Password_len_true_Field("PASSTESTING");
          userForm.click_on_Register_Btn();
        });
        it("New Password(with Length >= 10)-only Small Letters", () => {
          userForm.clear_Password_Field();
          userForm.verify_Password_Field();
          userForm.pass_false_New_Password_len_true_Field("passtesting");
          userForm.click_on_Register_Btn();
        });
        it("New Password(with Length >= 10)-only Numbers", () => {
          userForm.clear_Password_Field();
          userForm.verify_Password_Field();
          userForm.pass_false_New_Password_len_true_Field("123456789012");
          userForm.click_on_Register_Btn();
        });
        it("New Password(with Length >= 10)-only Special Characters", () => {
          userForm.clear_Password_Field();
          userForm.verify_Password_Field();
          userForm.pass_false_New_Password_len_true_Field("!@#$%^*#@#$%^&*");
          userForm.click_on_Register_Btn();
        });
        it("New Password(with Length >= 10)-Capital and Small Letters", () => {
          userForm.clear_Password_Field();
          userForm.verify_Password_Field();
          userForm.pass_false_New_Password_len_true_Field("PASSWORDtesting");
          userForm.click_on_Register_Btn();
        });
        it("New Password(with Length >= 10)-Captital and Numbers", () => {
          userForm.clear_Password_Field();
          userForm.verify_Password_Field();
          userForm.pass_false_New_Password_len_true_Field("TESTING12345678");
          userForm.click_on_Register_Btn();
        });
        it("New Password(with Length < 10)-Captial and Special Characters", () => {
          userForm.clear_Password_Field();
          userForm.verify_Password_Field();
          userForm.pass_false_New_Password_len_true_Field("TESTING@#$$%^&@#");
          userForm.click_on_Register_Btn();
        });
        it("New Password(with Length >= 10)-Small Letters and Numbers", () => {
          userForm.clear_Password_Field();
          userForm.verify_Password_Field();
          userForm.pass_false_New_Password_len_true_Field("testing123456789");
          userForm.click_on_Register_Btn();
        });
        it("New Password(with Length >= 10)-Small Letters and Special Characters", () => {
          userForm.clear_Password_Field();
          userForm.verify_Password_Field();
          userForm.pass_false_New_Password_len_true_Field("testing@#$%@#$@#");
          userForm.click_on_Register_Btn();
        });
        it("New Password(with Length >= 10)-Numbers and Special Characters", () => {
          userForm.clear_Password_Field();
          userForm.verify_Password_Field();
          userForm.pass_false_New_Password_len_true_Field("123456789@#$@#$%");
          userForm.click_on_Register_Btn();
        });
      });
    });
    describe("Right Combinations for New Password", () => {
      describe("New Password have Length less than 10 Characters--->Save Button Disable", () => {
        it("New Password(with Length < 10)-Capital,small,Number,Special Characters", () => {
          userForm.clear_Password_Field();
          userForm.verify_Password_Field();
          userForm.pass_false_New_Password_len_false_Field("Tes@12");
          userForm.click_on_Register_Btn();
        });
      });

      describe("Right New Password", () => {
        it("New Password(with Length >= 10)-Capital,small,Number,Special Characters", () => {
          userForm.clear_Password_Field();
          userForm.verify_Password_Field();
          userForm.pass_true_New_Password_len_true_Field("Test@123#Demo");
          userForm.click_on_Register_Btn();
        });
      });
    });
  });
  describe("Confirm Password Field Test Cases", () => {
    it("Confirm Password->Not Empty Field", () => {
      userForm.verify_Confirm_Password_Label();
      userForm.click_on_Register_Btn();
    });
    it("Enter Value--Save Button Disable(Password Conditions Not Fullfilled)", () => {
      userForm.verify_Confirm_Password_Label();
      userForm.check_Confirm_Password_Field("Password@#12");
      userForm.click_on_Register_Btn();
    });
    it("Enter Value--Save Button Enable(Password Conditions Not Fullfilled)", () => {
      userForm.verify_Confirm_Password_Label();
      userForm.check_Confirm_Password_Field("Test@123#Demo");
      userForm.click_on_Register_Btn();
    });
  });
});
