import React from 'react';
import logo from './logo.svg';
import './App.css';

let a: number | null =10;
let name: string = "it"
let isSamurai: boolean | null = true;
isSamurai = null;

let names: Array<string> = ["Yeva", "Max", "Helen"]
let forSc: string;

names.forEach(n => {
  forSc = n.toUpperCase()
})

let sex: "male" | "female"
sex = "male"

//Decorator


//Generic
//ES6 syntax

const getter = <T>(data: T): T => data;

// ES5 syntax 
function getter<T>(data:T): T {
  return data;
  
}


// Interface
interface User {
  name: string,
  age: number
}

interface Pass {
  getPass(): string,
}

class Yana implements User, Pass {
  name: string = 'Yana';
  age: number = 31;
  getPass() {
    return ``
  }
}

// Types

type AddressType = {
  city?: string,
  country: string
}

type UserType = {
  sayHello: (message: string) => void,
  name: string,
  age: number,
  isSamurai: boolean,
  address: AddressType | null
}

let user: UserType = {
  sayHello(message:string) {alert('yo')},
  name: "Dima",
  age: 32,
  isSamurai: true,
  address: {
    country: "Belarus"
  }
}

const sum = (a= 10,b= 0) => {
  return a + b
}

console.log(sum(10, +"20"))

console.log(user.sayHello)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>{forSc}</h1>
      </header>
    </div>
  );
}

export default App;
