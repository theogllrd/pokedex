import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { PokemonService } from 'src/app/pokemons/pokemon.service';
import { Token } from 'src/app/models/token.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm;

  private token: Token;

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  
  

  constructor(private formBuilder: FormBuilder, private snackBar: MatSnackBar, private pokemonService: PokemonService) {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  onSubmit(loginData) {


    if (loginData.email === '' ) { return this.displaySnackBar('Email required', 'X', 2000); }
    if (loginData.password === '' ) { return this.displaySnackBar('Password required', 'X', 2000); }
    

    console.warn('login : ', loginData);

    this.pokemonService.connexion(loginData).pipe(
      tap(myResult => {
          sessionStorage.setItem('token', myResult)
      }).subscribe()

    );
    console.log(this.token);


/*
// CODE DE NICO
    login(customerData){
      console.warn('login/passwd :', customerData);
      // console.log(this.checkoutForm);
      this.pokemonService.login(this.checkoutForm.value).pipe(
          tap(myResult => {
                sessionStorage.setItem("token", myResult.access_token), sessionStorage.setItem("refresh", myResult.refresh_token),
                sessionStorage.setItem("expire", myResult.expires_in);
                this.testLogin();
              })
          ).subscribe();
      console.log(sessionStorage.getItem("token"));
      console.log(sessionStorage.getItem("refresh"));
      console.log(sessionStorage.getItem("expire"));
  
    }
  
    testLogin(){
      if (sessionStorage.getItem("token") != null){
        console.log("c'est good");
        this.router.navigate(["/pokedex"]);
      }
    }
*/





  }

  

  ngOnInit() {
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' : '';
  }

  displaySnackBar(message: string, action: string, duration: number) {
    this.snackBar.open(message, action, { duration });
  }

  

}
