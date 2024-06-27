import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}
  @Post()
  @UseInterceptors(FilesInterceptor('image'))
  createPost(@Body() dto: CreatePostDto, @UploadedFile() image) {
    this.postsService.create(dto, image);
  }
}
