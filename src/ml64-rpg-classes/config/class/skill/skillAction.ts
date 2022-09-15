import { ActionType } from './action/actionType'
import { AttributeAction } from './action/attributeAction'
import { Effect } from './effect/effect'

export interface SkillAction {
  type: ActionType
  effects: Effect[]
  time?: number
  up: AttributeAction
  down: AttributeAction
}
