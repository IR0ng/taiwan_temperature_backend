import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

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
