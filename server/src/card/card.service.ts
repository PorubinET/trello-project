import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCardDto } from './dto/create.card.dto';
import { Card } from './card.model';

@Injectable()
export class CardService {
  constructor(@InjectModel(Card) private cardRepository: typeof Card) {}

  async createCard(dto: CreateCardDto) {
    const card = await this.cardRepository.create(dto);
    return card;
  }

  async getAllLists() {
    const lists = await this.cardRepository.findAll();
    return lists;
  }
}
