//install software from https://obsproject.com/
//https://github.com/illuspas/Node-Media-Server
//open obs>start stream then click settings>stream>custom streaming server>
//url = rtmp://localhost/live
//stream key = 1
const NodeMediaServer = require('node-media-server');

const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: 8000,
    allow_origin: '*'
  }
};

var nms = new NodeMediaServer(config)
nms.run();