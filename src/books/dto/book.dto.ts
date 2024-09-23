import { IsBoolean, IsString } from 'class-validator';

export class BookCreateDto {
  @IsString()
  author: string;

  @IsString()
  title: string;

  @IsBoolean()
  available: boolean;
}
