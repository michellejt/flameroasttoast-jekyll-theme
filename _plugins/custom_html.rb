Jekyll::Hooks.register :posts, :post_convert do |item|
    item.content = item.content
        .gsub(/<p>:::([a-z]+)<\/p>/, '<div class="\1">')
        .gsub(/<p>:::<\/p>/, '</div>')
end

Jekyll::Hooks.register :pages, :post_convert do |item|
    item.content = item.content
        .gsub(/<p>:::([a-z]+)<\/p>/, '<div class="\1">')
        .gsub(/<p>:::<\/p>/, '</div>')
end

Jekyll::Hooks.register :documents, :post_convert do |item|
    item.content = item.content
        .gsub(/<p>:::([a-z]+)<\/p>/, '<div class="\1">')
        .gsub(/<p>:::<\/p>/, '</div>')
end