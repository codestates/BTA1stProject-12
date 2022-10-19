const {spawn, exec} = require('child_process');
const express = require('express');
const router = express.Router();

router.get('/generateAccount', async (req, res)=>{

  const ls = exec('celocli.cmd account:new', (error, stdout, stderr) => {
    if (stderr) {res.send({"status":"stderr", "message":stderr})};
    if (error) {res.send({"status":"error", "message":error})};

    if (stdout) {
      const data = stdout.split("\n");

      let mnemonic = data[2].split(": ")[1].replace("\u001b[22m\u001b[39m", "").split(" ");
      let address = data[3].split(" ")[1].replace("\u001b[22m\u001b[39m", "");
      let private = data[4].split(" ")[1].replace("\u001b[22m\u001b[39m", "");
      let public = data[5].split(" ")[1].replace("\u001b[22m\u001b[39m", "");

      res.send({
        "status":"success",
        "data": [{
          "mnemonic":mnemonic,
          "address": address,
          "private": private,
          "public": public
        }]
      });
    }
  });
});

module.exports = router;