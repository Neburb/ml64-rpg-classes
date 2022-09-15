import { onTick, Preinit } from 'modloader64_api/PluginLifecycle'
import { InjectCore } from 'modloader64_api/CoreInjection'
import { IModLoaderAPI } from 'modloader64_api/IModLoaderAPI'
import { ModLoaderAPIInject } from 'modloader64_api/ModLoaderAPIInjector'
import { IOOTCore } from 'modloader64_api/OOT/OOTAPI'
import { RPGClassesConfig } from '../config/rpgClassesConfig'
import { parseConfig } from '../config'

const CONFIG_FILE = 'rpg-classes-config.yml'

export class RPGClassesClient {
  @InjectCore()
    core!: IOOTCore

  @ModLoaderAPIInject()
    modLoader!: IModLoaderAPI

  config!: RPGClassesConfig

  @Preinit()
  preinit (): void {
    this.config = parseConfig(CONFIG_FILE)
  }

  @onTick()
  onTick (frame: number): void {

  }
}
