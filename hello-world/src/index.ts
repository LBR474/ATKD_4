type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee_1: Employee = {
  id: 1,
  name: 'Mosh',
  retire(date: Date) {
    console.log(date);
  },
  
};
let employee_2: Employee = {
  id: 2,
  name: 'Lenny',
  retire(date: Date) {
    console.log(date);
  },
};

console.log(employee_1, employee_2)
