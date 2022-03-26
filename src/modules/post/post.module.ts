import { PostEntity } from './post.entity'
import { Module } from '@nestjs/common';
import { NewestPostService, PostService } from './post.service';
import { NewestPostController, PostController } from './post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({

  imports: [TypeOrmModule.forFeature([PostEntity])],
  providers: [PostService, NewestPostService],
  controllers: [PostController, NewestPostController],
  exports: [PostService, NewestPostService]
})
export class PostModule {}
