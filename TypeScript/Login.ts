export class Employees1 {
    empid: number;
    empName: string;
    empAge: number;
    empSalary: number;
    readonly offer: number;
    static companyName = "ABC";

    constructor(id: number, name: string, age: number, salary: number, offer: number) {
        this.empid = id;
        this.empName = name;
        this.empAge = age;
        this.empSalary = salary;
        this.offer = offer;
    }

    // Display employee info
    employeeInformation(): void {
        console.log(`Name: ${this.empName}, Age: ${this.empAge}, Salary: ${this.empSalary}, Offer: ${this.offer}, Company: ${Employees1.companyName}`);
    }


    static displayCompanyName(): void {
        console.log(`Company name is ${Employees1.companyName}`);
    }
}


const emp = new Employees1(101, "Rahul", 25, 100000, 20000);

console.log(emp.empid);      // 101
console.log(emp.empName);    // Rahul
console.log(emp.offer);      // 20000
console.log(emp.empSalary);  // 100000

emp.employeeInformation();  Employees1.displayCompanyName(); 
//emp.offer = 50000;

   

