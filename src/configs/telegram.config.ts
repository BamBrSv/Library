import { ConfigService } from '@nestjs/config';
import { TelegrafModuleOptions } from 'nestjs-telegraf';
import * as LocalSession from 'telegraf-session-local';

const sessions = new LocalSession({ database: 'session_db.json' });

export const getTelegramConfig = async (
  config: ConfigService,
): Promise<TelegrafModuleOptions> => {
  return {
    middlewares: [sessions.middleware()],
    token: config.get('TG_TOKEN'),
  };
};
