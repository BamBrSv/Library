import { TelegramService } from './telegram.service';
import { On, InjectBot, Start, Update } from 'nestjs-telegraf';
import { BooksService } from 'src/books/books.service';
import { Context, Telegraf } from 'telegraf';

@Update()
export class TelegramBot {
  constructor(
    private readonly telegramService: TelegramService,
    @InjectBot() private readonly bot: Telegraf<Context>,
    private readonly booksService: BooksService,
  ) {}

  @Start()
  async startComand(ctx: Context) {
    await ctx.reply('Привет, что ищем?');
  }

  @On('text')
  async getBook(ctx: Context) {
    try {
      const findBooks = await this.booksService.findBook(ctx.text);
      if (findBooks.length)
        await ctx.reply(
          `${findBooks.map((book) => book.author + '  ' + book.title + '\n\n').join('')}`,
        );
      else ctx.reply('Ничего не найдено');
    } catch {
      await ctx.reply(
        'Произошла ошибка при поиске книг. Попробуйте снова позже',
      );
    }
  }
}
