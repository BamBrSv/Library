import { Module } from '@nestjs/common';
import { TelegramService } from './telegram.service';
import { BooksModule } from 'src/books/books.module';
import { TelegrafModule } from 'nestjs-telegraf';
import { TelegramBot } from './telegram.bot';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getTelegramConfig } from 'src/configs/telegram.config';

@Module({
  imports: [
    TelegrafModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getTelegramConfig,
    }),
    BooksModule,
  ],
  controllers: [],
  providers: [TelegramService, TelegramBot],
})
export class TelegramModule {}
