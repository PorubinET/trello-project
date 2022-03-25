import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { Users } from './users.model';
import { Lists } from '../lists/lists.model';
import { Card } from '../card/card.model';
import { cardsUsers } from '../card/card.cardsUsers'

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [SequelizeModule.forFeature([Users, Card, Lists, cardsUsers])],
})
export class UsersModule {}
