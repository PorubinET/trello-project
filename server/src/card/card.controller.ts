import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCardDto } from './dto/create.card.dto';
import { CardService } from './card.service';

@Controller('card')
export class CardController {
  constructor(private cardService: CardService) {}

  @Post()
  create(@Body() userDto: CreateCardDto) {
    return this.cardService.createCard(userDto);
  }

  @Get()
  getAll() {
    return this.cardService.getAllLists();
  }
}
