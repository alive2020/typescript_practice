// Basic types
let id:number = 5;
let company:string = 'Ice Calee';
let isPublished:boolean = true;
let x:any = 'Hello';
let ids: number[] = [1,2,3,4,5];
let arr: any[] = [1, true, 'Hello'];

//Tuple
let person: [number, string, boolean] = [1, 'Brad', true];

//Tuple Array
let employee: [number, string][];
employee = [
    [1, "Brad"],
    [2, "Liam"],
    [3, "Kat"],
]

// Union
let pid: string | number;
pid = '22';

//Enum 
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right
}

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = "Left",
    Right = 'Right'
}

// console.log(Direction2.Down)

//Objects
type User = {
    id: number,
    name: string
}

const user: User = {
    id:1,
    name: 'John'
}

// Type Assertion
let cid: any = 1;
// let customerId = <number>cid;
let customerId = cid as number;

// Functions
function addNum(x:number,y:number):number {
    return x + y
}

//Void
function log(message: string | number): void{
    console.log(message)
}

//Interfaces 
interface UserInterface {
    readonly id: number,
    name: string,
    age?: number
}

const user1: UserInterface = {
    id:1,
    name: 'John'
}

// user1.id = 5;

interface MathFunc {
    (x:number, y:number): number
}

const add: MathFunc = (x:number, y:number):number => x + y;
const sub: MathFunc = (x:number, y:number):number => x - y;

//Classes - ES6
class Person {
    id: number;
    name: string;

    constructor(id:number, name:string) {
        this.id = id;
        this.name = name;
}

const brad = new Person()
