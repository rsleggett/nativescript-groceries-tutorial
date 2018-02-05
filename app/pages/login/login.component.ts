import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";
import { Router } from "@angular/router";
import { Page } from "ui/page";
import { Color } from "color";
import { View } from "ui/core/view"

@Component({
  selector: "my-app",
  templateUrl: "./pages/login/login.html",
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})

export class LoginComponent implements OnInit{

  user: User;
  isLoggingIn = true;
  @ViewChild("container") container: ElementRef;

  constructor(
    private userService: UserService, 
    private router: Router,
    private page: Page
  ) {
    this.user = new User();
    this.user.email = "rob@groceries.com";
    this.user.password = "password";
  }

  ngOnInit() {
    this.page.actionBarHidden = true;
    this.page.backgroundImage = "res://bg_login";
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
    let container = <View>this.container.nativeElement;
    container.animate({
      backgroundColor: this.isLoggingIn ? new Color("white") : new Color("#301217"),
      duration: 200
    });
  }
}