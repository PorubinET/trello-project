import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ListsController } from './lists.controller';
import { ListsService } from './lists.sevice';
import { Lists } from './lists.model';
import { Card } from '../card/card.model';

@Module({
  controllers: [ListsController],
  providers: [ListsService],
  imports: [SequelizeModule.forFeature([Lists, Card])],
})
export class ListsModule {}
