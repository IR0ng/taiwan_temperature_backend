import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Temperature } from './Temperature'

@Entity('city')
export class City extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
      id: number

    @Column()
      station: number

    @Column('varchar')
      city: string
}
