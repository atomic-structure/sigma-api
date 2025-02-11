import { Test } from '@nestjs/testing';
import { SigmaService } from './sigma.service';

describe('SigmaService', () => {
  let sigmaService: SigmaService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [SigmaService],
    }).compile();

    sigmaService = app.get<SigmaService>(SigmaService);
  });

  describe('getData', () => {
    it('should return "Hello API"', () => {
      expect(sigmaService.getData()).toEqual({ message: 'Hello API' });
    });
  });
});
