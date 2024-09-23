import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { PrismaService } from 'src/prisma.service';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [BooksController],
  providers: [BooksService, PrismaService, ConfigService],
  exports: [BooksService],
})
export class BooksModule {}
