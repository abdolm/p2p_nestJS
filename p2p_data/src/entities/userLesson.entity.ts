import { Entity, PrimaryGeneratedColumn, Column, ManyToOne  } from 'typeorm';
import { User } from "./user.entity";
import { Lesson } from './lesson.entity';

@Entity()
export class UserLesson {
 
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    isValidate: boolean;

    @ManyToOne(() => User, (user) => user.id)
    users: User[]

    @ManyToOne(() => Lesson, (lesson) => lesson.id)
<<<<<<< HEAD:p2p_data/src/entities/user_lesson.entity.ts
    lessons: Lesson[]

=======
    lesson: Lesson
>>>>>>> 6534c2594cf2978bb9c3a1fd896cc49d10b839ca:p2p_data/src/entities/userLesson.entity.ts
}