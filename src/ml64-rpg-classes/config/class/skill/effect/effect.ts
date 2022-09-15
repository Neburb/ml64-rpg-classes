import { EffectType } from './effectType'
import { Position } from '../position'

export interface Effect {
  type: EffectType
  positionRelative?: boolean
  position: Position
}
