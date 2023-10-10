class Vehicle{
    vehicleModel
    color
    fuelType
    noOfWheels
    seatingCapacity
    constructor(vehicleModel,color,fuelType,noOfWheels,seatingCapacity){
        this.vehicleModel=vehicleModel;
        this.color=color;
        this.fuelType=fuelType;
        this.noOfWheels=noOfWheels;
        this.seatingCapacity=seatingCapacity;
    }
 }
 const sedanCar = new Vehicle("Model S","Red","Petrol","4",">5");
 const bmwCar = new Vehicle("BMW X6","Carbon Black","Diesel","4","5");
 const volkswagenCar = new Vehicle("Polo","Blue","Petrol","4","5");
 const tataSafariCar = new Vehicle("facelift","Daytona Grey","Petrol","4",">5");
 const ferrariCar = new Vehicle("Purosangue","Red","Petrol","4","5");

 const arrayOfVehicles=[sedanCar,bmwCar,volkswagenCar,tataSafariCar,ferrariCar];

 for (let i in arrayOfVehicles) {
    const vehicle = arrayOfVehicles[i];
    console.log(`Vehicle ${parseInt(i) + 1}: vehicleModel - ${vehicle.vehicleModel}, color - ${vehicle.color}, fuelType - ${vehicle.fuelType}, noOfWheels - ${vehicle.noOfWheels}, seatingCapacity - ${vehicle.seatingCapacity}`);
  }

  class College{
    collegeName
    address
    University
    noOfDepartments
    constructor(collegeName,address,University,noOfDepartments){
        this.collegeName=collegeName;
        this.address=address;
        this.University=University;
        this.noOfDepartments=noOfDepartments;
      }
      display(){
        console.log(`College name :- ${this.collegeName} , address :- ${this.address}, University :- ${this.University}, noOfDepartments :- ${this.noOfDepartments}`);
      }

}
const coepCollege=new College("COEP","PUNE","PUNE UNIVERSITY","8");
coepCollege.display();
const patilCollege=new College("Dr. D.Y. Patil college","PUNE","PUNE UNIVERSITY","9");
patilCollege.display();
const bharatiCollege=new College("Bharati vidyapith","PUNE","PUNE UNIVERSITY","7");
bharatiCollege.display();
const symbiosisCollege=new College("Symbiosis","PUNE","PUNE UNIVERSITY","4");
symbiosisCollege.display();

function traverseObject(collegeArray) {
    console.log(`========= Details of ${collegeArray.collegeName} ==============`);
    for (const key in collegeArray) {
       console.log(`(${key}, ${collegeArray[key]})`);
    }
}
traverseObject(coepCollege);
traverseObject(patilCollege);
traverseObject(bharatiCollege);
traverseObject(symbiosisCollege);