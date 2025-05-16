import { Controller, Get, Query } from '@nestjs/common';
import { CapybaraService } from '../../application/services/capybara.service';
import { CapybaraResponseDto } from '../../domain/dtos/capybara-response.dto';

@Controller('capybara')
export class CapybaraController {
  constructor(private readonly service: CapybaraService) {}

  @Get()
  async getCapybara(@Query('type') type: '2d' | '3d' = '2d'): Promise<CapybaraResponseDto> {
    return this.service.getCapybara(type);
  }

  // Add other endpoints...
} 