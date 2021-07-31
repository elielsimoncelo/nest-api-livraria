import { Column, Model, DataType, Table } from 'sequelize-typescript';

@Table
export class Livro extends Model<Livro> {
  @Column({
    type: DataType.STRING(60),
    allowNull: false,
  })
  codigo: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nome: string;
  @Column({
    type: DataType.DECIMAL(19, 8),
    allowNull: false,
  })
  preco: number;
}
