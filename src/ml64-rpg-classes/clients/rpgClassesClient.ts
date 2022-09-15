import { onTick, Preinit } from 'modloader64_api/PluginLifecycle'
import { InjectCore } from 'modloader64_api/CoreInjection'
import { IModLoaderAPI } from 'modloader64_api/IModLoaderAPI'
import { ModLoaderAPIInject } from 'modloader64_api/ModLoaderAPIInjector'
import { IOOTCore } from 'modloader64_api/OOT/OOTAPI'
import { RPGClassesConfig } from '@ml64-rpg-classes/config/rpgClassesConfig'
import { parseConfig } from '@ml64-rpg-classes/config'

export class RPGClassesClient {
  @InjectCore()
    core!: IOOTCore

  @ModLoaderAPIInject()
    modLoader!: IModLoaderAPI

  config!: RPGClassesConfig

  @Preinit()
  preinit (): void {
    this.config = parseConfig('rpg-classes-config.yml')
  }

  @onTick()
  onTick (frame: number): void {

  }
}
