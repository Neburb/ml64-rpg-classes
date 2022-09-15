import { ActionTarget } from './actionTarget'

export interface AttributeAction {
  defense?: number
  health?: number
  target: ActionTarget
}
