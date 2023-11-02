class Department {
    // private id: string
    // private name: string;
    protected employees: string[] = [] 
    

    constructor(private readonly id: string, public name: string){
        // this.id = id
        // this.name = n
    }
    describe() {
        console.log(`Department (${this.id}): ${this.name}`)
    }
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
}

class AccountingDepartment extends Department{
    constructor(id: string, private reports: string[]){
        super(id, "Accounting")   
    }

    addEmployee(name: string){
        if(name == 'Maxxi'){
            return
        }
        this.employees.push(name)
    }

    addReport(text: string){
        this.reports.push(text)
    }

    getReports(){
        console.log(this.reports)
    }

    printReports(){
        console.log(this.reports)
    }
}
const it = new ITDepartment('d1', ['Minne'])
it.addEmployee('Max')
it.addEmployee('Jax')

//Approach 2
// accounting.employees[2] ='Anna'

it.describe()
it.printEmployeeInfo()

console.log(it)

const accounting = new AccountingDepartment('d2', [])

accounting.addReport("something went wrong ...")

accounting.printReports()
console.log(accounting)

accounting.addEmployee("Manuel")
accounting.printEmployeeInfo()
