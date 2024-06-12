import { Temperature } from '../entities/Temperature'

export default class CityModel {
  findAll ({ station }: {station: number}) {
    return Temperature.createQueryBuilder('temp')
      .where('temp.station =:station', { station })
      .limit(100)
      .getMany()
  }
}
