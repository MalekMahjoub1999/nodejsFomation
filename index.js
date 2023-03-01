  const http = require('http')


  const server =http.createServer((req,res)=>{
    res.write('welcome from home')


//unne seule end
res.end()

  })
  server.listen(5010,()=>{console.log('server is running !! ')})