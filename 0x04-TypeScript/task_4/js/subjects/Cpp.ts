namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number
  }


  export class Cpp extends Subejct {
    getRequirements(): string {
      return `Here is the list of requirements for Cp`;
    }
    getAvailableTeacher(): string {
      return this.teacher.experienceTeachingC > 0 ? `Available Teacher: ${this.teacher.firstName}` : 'No available teacher';
    }
  }
}
