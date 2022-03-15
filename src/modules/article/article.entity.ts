import { Admin } from '../admin/admin.entity';
import { Comment } from '../comment/comment.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Article {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar')
    title: string;

    @Column('text')
    content: string;

    @Column('varchar')
    image: string;

    @Column('date')
    createdAt: Date;
    
    @Column('int')
    adminId: number;

    @Column('varchar')
    category: string;

    @ManyToOne(() => Admin, admin => admin.id)
    admin: Admin;

    @OneToMany(() => Comment, comments => comments.postId)
    comments: Comment[];
}