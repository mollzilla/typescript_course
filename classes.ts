console.log('mili');

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const button = document.querySelector('button')!;

button?.addEventListener('click', () => console.log('click'));

class Department {
  private name: string;
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log('Department: ' + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department('Accounting');

accounting.addEmployee('max');
accounting.addEmployee('mili');
accounting.printEmployeeInformation();
accounting.describe();

// const accountingCopy = { name: 'copy', describe: accounting.describe };

// accountingCopy.describe();

// accounting.employees.push('dos'); // should not be supported On field private only can be accessed with the within methods
accounting.printEmployeeInformation();

// SHORTHAND INITIALIZATION
// get rid of field definitions

//  Read only modifier
class NewDepartment {
  private employees: string[] = [];

  protected interns: string[] = [];

  constructor(private readonly id: number, public name: string) {} // readonly like private and public belongs to TS, not JS

  describe(this: NewDepartment) {
    console.log(`Department ${this.id}: ${this.name}`);
  }

  // changeId(this: NewDepartment) { // won't work bc is readonly
  //   this.id = '';
  // }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const it = new NewDepartment(1, 'it');

it.describe();

// To do all of this, JS has to use prototypes, which TS takes care of for us here.

class ITDepartment extends NewDepartment {
  constructor(id: number, public admins: string[]) {
    // admins belongs to the child
    super(id, 'Itguys'); // whenever I need to call the constructor of the base class. Now I can hardcode itguys. Won't be able to use this without using super
    this.admins = admins;
  }
}

const itGuys = new ITDepartment(2, ['max']);
console.log(itGuys);

itGuys.describe();

// Overriding properties

class Accounting extends NewDepartment {
  constructor(id: number, public reports: string[]) {
    // admins belongs to the child
    super(id, 'accounting'); // whenever I need to call the constructor of the base class. Now I can hardcode itguys. Won't be able to use this without using super
    this.reports = reports;
  }

  // addEmployee(name: string) {
  //   if (name === 'mili') {
  //     return;
  //   } else {
  //     this.employees.push(name); // not possible because it's private
  //   }
  // }

  addIntern(name: string) {
    if (name === 'mili') {
      return;
    } else {
      this.interns.push(name); // Protected can be accessed from descendants
    }
  }
}

const accountingDep = new Accounting(2, ['finances']);
console.log(accounting);

accountingDep.describe();

accountingDep.addIntern('mili');
accountingDep.addIntern('pork');

console.log(accountingDep);

// GETTERS AND SETTERS

class AccountingGetterSetter extends NewDepartment {
  private lastReport: string;
  constructor(id: number, public reports: string[]) {
    // admins belongs to the child
    super(id, 'also accounting'); // whenever I need to call the constructor of the base class. Now I can hardcode itguys. Won't be able to use this without using super
    this.reports = reports;
    this.lastReport = reports[0];
  }

  // addEmployee(name: string) {
  //   if (name === 'mili') {
  //     return;
  //   } else {
  //     this.employees.push(name); // not possible because it's private
  //   }
  // }

  addIntern(name: string) {
    if (name === 'mili') {
      return;
    } else {
      this.interns.push(name); // Protected can be accessed from descendants
    }
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  // Getter allows me to return value with extra logic
  get mostRecentReport() {
    // has to return something
    if (this.lastReport !== 'mili') {
      return this.lastReport;
    } else {
      throw new Error('no reports');
    }
  }

  set mostRecentReport(value: string) {
    // defined like a method

    if (!value) {
      throw new Error('Please enter value');
    }
    this.addReport(value);
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  static fiscalYear = 2020;
}

const getterSetter = new AccountingGetterSetter(5, ['money']);
console.log(getterSetter.mostRecentReport); // access it like a property

//setters

// getterSetter.mostRecentReport = ''; // throw err, falsy
getterSetter.mostRecentReport = 'more boring stuff'; // accepts it

// getters and setters encapsulate properties or add logic when needed

///**** */
// ALSO EXISTING IN JS: STATIC PROPERTIES AND METHODS

// allow to add properties or methods on classes without creating an instance (new) Just access on the class. Useful for utility functions, to group to a class logically or global constants

// JS has the Math class or constructor function

// line 175
const employee1 = AccountingGetterSetter.createEmployee('mili');

console.log(employee1);
console.log(AccountingGetterSetter.fiscalYear);

/// cannot be accesssed with this from within the class. Just use the class name

////******* */
// ABSTRACT CLASSES
// Force developer to implement or override a certain method. When want to be sure a method is available on all classes based on it but also want to know that the exact implementation will depend on the specific version.

abstract class Area {
  abstract describe(this: Area): void;
}

class ArtArea extends Area {
  describe() {
    console.log('this is art area');
  }
}

const paint = new ArtArea();
console.log(paint.describe());

/* ************* */
// SINGLETONS AND PRIVATE CONSTRUCTORS
// ensuring only have one instance of a class

// class ITDepartmentSingleton extends Department { // no se por que no me anda
//   private constructor(id: string, public admins: string[]) {
//     // private makes it impossible to call new. It's only accessible from inside the class => static method
//     // admins belongs to the child
//     super(id);
//     this.admins = admins;
//   }
//   private static instance = ITDepartmentSingleton;

//   static getInstance() {
//     if (ITDepartmentSingleton.instance) {
//       return ITDepartmentSingleton.instance;
//     }
//     this.instance = new ITDepartmentSingleton('5', ['mili']);
//     return this.instance;
//   }
// }

// const newSingleton = ITDepartmentSingleton.getInstance();
// console.log(newSingleton);
