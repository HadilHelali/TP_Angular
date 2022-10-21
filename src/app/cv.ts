import * as uuid from 'uuid';

export class Cv {
  id :any;
  name:string = 'fouleni';
  firstname:string = 'foulen';
  age:number =22;
  CIN:number = 159159159;
  job:string = '7ata chay';
  path:string= 'assets/images/tim_logo.png';

  constructor(name: string , firstname: string , age: number , CIN: number , job: string , path: string ) {
      this.id = uuid.v4();
      this.name = name ;
      this.firstname = firstname;
      this.age = age;
      this.CIN = CIN;
      this.job = job;
      this.path = path;

  }
}
