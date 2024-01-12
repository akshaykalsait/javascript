console.log(`==========================Step 1==========================`);

class Vehicle {
  constructor(company, model, prize, average, seater) {
    this.company = company;
    this.model = model;
    this.prize = prize;
    this.average = average;
    this.seater = seater;
  }
  getDetails() {
    console.log(
      `Vehicle company is: ${this.company}, Model is: ${this.model}, prize is: ${this.prize}, average is: ${this.average}, seater: ${this.seater}`
    );
  }
}

const mahindra = new Vehicle(
  "Mahindra",
  "Scorpio-N",
  "24.54L",
  "13.67 Km/L",
  7
);
const toyota = new Vehicle("Toyota", "Enova Crysta", "19.99L", "12.0 Km/L", 7);
const marutiSuzuki = new Vehicle(
  "marutiSuzuki",
  "Ertiga VXI",
  "10.73L",
  "20.05 Km/L",
  7
);
const bmw = new Vehicle("BMW", "X1", "48.90L", "20.37 Km/L", 5);
const audi = new Vehicle("Audi", "Q8", "2.22CR", "9.8 Km/L", 5);

arrayOfVehicles = [mahindra, toyota, marutiSuzuki, bmw, audi];
for (const element of arrayOfVehicles) {
  element.getDetails();
}

console.log(`==========================Step 2==========================`);

class College {
  constructor(name, address, course, fees) {
    this.name = name;
    this.address = address;
    this.course = course;
    this.fees = fees;
  }
  display() {
    console.log(
      `College Name: ${this.name}, College address is: ${this.address}, College course is: ${this.course}, College Fees: ${this.fees}`
    );
  }
}
const Symbiosis = new College("Symbiosis ", "Pune", "Engineering", "1.5L");
const COEP = new College("COEP", "Pune", "BCA", "1L");
const MIT = new College("MIT", "Mumbai", "Designing", "2.3L");
const NIBM = new College("NIBM", "Chennai", "Agriculture", "3.5L");

Symbiosis.display();
COEP.display();
MIT.display();
NIBM.display();

console.log(`==========================Step 3==========================`);

function traverseObject(obj) {
  //array = [Symbiosis  , COEP , MIT , NIBM];
  for (const key in obj) {
    if (obj.hasOwnProperty.call(obj, key)) {
      const element = obj[key];
      console.log(`Key ==> ${key}, Value ==> ${element}`);
    }
  }
}
console.log(`---------------- By passing 1st object----------------------`);
traverseObject(Symbiosis);

console.log(`---------------- By passing 2nd object----------------------`);
traverseObject(COEP);

console.log(`---------------- By passing 3rd object----------------------`);
traverseObject(MIT);

console.log(`---------------- By passing 4th object----------------------`);
traverseObject(NIBM);
