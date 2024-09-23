import {
  BadRequestException,
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { BookCreateDto } from './dto/book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get('/')
  findBook(@Query('title') title: string) {
    try {
      return this.booksService.findBook(title);
    } catch (error) {
      console.error('Ошибка при получении книг:', error);
      throw new InternalServerErrorException(
        'Не удалось найти книги. Попробуйте позже.',
      );
    }
  }

  @Get('/all')
  findAllBook() {
    try {
      return this.booksService.findAllBook();
    } catch (error) {
      console.error('Ошибка при получении всех книг:', error);
      throw new InternalServerErrorException(
        'Не удалось найти книги. Попробуйте позже.',
      );
    }
  }

  @Post('/add')
  @UsePipes(new ValidationPipe())
  create(@Body() dto: BookCreateDto) {
    try {
      return this.booksService.create(dto);
    } catch (error) {
      console.error('Ошибка при создании книги:', error);
      throw new BadRequestException(
        'Не удалось создать книгу. Попробуйте снова.',
      );
    }
  }
}
