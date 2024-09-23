import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { BookCreateDto } from './dto/book.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class BooksService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  findBook(title: string) {
    return this.prisma.book.findMany({
      where: {
        title: {
          contains: title,
        },
        available: true,
      },
    });
  }

  findAllBook() {
    return this.prisma.book.findMany({});
  }

  create(dto: BookCreateDto) {
    return this.prisma.book.create({
      data: dto,
    });
  }
}
