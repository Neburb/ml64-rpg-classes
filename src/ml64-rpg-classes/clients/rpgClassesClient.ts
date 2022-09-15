import { onTick, Preinit } from 'modloader64_api/PluginLifecycle'
import { InjectCore } from 'modloader64_api/CoreInjection'
import { IModLoaderAPI } from 'modloader64_api/IModLoaderAPI'
import { ModLoaderAPIInject } from 'modloader64_api/ModLoaderAPIInjector'
import { IOOTCore } from 'modloader64_api/OOT/OOTAPI'

export class RPGClassesClient {
  @InjectCore()
    core!: IOOTCore

  @ModLoaderAPIInject()
    modLoader!: IModLoaderAPI

  @Preinit()
  preinit (): void {

  }

  @onTick()
  onTick (frame: number): void {

  }
}
