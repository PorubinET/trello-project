import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCardDto } from './dto/create.card.dto';
import { UpdateCardDto } from './dto/update.card.dto';
import { Card } from './card.model';
import { Users } from '../users/users.model';

@Injectable()
export class CardService {
  constructor(@InjectModel(Card) private cardRepository: typeof Card) { }

  async createCard(dto: CreateCardDto) {
    const card = await this.cardRepository.create(dto);
    return card;
  }

  async getAllCards() {
    const cards = await this.cardRepository.findAll({
      include: {
        model: Users,
      },
    });
    return cards;
  }

  async updateCard(updateCardDto: UpdateCardDto) {
    const {id, ...dto } = updateCardDto;
    return await this.cardRepository.update(dto, {where: {id}});
  }

}
