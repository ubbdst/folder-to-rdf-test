var opts = {
  suffixMeta: '.meta',
  skipFiles: ['secret*', '.git', '*.pem'],
  posix: true
}
var ls = require('folder-to-rdf')(opts)
 
ls('./data/', function(err, graph) {
  console.log(graph.toString())
})
