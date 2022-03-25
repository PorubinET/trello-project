import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';

import { User } from '../users/users.model';
import { Card } from './card.model';

@Table({ createdAt: false, updatedAt: false })
export class CardsList extends Model<CardsList> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Card)
  @Column({ type: DataType.INTEGER })
  title: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  description: number;
}
