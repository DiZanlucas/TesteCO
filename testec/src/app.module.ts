import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListaController } from './lista/lista.controller';

@Module({
  imports: [],
  controllers: [AppController, ListaController],
  providers: [AppService],
})
export class AppModule {}
