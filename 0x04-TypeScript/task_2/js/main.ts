interface DirectorInterface = {
  workFromHome(): string
  getCoffeeBreak(): string
  workDirectorTasks(): string
}

interface DirectorInterface = {
  workFromHome(): string
  getCoffeeBreak(): string
  workTeacherTasks(): string
}

export class Director implements DirectorInterface {
  workFromHome = (): string => 'Working from home';
  getToWork = (): string => 'Getting a coffee break';
  workDirectorTasks = (): string => 'Getting to director tasks';
}

export class Teacher implements TeacherInterface {
  workFromHome = (): string => 'Cannot work from home';
  getCoffeeBreak = (): string => 'Cannot have a break';
  workTeacherTasks = (): string => 'Getting to work';
}

export function createEmployee(salary: number | string): Teacher | Director {
  return isNaN(Number(salary)) && salary > 500 ? new Director() : new Teacher();
}

function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: Director | Teacher): string {
  return isDirector(employee)
    ? (employee as Director).workDirectorTasks()
    : (employee as Teacher).workTeacherTasks();
}

type Subjects = "Math" | "History";

function teachClass(todayClass:Subjects): string {
    return `Teaching ${todayClass}`;
}
