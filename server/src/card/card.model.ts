import {
  BelongsTo,
  BelongsToMany,
  Column,
  Model,
  DataType,
  Table,
  ForeignKey,
} from 'sequelize-typescript';
import { Lists } from '../lists/lists.model';
import { CardsList } from './cards-list.model';

interface CardCreateAttr {
  title: string;
  description: string;
}

@Table({ tableName: 'card' })
export class Card extends Model<Card, CardCreateAttr> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, unique: false })
  title: string;

  @Column({ type: DataType.STRING, unique: false })
  description: string;

  @ForeignKey(() => Lists)
  listId: number;

  @BelongsTo(() => Lists)
  author: Lists;
}
