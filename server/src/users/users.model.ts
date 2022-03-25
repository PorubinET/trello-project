import { Column, Model, DataType, Table, BelongsToMany } from 'sequelize-typescript';
import { Lists } from '../lists/lists.model';
import { Card } from '../card/card.model';
import { cardsUsers } from '../card/card.cardsUsers'

interface UserCreationAttrs {
  name: string;
  email: string;
}

@Table({ tableName: 'users' })
export class Users extends Model<Users, UserCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @BelongsToMany(() => Card, () => cardsUsers)
  cardUsers: Card[];

  @Column({ type: DataType.STRING, unique: false, allowNull: true })
  name: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: true })
  email: string;
}
