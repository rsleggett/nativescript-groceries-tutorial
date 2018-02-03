import { Component } from "@angular/core";
import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "my-app",
  templateUrl: "./pages/login/login.html",
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})

export class LoginComponent {

  user: User;
  isLoggingIn = true;

  constructor(private userService: UserService, private router: Router) {
    this.user = new User();
    this.user.email = "rob@groceries.com";
    this.user.password = "password";
  }

  submit() {
    if(this.isLoggingIn) {
      this.login();
    } else {
      this.signup();
    }
  }

  login(): any {
    this.userService.login(this.user).subscribe(
        () => this.router.navigate(["/list"]),
        (error) => alert("Unforunately we could not find your account.")
    )
  }

  signup() {
    this.userService.register(this.user)
      .subscribe(
        () => {
          alert("Your account was successfully created.");
          this.toggleDisplay();
        },
        () => alert("Unforunately we were unable to create your account")
      );
  }

  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}