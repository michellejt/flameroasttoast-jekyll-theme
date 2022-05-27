# flameroasttoast-jekyll-theme

Welcome to your new Jekyll theme! In this directory, you'll find the files you need to be able to package up your theme into a gem. Put your layouts in `_layouts`, your includes in `_includes`, your sass files in `_sass` and any other assets in `assets`.

To experiment with this code, add some sample content and run `bundle exec jekyll serve` – this directory is setup just like a Jekyll site!

## Installation
Open your site’s Gemfile and add the following line:

#adding a new remote theme
gem 'flameroasttoast-jekyll-theme', '>= 0.1.0', :git => 'https://github.com/michellejt/flameroasttoast-jekyll-theme.git'

Next, edit the theme in the _config.yml# Build settings:

theme: flameroasttoast-jekyll-theme
 
To install, execute the following commands in a terminal for your site:

bundle install

To update the theme from the source theme:

bundle update flameroasttoast-jekyll-theme

__________________________________________________________

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "flameroasttoast-jekyll-theme"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: flameroasttoast-jekyll-theme
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install flameroasttoast-jekyll-theme

## Usage

TODO: Write usage instructions here. Describe your available layouts, includes, sass and/or assets.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/[USERNAME]/hello. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Development

To set up your environment to develop this theme, run `bundle install`.

Your theme is setup just like a normal Jekyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

When your theme is released, only the files in `_layouts`, `_includes`, `_sass` and `assets` tracked with Git will be bundled.
To add a custom directory to your theme-gem, please edit the regexp in `flameroasttoast-jekyll-theme.gemspec` accordingly.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

