import ExpoModulesCore
import JamLog

public class ExpoJamLogModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ExpoJamLog")

    // Defines a JavaScript synchronous function that runs the native code on the JavaScript thread.
    Function("log") { (message: String, level: Level) in
      JamLog.log(message, level: .init(level))
    }
  }

  enum Level: String, Enumerable {
    case debug
    case info
    case warn
    case error
  }
}

extension LogMessage.Level {
  init(_ level: ExpoJamLogModule.Level) {
    self = switch level {
    case .debug: .debug
    case .info: .info
    case .warn: .warn
    case .error: .error
    }
  }
}
