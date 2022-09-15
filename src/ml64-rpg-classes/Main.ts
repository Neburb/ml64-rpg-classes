import { SidedProxy, ProxySide } from 'modloader64_api/SidedProxy/SidedProxy'
import { RPGClassesClient } from './clients/rpgClassesClient'

export default class Main {
  @SidedProxy(ProxySide.CLIENT, RPGClassesClient)
    client!: RPGClassesClient
}
