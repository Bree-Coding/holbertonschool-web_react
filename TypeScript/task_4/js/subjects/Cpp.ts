/// <reference path="Subject.ts" />

namespace Subjects {
    export interface Teacher {
        experienceTeachingC?: number;
    }

    export class Cpp extends Subject {
        getRequirements(): string 
        {
            return 'Here is the list of requirements for Cpp';
        }

        getAvailableTeacher(): string {
            const teacher = this.teacher as Subjects.Teacher | undefined;
            if (teacher &&
                typeof teacher.experienceTeachingC === 'number' &&
                teacher.experienceTeachingC > 0)
            {
                return `Available Teacher: ${teacher.firstName}`;
            }
            return 'No available teacher';
        }
    }
}
