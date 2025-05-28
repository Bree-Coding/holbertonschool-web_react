/// <reference path="Subject.ts" />

namespace Subjects {
    export interface Teacher {
        experienceTeachingReact?: number;
    }

    export class React extends Subject {
        getRequirements(): string
        {
            return 'Here is the list of requirements for React';
        }

        getAvailableTeacher(): string {
            if (this.teacher &&
                typeof this.teacher.experienceTeachingReact === 'number' &&
                this.teacher.experienceTeachingReact > 0)
            {
                return `Available Teacher: ${this.teacher.firstName}`;
            }
            return 'No available teacher';
        }
    }
}
