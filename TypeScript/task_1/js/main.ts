interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

const teacher3: Teacher = {
  firstName: "April",
  lastName: "Mendez",
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

console.log(teacher3);

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: "Paige",
  lastName: "Saraya",
  fullTimeEmployee: true,
  location: 'Lisbone',
  numberOfReports: 3,
};

console.log(director1);

function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

console.log(printTeacher(teacher3.firstName, teacher3.lastName));

interface StudentConstructor {
  firstName: string;
  lastName: string;
}

interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

interface StudentClassConstructor {
  new (student: StudentConstructor): StudentInterface;
}

class StudentClass implements StudentInterface {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

const Student: StudentClassConstructor = StudentClass;