import ConfigModel from '../config/config.model'
import { User } from '../entities/City'
import PraiseModel from '../data/Praise.model'

const { getVerifyAmount } = new ConfigModel()
const { getLikeAmount } = new PraiseModel()

interface IUpgradeStatus {
    guestLikes: number
    verifyAmount: number
    isAuthorize: boolean
}

const checkIsAuthorizedToUpgrade = async (guest: User): Promise<IUpgradeStatus> => {
  const guestLikes = (await getLikeAmount(guest.id)) * 2 + guest.invited.length
  const verifyAmount = ((await getVerifyAmount())?.verify_amount || 3) * 2

  return {
    guestLikes,
    verifyAmount,
    isAuthorize: guestLikes >= verifyAmount
  }
}

export default checkIsAuthorizedToUpgrade
