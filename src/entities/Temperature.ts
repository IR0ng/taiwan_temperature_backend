import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { City } from './City'

@Entity('temperature')
export class Temperature extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
      id: string

    @Column()
      date: number

    @Column({ type: 'numeric' })
      temperature: number

    @Column()
      station: number
}
