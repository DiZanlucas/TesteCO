import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutoService } from './produto/produto.service';
import { ProdutoController } from './produto/produto.controller';

import{ TypeOrmModule} from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot()],
  controllers: [AppController, ProdutoController],
  providers: [AppService, ProdutoService],
})
export class AppModule {
  constructor(private conection: Connection){}
}
