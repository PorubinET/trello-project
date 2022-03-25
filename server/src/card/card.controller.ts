import { Body, Controller, Get, Post, Patch, Param, Put, Delete } from '@nestjs/common';
import { CreateCardDto } from './dto/create.card.dto';
import { UpdateCardDto } from './dto/update.card.dto';
import { CardService } from './card.service';

@Controller('card')
export class CardController {
  constructor(private cardService: CardService) { }

  @Post()
  create(@Body() cardDto: CreateCardDto) {
    return this.cardService.createCard(cardDto);
  }

  @Get()
  getAll() {
    return this.cardService.getAllCards();
  }

  @Patch()
  async update(@Body() cardDto: UpdateCardDto) {
    await this.cardService.updateCard(cardDto);
    return {
      statusCode: 200,
      message: 'Card updated successfully',
    };
  }
}
