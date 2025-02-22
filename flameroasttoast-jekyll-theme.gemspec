# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "flameroasttoast-jekyll-theme"
  spec.version       = "0.1.1"
  spec.authors       = ["michellejt"]
  spec.email         = ["mtongas@gmail.com"]

  spec.summary       = "Theme for flameroasttoast using bootstrap"
  spec.homepage      = "https://github.com/michellejt/flameroasttoast-jekyll-theme"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.2"
end
