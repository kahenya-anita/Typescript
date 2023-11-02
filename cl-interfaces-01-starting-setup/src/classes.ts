abstract class Department {
    //static property
    static fiscalYear = 2021
    // private id: string
    // private name: string;
    protected employees: string[] = [] 
    

    constructor(protected readonly id: string, public name: string){
        // this.id = id
        // this.name = n
    }

    static createEmployee(name: string){
        return {name: name}
    }
    abstract describe(): void
        // console.log(`Department (${this.id}): ${this.name}`)

    addEmployee(employee: string){
        this.employees.push(employee)
    }

    printEmployeeInfo(){
      console.log(this.employees.length)
      console.log(this.employees)  
    }
}

class ITDepartment extends Department{
    admins: string[]
    constructor(id: string, admins: string[]){
        super(id, "IT")
        this.admins = admins
    }

    describe() {
        console.log('IT Departemnt-ID: ' + this.id)
    }
}

class AccountingDepartment extends Department{
    private lastReport: string
    private static instance: AccountingDepartment

    //a getter allows to add more complex logic
    get mostRecentReport(){
        if(this.lastReport){
            return this.lastReport
        }
        throw new Error("No report Found");
        
    }

    //Setters used to encapsulate value & add more logic
    set mostRecentReport(value: string){
        if (!value) {
            throw new Error("Please pass in a valid value");
            
            
        }
        this.addReport(value)
    }

    private constructor(id: string, private reports: string[]){
        super(id, "Accounting") 
        this.lastReport = reports[0]  
    }

    static getInstance(){
        if (this.instance) {
            return AccountingDepartment.instance
        }
        this.instance = new AccountingDepartment('d2', [])
        return this.instance
    }

    describe() {
        console.log('Accounting D - ID: ' + this.id)
    }

    addEmployee(name: string){
        if(name == 'Maxxi'){
            return
        }
        this.employees.push(name)
    }

    addReport(text: string){
        this.reports.push(text)
        this.lastReport = text
    }

    getReports(){
        console.log(this.reports)
    }

    printReports(){
        console.log(this.reports)
    }
}

//Static Method
const employee1 = Department.createEmployee("Max1")
console.log(employee1, Department.fiscalYear)

const it = new ITDepartment('d1', ['Minne'])

it.addEmployee('Max')
it.addEmployee('Jax')

//Approach 2
// accounting.employees[2] ='Anna'

it.describe()
it.printEmployeeInfo()

console.log(it)

const accounting =  AccountingDepartment.getInstance()

accounting.mostRecentReport = 'Yearly report'

accounting.addReport("something went wrong ...")

console.log(accounting.mostRecentReport)

accounting.printReports()
console.log(accounting)

// accounting.addEmployee("Manuel")
// accounting.printEmployeeInfo()
accounting.describe()
