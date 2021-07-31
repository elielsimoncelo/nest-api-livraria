import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { ok } from 'assert';

import { Livro } from './livro.model';
import { LivrosService } from './livros.service';

@Controller('livros')
export class LivrosController {
  constructor(private livrosService: LivrosService) {}

  @Get()
  async obterTodos(): Promise<Livro[]> {
    return await this.livrosService.obterTodos();
  }

  @Get(':id')
  async obterUm(@Param() params: any): Promise<Livro> {
    return await this.livrosService.obterUm(params.id);
  }

  @Post()
  async criar(@Body() produto: Livro): Promise<void> {
    await await this.livrosService.criar(produto);
  }

  @Put()
  async atualizar(@Body() livro: Livro): Promise<[number, Livro[]]> {
    return await this.livrosService.alterar(livro);
  }

  @Delete(':id')
  @HttpCode(204)
  async apagar(@Param() params: any): Promise<void> {
    const success = await this.livrosService.apagar(params.id);

    if (!success)
      throw new HttpException('Livro não encontrado.', HttpStatus.NOT_FOUND);
  }
}
