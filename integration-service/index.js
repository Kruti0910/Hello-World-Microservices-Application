const express = require('express');
const axios = require('axios');

const app = express();

//const helloServiceUrl = 'axios.get('http://hello-service.default.svc.cluster.local:80')';
//const worldServiceUrl = 'http://127.0.0.1:65381';

app.get('/', async (req, res) => {
  try {
    const helloResponse = await axios.get('http://hello-service.default.svc.cluster.local:80/hello');
    const worldResponse = await axios.get('http://world-service.default.svc.cluster.local:80/world');


    res.send(`${helloResponse.data} ${worldResponse.data}`);
  } catch (error) {
    
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching data');
  }
});

const port = 8992;
app.listen(port, () => {
  console.log(`Integration service running on port ${port}`);
});

