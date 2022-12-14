import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css'],
})
export class PromesasComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.getusuarios().then((res) => console.log(res));
    // const promesa = new Promise((resolve, reject) => {
    //   if(false)
    //     resolve('Hola Mundo');
    //   else
    //     reject('Algo salio mal');
    // });

    // promesa.then(res => console.log(res))
    // .catch(reason => console.log(reason));

    // console.log('Fin del init');
  }

  getusuarios() {
    return new Promise((resolve, reject) => {
      fetch('https://reqres.in/api/users?page=2')
        .then((response) => response.json())
        .then((body) => resolve(body.data));
    });
  }
}
