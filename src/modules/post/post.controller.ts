import { Controller, Get } from '@nestjs/common';
import { ApiInternalServerErrorResponse, ApiOkResponse } from '@nestjs/swagger';
import { PostEntity } from './post.entity';
import { NewestPostService, PostService } from './post.service';

@Controller('all_post')
export class PostController {
    constructor(private readonly PostsService: PostService) {}

    @Get()
    @ApiOkResponse({schema: 

        {example: {id: 'number', image: 'string', content: 'string'}}
    })
    @ApiInternalServerErrorResponse({schema: 
        
        {example: {statusCode: 500, description: 'How the fuck can it get this shit???', error: 'Internal Server Error'}}
    })
    async getListPost(): Promise<PostEntity[]> {
        
        return await this.PostsService.getListPost();
    }
}

@Controller('newest_post')
export class NewestPostController {

    constructor(private readonly PostsService: NewestPostService) {}

    @Get()
    @ApiOkResponse({schema: 

        {example: {id: 'number', image: 'string', content: 'string'}}
    })
    @ApiInternalServerErrorResponse({schema: 

        {example: {statusCode: 500, description: 'How the fuck can it get this shit???', error: 'Internal Server Error'}}
    })
    async getThreeNewestPost(): Promise<PostEntity[]> {
        
        return await this.PostsService.getThreeNewestPost();
    }
}
