import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Estoque, EstoqueDocument } from './schemas/estoque.schema';
import { CreateEstoqueDto } from './dto/create-estoque.dto';
import { UpdateEstoqueDto } from './dto/update-estoque.dto';

@Injectable()
export class EstoqueService {
  constructor(
    @InjectModel(Estoque.name) private estoqueModel: Model<EstoqueDocument>,
  ) {}
  create(createEstoqueDto: CreateEstoqueDto) {
    const estoque = new this.estoqueModel(createEstoqueDto);
    return estoque.save();
  }

  findAll() {
    return this.estoqueModel.find().exec();
  }

  findOne(id: number) {
    return this.estoqueModel.findById(id).exec();
  }

  update(id: number, updateEstoqueDto: UpdateEstoqueDto) {
    return this.estoqueModel.findByIdAndUpdate(id, updateEstoqueDto, {new:true});
  }

  remove(id: number) {
    return this.estoqueModel.findByIdAndDelete(id);
  }
}
