import { Connection, Repository } from 'typeorm';
import { Image } from './entities/image.entity';

export const imageProviders = [
  {
    provide: 'IMAGE_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Image),
    inject: ['DATABASE_CONNECTION'],
  },
];
