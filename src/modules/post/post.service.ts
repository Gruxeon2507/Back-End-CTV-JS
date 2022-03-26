import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostEntity } from './post.entity';

@Injectable()
export class PostService {

    constructor(

        @InjectRepository(PostEntity) private PostRepo: Repository<PostEntity>
    ) {}

    async getListPost(): Promise<PostEntity[]> {
        
        try {
            const result = await this.PostRepo.find();
            return result;

        } catch (error) {
            
            throw new InternalServerErrorException('Internal Server Error');
        }
    }
}

export class NewestPostService {

    constructor(

        @InjectRepository(PostEntity) private PostRepo: Repository<PostEntity>
    ) {}
    
    async getThreeNewestPost(): Promise<PostEntity[]> {
        try {
            const result = await this.PostRepo.find({
                take: 3,
                order: {
                    id: "DESC",
                },
            })
            return result;
        } catch (error) {
            throw new InternalServerErrorException('Internal Server Error');
        }
    }
}
