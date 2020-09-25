import { Controller, Get } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { Produto } from 'src/produto';

@Controller('produto')
export class ProdutoController {

    constructor(private produtoService: ProdutoService){
    }
    @Get()
    async getAll(): Promise<Produto[]>{
        return this.produtoService.getAll();
    }
}
