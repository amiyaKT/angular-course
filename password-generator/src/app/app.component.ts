import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private password: string = '';
  private includeLetters: boolean = false;
  private includeNumbers: boolean = false;
  private includeSymbols: boolean = false;
  private passwordLength: number = 0;

  onButtonClick() {
    const numbers = '0123456789';
    const letters = 'qwertyuioplkjhgfdsazxcvbnm';
    const symbols = '!@#$%^&*()';

    let validChars = '';

    if (this.includeLetters) {
      validChars += letters;
    }

    if (this.includeNumbers) {
      validChars += numbers;
    }

    if (this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';

    for (let i = 0; i < this.passwordLength; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;
  }

  onChangeLength(passwordLength: number) {
    if (passwordLength === null) {
      this.passwordLength = 0;
    } else {
      if (!isNaN(passwordLength)) {
        this.passwordLength = passwordLength;
      }
    }
  }

  onChangeLetters() {
    this.includeLetters = !this.includeLetters;
  }
  onChangeNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }
  onChangeSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  get getPassword() {
    return this.password;
  }

  get getIncludeLetters() {
    return this.includeLetters;
  }

  get getIncludeNumbers() {
    return this.includeNumbers;
  }

  get getIncludeSymbols() {
    return this.includeSymbols;
  }

  get getPasswordLength() {
    return this.passwordLength;
  }
}
