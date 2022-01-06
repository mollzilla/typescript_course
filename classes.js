"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log('mili');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
var button = document.querySelector('button');
button === null || button === void 0 ? void 0 : button.addEventListener('click', function () { return console.log('click'); });
var Department = /** @class */ (function () {
    function Department(n) {
        this.employees = [];
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log('Department: ' + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var accounting = new Department('Accounting');
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
var NewDepartment = /** @class */ (function () {
    function NewDepartment(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
        this.interns = [];
    } // readonly like private and public belongs to TS, not JS
    NewDepartment.prototype.describe = function () {
        console.log("Department " + this.id + ": " + this.name);
    };
    // changeId(this: NewDepartment) { // won't work bc is readonly
    //   this.id = '';
    // }
    NewDepartment.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    NewDepartment.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return NewDepartment;
}());
var it = new NewDepartment(1, 'it');
it.describe();
// To do all of this, JS has to use prototypes, which TS takes care of for us here.
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = 
        // admins belongs to the child
        _super.call(this, id, 'Itguys') || this;
        _this.admins = admins;
        _this.admins = admins;
        return _this;
    }
    return ITDepartment;
}(NewDepartment));
var itGuys = new ITDepartment(2, ['max']);
console.log(itGuys);
itGuys.describe();
// Overriding properties
var Accounting = /** @class */ (function (_super) {
    __extends(Accounting, _super);
    function Accounting(id, reports) {
        var _this = 
        // admins belongs to the child
        _super.call(this, id, 'accounting') || this;
        _this.reports = reports;
        _this.reports = reports;
        return _this;
    }
    // addEmployee(name: string) {
    //   if (name === 'mili') {
    //     return;
    //   } else {
    //     this.employees.push(name); // not possible because it's private
    //   }
    // }
    Accounting.prototype.addIntern = function (name) {
        if (name === 'mili') {
            return;
        }
        else {
            this.interns.push(name); // Protected can be accessed from descendants
        }
    };
    return Accounting;
}(NewDepartment));
var accountingDep = new Accounting(2, ['finances']);
console.log(accounting);
accountingDep.describe();
accountingDep.addIntern('mili');
accountingDep.addIntern('pork');
console.log(accountingDep);
// GETTERS AND SETTERS
var AccountingGetterSetter = /** @class */ (function (_super) {
    __extends(AccountingGetterSetter, _super);
    function AccountingGetterSetter(id, reports) {
        var _this = 
        // admins belongs to the child
        _super.call(this, id, 'also accounting') || this;
        _this.reports = reports;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    // addEmployee(name: string) {
    //   if (name === 'mili') {
    //     return;
    //   } else {
    //     this.employees.push(name); // not possible because it's private
    //   }
    // }
    AccountingGetterSetter.prototype.addIntern = function (name) {
        if (name === 'mili') {
            return;
        }
        else {
            this.interns.push(name); // Protected can be accessed from descendants
        }
    };
    AccountingGetterSetter.prototype.addReport = function (text) {
        this.reports.push(text);
        this.lastReport = text;
    };
    Object.defineProperty(AccountingGetterSetter.prototype, "mostRecentReport", {
        // Getter allows me to return value with extra logic
        get: function () {
            // has to return something
            if (this.lastReport !== 'mili') {
                return this.lastReport;
            }
            else {
                throw new Error('no reports');
            }
        },
        set: function (value) {
            // defined like a method
            if (!value) {
                throw new Error('Please enter value');
            }
            this.addReport(value);
        },
        enumerable: true,
        configurable: true
    });
    AccountingGetterSetter.createEmployee = function (name) {
        return { name: name };
    };
    AccountingGetterSetter.fiscalYear = 2020;
    return AccountingGetterSetter;
}(NewDepartment));
var getterSetter = new AccountingGetterSetter(5, ['money']);
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
var employee1 = AccountingGetterSetter.createEmployee('mili');
console.log(employee1);
console.log(AccountingGetterSetter.fiscalYear);
/// cannot be accesssed with this from within the class. Just use the class name
////******* */
// ABSTRACT CLASSES
// Force developer to implement or override a certain method. When want to be sure a method is available on all classes based on it but also want to know that the exact implementation will depend on the specific version.
var Area = /** @class */ (function () {
    function Area() {
    }
    return Area;
}());
var ArtArea = /** @class */ (function (_super) {
    __extends(ArtArea, _super);
    function ArtArea() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArtArea.prototype.describe = function () {
        console.log('this is art area');
    };
    return ArtArea;
}(Area));
var paint = new ArtArea();
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
