import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Article } from '../article/article.entity';

@Entity()
export class Comment {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar')
    content: string;

    @Column('varchar')
    name: string;

    @Column('date')
    createdAt: Date;

    @Column('int')
    postId: number;

    @Column('int')
    replyCommentId: number;

    @ManyToOne(() => Article, article => article.id)
    article: Article;
}