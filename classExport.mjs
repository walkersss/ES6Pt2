class People {
  constructor(name, matricNo, major) {  
      this.name = name;
      this.matricNo = matricNo;
      this.major = major;
    }
  get Name() {
      return this.name;
    }
  
  set Name(name) {
      this.name = name;
    }
  get MatricNo() {
      return this.matricNo;
    }
  
  set MatricNo(_matricNo) {
      this.matricNo;
    }
  get Major() {
      return this.major;
    }
  
  set Major(major) {
      this.major;
    }
  
  display(){
    console.log(`Name:${this.name}`);
    console.log(`Matric No.:${this.matricNo}`);
    console.log(`Major:${this.major}`);
  }
}
export {People};