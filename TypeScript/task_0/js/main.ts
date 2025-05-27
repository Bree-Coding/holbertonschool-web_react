interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
};

const student1: Student = {
    firstName: "Michelle",
    lastName: "McCool",
    age: 21,
    location: "Los Angeles",
};

const student2: Student = {
    firstName: "Layla",
    lastName: "Just",
    age: 23, 
    location: "New Jersey"
};

const studentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement('table');
const Row: HTMLTableRowElement = table.insertRow();
const headers: string[] = ['First Name', 'Location'];

