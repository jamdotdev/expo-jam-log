require 'json'

package = JSON.parse(File.read(File.join(__dir__, '..', 'package.json')))

Pod::Spec.new do |s|
  s.name           = 'ExpoJamLog'
  s.version        = package['version']
  s.summary        = package['description']
  s.description    = <<-DESC
A React Native module that lets you send log events to Jam for iOS so that they can be associated with your Jam.
                     DESC

  s.license        = package['license']
  s.author         = package['author']
  s.homepage       = package['homepage']
  s.platforms      = {
    :ios => '15.1',
    :tvos => '15.1'
  }
  s.swift_version  = '5.4'
  s.source         = { git: 'https://github.com/jamdotdev/expo-jam-log.git', tag: "#{s.version}" }
  s.static_framework = true

  s.dependency 'ExpoModulesCore'
  s.dependency 'JamLog', '~> 1.1.3'

  # Swift/Objective-C compatibility
  s.pod_target_xcconfig = {
    'DEFINES_MODULE' => 'YES',
  }

  s.source_files = "**/*.{h,m,mm,swift,hpp,cpp}"
end
