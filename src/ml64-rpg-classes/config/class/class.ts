import { RPGClassSkill } from './skill'

interface RPGClassConfig {
  name: string
  description: string
  swordDamage: number
  defense: number
  magic: number
  speed: number
  forbiddenTools: string[]
  skills: RPGClassSkill[]
}

export { RPGClassConfig }
