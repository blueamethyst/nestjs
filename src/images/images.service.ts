import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';

import { Image } from './entities/image.entity';

@Injectable()
export class ImagesService {
  constructor(@Inject('IMAGE_REPOSITORY') private imageRepository: Repository<Image>) {}

  create(createImageDto: CreateImageDto) {
    return 'This action adds a new image';
  }

  async findAll(): Promise<Image[]> {
    return await this.imageRepository.find();
  }

  async findOne(id: number): Promise<Image> {
    return await this.imageRepository.findOne(id);
  }

  async update(id: number, updateImageDto: UpdateImageDto) {
    return `update is not defined ${id}`;
    //return updateImageDto.
  }

  async remove(id: number) {
    return await this.imageRepository.delete(id);
  }
}
