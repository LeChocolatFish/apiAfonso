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
  async create(createEstoqueDto: CreateEstoqueDto) {
    const estoque = new this.estoqueModel(createEstoqueDto);
    return await estoque.save();
  }

  async findAll() {
    return await this.estoqueModel.find().exec();
  }

  async findOne(id: string) {
    return await this.estoqueModel.findById(id).exec();
  }

  async update(id: string, updateEstoqueDto: UpdateEstoqueDto) {
    return await this.estoqueModel.findByIdAndUpdate(id, updateEstoqueDto, {new:true});
  }

  async remove(id: string) {
    return await this.estoqueModel.findByIdAndDelete(id);
  }
}
