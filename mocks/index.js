const onUnhandledRequest = (req) => {
    if (req.url.host === "localhost:3000") {
      return "bypass";
    } else {
      return "warn";
    }
  }
if(typeof window === 'undefined'){
    const {server} = require('./server')
    server.listen(
        {
            onUnhandledRequest
        }
    )
}else{
    const {worker} = require('./browser')
    worker.start( {
        onUnhandledRequest
    })
}
