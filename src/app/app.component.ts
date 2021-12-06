import { Component } from '@angular/core';
import { FormControl } from "@angular/forms";
import { Candidate } from "./models/candidate";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  age = new FormControl('');
  result!: string;
  candidates: Candidate[] = [];

  genderSelected!: string;
  languageSelected!: string;
  experienceSelected!: string;
  programmingLanguageSelected!: string;
  recomendationSelected!: string;

  genders = [
    {value: 'male-0', viewValue: 'Мужчина'},
    {value: 'female-1', viewValue: 'Женщина'},
  ];

  languages = [
    {value: 'ru-0', viewValue: 'Русский'},
    {value: 'en-1', viewValue: 'English'},
  ];

  experiences = [
    {value: 'moreThanFour-0', viewValue: 'Больше четырех лет'},
    {value: 'lessThanFour-1', viewValue: 'Меньше четырех лет'},
  ];

  programmingLanguages = [
    {value: 'Java-0', viewValue: 'Java'},
    {value: 'C#-1', viewValue: 'C#'},
    {value: 'Python-2', viewValue: 'Python'},
  ]

  recomendation = [
    {value: 'yes-0', viewValue: 'Yes'},
    {value: 'no-1', viewValue: 'No'},
  ]

  public CalculateRes() {
    if (this.programmingLanguageSelected === 'Java-0') {
      if (this.experienceSelected === 'moreThanFour-0') {
        this.result = 'Вы приняты!';
      } else {
        if (this.languageSelected === 'en-1') {
          this.result = 'Вы приняты!';
        } else {
          if (this.recomendationSelected === 'yes-0') {
            this.result = 'Вы приняты!';
          } else {
            this.result = 'К сожалению, вы нам не подходите';
          }
        }
      }
    } else {
      this.result = 'К сожалению, вы нам не подходите';
    }

    let candidate: Candidate = {
      age: this.age.value,
      language: this.languageSelected,
      gender: this.genderSelected,
      experience: this.experienceSelected,
      prLanguage: this.programmingLanguageSelected,
    }
    console.log(candidate);
    console.log(this.candidates);
    this.candidates.push(candidate);
  }
}
