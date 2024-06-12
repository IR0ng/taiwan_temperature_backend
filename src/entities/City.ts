import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('city')
export class City extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
      id: number

    @Column()
      station: number

    @Column('varchar')
      city: string
}
