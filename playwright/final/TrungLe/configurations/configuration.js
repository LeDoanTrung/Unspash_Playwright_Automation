import * as fs from "fs"
import * as path from "path"

export class ConfigurationHelper {
  static readConfiguration(filePath) {
    try {
      const projectRoot = process.cwd();
      const fullPath = path.resolve(projectRoot, filePath);

      const rawData = fs.readFileSync(fullPath, 'utf8');

      const config = JSON.parse(rawData);

      return config;
  } catch (error) {
      console.error('Error reading configuration file:', error);
      throw error;
  }
  }

  static getConfigurationByKey(config, key) {
    const value = config[key]
    if (value !== undefined && value !== null) {
      return value.toString() // Assuming all values are stored as strings in JSON
    }
    const message = `Attribute '${key}' has not been set in appsettings.json`
    throw new Error(message)
  }
}
