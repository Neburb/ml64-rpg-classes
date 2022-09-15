import { SkillAction } from './skill/skillAction'
import { SkillType } from './skill/skillType'

export interface RPGClassSkill {
  name: string
  description: string
  castTime: number
  magic: number
  type: SkillType
  animation: string
  forbiddenTools: string[]
  actions: SkillAction[]
}
