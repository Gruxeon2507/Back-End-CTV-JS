import { Article } from "../article/article.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Admin {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar')
    email: string;

    @Column('varchar')
    name: string;

    @OneToMany(() => Article, article => article.adminId)
    article: Article[];
}