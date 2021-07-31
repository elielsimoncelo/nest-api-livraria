import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Livro } from './livro.model';

@Injectable()
export class LivrosService {
  constructor(@InjectModel(Livro) private livroModel: typeof Livro) {}

  async obterTodos(): Promise<Livro[]> {
    return await this.livroModel.findAll();
  }

  async obterUm(id: number): Promise<Livro> {
    return await this.livroModel.findByPk(id);
  }

  async criar(livro: Livro): Promise<void> {
    await this.livroModel.create(livro);
  }

  async alterar(livro: Livro): Promise<[number, Livro[]]> {
    return await this.livroModel.update(livro, {
      where: {
        id: livro.id,
      },
    });
  }

  async apagar(id: number): Promise<boolean> {
    const livro = await this.obterUm(id);
    if (!livro) return false;
    await livro.destroy();
    return true;
  }
}
