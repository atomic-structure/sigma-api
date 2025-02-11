import { Test, TestingModule } from '@nestjs/testing';
import { SigmaController } from './sigma.controller';
import { SigmaService } from './sigma.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [SigmaController],
      providers: [SigmaService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Hello API"', () => {
      const sigmaController = app.get<SigmaController>(SigmaController);
      expect(sigmaController.getData()).toEqual({ message: 'Hello API' });
    });
  });
});
