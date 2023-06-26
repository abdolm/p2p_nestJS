<<<<<<< HEAD:p2p_data/src/entities/personLesson.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne  } from 'typeorm';
import { Person } from "./person.entity";
import { Lesson } from './lesson.entity';

@Entity()
export class PersonLesson {
 
    @PrimaryGeneratedColumn()
    id: number;

    @Column({default: false})
    isValidate: boolean;

    @ManyToOne(() => Person, (person) => person.id)
    person: Person

    @ManyToOne(() => Lesson, (lesson) => lesson.id)
    lesson: Lesson
=======
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne  } from 'typeorm';
import { User } from "./user.entity";
import { Lesson } from './lesson.entity';

@Entity()
export class User_lesson {
 
    @PrimaryGeneratedColumn()
    id_user_lesson: number;

    @Column()
    is_validate: boolean;

    @ManyToOne(() => User, (user) => user.id)
    users: User[]

    @ManyToOne(() => Lesson, (lesson) => lesson.id)
    lessons: Lesson[]

>>>>>>> d260de8d02a8b5fb7a553cacc8348324df918b2a:p2p_data/src/entities/user_lesson.entity.ts
}