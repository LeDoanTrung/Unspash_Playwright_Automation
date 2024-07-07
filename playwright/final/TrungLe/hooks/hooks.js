import { ConfigurationHelper } from "../configurations/configuration"

export class Hooks {
  static async setup() {
    Hooks.config = ConfigurationHelper.readConfiguration(
      "./configurations/appsettings.json"
    )
  }
}
