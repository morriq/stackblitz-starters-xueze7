const express = require('express');
const next = require('next');

const nextApp = next({ dev: false });
const nextHandler = nextApp.getRequestHandler();

nextApp.setAssetPrefix(process.env.NEXT_PUBLIC_ASSET_PATH);

try {
   nextApp.prepare().then(() => {
    const server = express();

    server.use((req, res) => nextHandler(req, res));
    server.listen(3000);
   });
} catch (error) {
  console.log(error);
}
