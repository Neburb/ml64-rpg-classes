import { readYamlEnvSync } from 'yaml-env-defaults'
import { RPGClassesConfig } from './rpgClassesConfig'

/**
 * Parses a config file with a {@link RPGClassesConfig} file
 * @param file The file to parse
 * @returns The configuration parsed as a RPGClassesConfig
 */
const parseConfig = (file: string): RPGClassesConfig => {
  return readYamlEnvSync(file)
}

export { parseConfig }
