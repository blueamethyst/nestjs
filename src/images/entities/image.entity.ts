// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line prettier/prettier
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn } from 'typeorm';

@Entity()
export class Image {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', nullable: false })
  width: number;

  @Column({ type: 'int', nullable: false })
  height: number;

  /*
  @OneToMany((type) => ImageTag, (size) => size.image, { cascade: true })
  tags: ImageTag[];
  */

  @Column('text')
  path: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @CreateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;
}
