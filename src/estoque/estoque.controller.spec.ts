import { Test, TestingModule } from '@nestjs/testing';
import { EstoqueController } from './estoque.controller';
import { EstoqueService } from './estoque.service';

describe('EstoqueController', () => {
  let controller: EstoqueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstoqueController],
      providers: [EstoqueService],
    }).compile();

    controller = module.get<EstoqueController>(EstoqueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
