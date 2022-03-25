import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CardController } from './card.controller';
import { CardService } from './card.service';
import { Card } from './card.model';
import { Lists } from '../lists/lists.model';
import { Users } from '../users/users.model';
import { cardsUsers } from './card.cardsUsers';

@Module({
  controllers: [CardController],
  providers: [CardService],
  imports: [SequelizeModule.forFeature([Card, Lists, Users, cardsUsers])],
})
export class CardModule {}
