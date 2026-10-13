// Local preview: `node serve.js` then open http://localhost:8766 (dark) or http://localhost:8766/light
const http=require('http'),fs=require('fs'),path=require('path');
const ROOT=__dirname, PORT=process.env.PORT||8766;
const TYPES={'.html':'text/html; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.md':'text/plain; charset=utf-8','.js':'text/javascript'};
const HEAD='<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><link rel="icon" href="/logo/favicon.svg"></head><body style="margin:0">';
http.createServer((req,res)=>{
  let u=decodeURIComponent(req.url.split('?')[0]);
  if(u==='/') u='/index.html'; if(u==='/light') u='/index-light.html';
  const file=path.join(ROOT,u);
  if(!file.startsWith(ROOT)) {res.writeHead(403);return res.end();}
  fs.readFile(file,(err,buf)=>{
    if(err){res.writeHead(404);return res.end('Not found');}
    const ext=path.extname(file);
    res.writeHead(200,{'Content-Type':TYPES[ext]||'application/octet-stream'});
    if(ext==='.html' && !buf.toString('utf8',0,50).toLowerCase().includes('<!doctype')) return res.end(HEAD+buf.toString()+'</body></html>');
    res.end(buf);
  });
}).listen(PORT,'127.0.0.1',()=>console.log(`Zyqon.io preview: http://localhost:${PORT}  (light: /light)`));
