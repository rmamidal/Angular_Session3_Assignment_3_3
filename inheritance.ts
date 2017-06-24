/**
 * Animal class, with name parameter and move, makeSound methodes.
 * @class Animal,
 */
class Animal {
    protected name: string; // name property.

    //Constructer.
    constructor (animalName:string) {
        this.name = animalName;
    }

    // move method to pring distance covered by animal.
    move(distance:number):void {
        console.log(this.name + " covers " + distance + "KMPH");
    }

    // makeSound method to pring sound made by animal.
    makeSound(sound:string):void {
        console.log(this.name + " makes sound \"" + sound + "\"");
    }
}

// Tigaer class inheriting Animal.
class Tiger extends Animal {
  private color:string;
  
  // Tiger constructor.
  constructor(name:string, tigerColor:string) {
      super(name);
      this.color = tigerColor;
  }

  // Method to display tiger infromation.
  dispalyTigerInfo():void {
    console.log("Tiger with Name: " + this.name + " is "+ this.color + "in Color");
  }
}

// parrot class inheriting Animal.
class Parrot extends Animal {
  private noOfLegs:number;
  
  // Parrot constructor.
  constructor(name:string, legs:number) {
      super(name);
      this.noOfLegs = legs;
  }

  // Method to display parrot information.
  dispalyParrotInfo():void {
      console.log("Parrot with Name: " + this.name + ", number of Legs: "+ this.noOfLegs);
  }
}

let whiteTiger = new Tiger("Shera", "White"); // Object of tiger created.
whiteTiger.move(100); // Shera covers 100KMPH
whiteTiger.makeSound("Roaaar"); // Shera makes sound "Roaaar"
whiteTiger.dispalyTigerInfo(); // Tiger with Name: Shera, Color: White

let twoLegsparrot = new Parrot("Chiluka", 2); // Object of parrot created.
twoLegsparrot.move(20); //Chiluka covers 20KMPH
twoLegsparrot.makeSound("Chichu, chichu"); // Chiluka makes sound "Chichu, chichu"
twoLegsparrot.dispalyParrotInfo(); // Parrot with Name: Chiluka, number of Legs: 2
