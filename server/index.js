const axios = require('axios');
const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());
const path = require('path');
const newrelic = require('newrelic');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.use(express.static(__dirname + '/../public'));

// app.get('/photos/:propertyID', (req, res) => {
//   // axios.get(`http://localhost:3002/photos/${req.params.propertyID}/`)
//   axios.get(`http://52.53.176.39:3002/photos/${req.params.propertyID}/`)
//     .then((photos) => {
//       res.send(photos.data);
//     }).catch((err) => {
//       res.send(err);
//     });
// });

// app.get('/details/:propertyId', (req, res) => {
//   // axios.get(`http://localhost:3003/details/${req.params.propertyId}/`)
//   axios.get(`http://3.142.136.159/details/${req.params.propertyId}`)
//     .then((details) => {
//       res.send(details.data);
//     }).catch((err) => {
//       res.send(err);
//     });
// });

// app.get('/checkoutInformation/:propertyId', (req, res) => {
//   axios.get(`http://localhost:3004/checkoutInformation/${req.params.propertyId}/`)
//     .then((checkout) => {
//       res.send(checkout.data);
//     }).catch((err) => {
//       res.send(err);
//     });
// });

// app.get('/:listingID/reviews', (req, res) => {
//   // axios.get(`http://localhost:3006/${req.params.listingID}/reviews`)
//   axios.get(`http://3.101.105.128:3006/${req.params.listingID}/reviews`)
//     .then((reviews) => {
//       res.send(reviews.data);
//     }).catch((error) => {
//       console.log(error)
//       res.send(error);
//     })
// });

// app.get('/:listingID/averageReviewsRating', (req, res) => {
//   // axios.get(`http://localhost:3006/${req.params.listingID}/averageReviewsRating/`)
//   axios.get(`http://3.101.105.128:3006/${req.params.listingID}/averageReviewsRating/`)
//     .then((details) => {
//       res.send(details.data);
//     }).catch((error) => {
//       //console.log(error)
//       res.send(error);
//     })
// });

app.get('/host/:id', (req, res) => {
  axios.get(`http://3.129.55.10:3007/hosts/${req.params.id}`)
  // axios.get(`http://localhost:3007/${req.params.listingID}/host`)
    .then((host) => {
      res.send(host.data);
    }).catch((error) => {
      res.status(400).send(error);
    });
});

//load

app.get('/loadHost/:id', (req, res) => {
  axios.get(`http://172.31.22.170/hosts/${req.params.id}`)
  // axios.get(`http://localhost:3007/${req.params.listingID}/host`)
    .then((host) => {
      res.send(host.data);
    }).catch((error) => {
      res.status(400).send(error);
    });
});

app.post('/addHosts', (req, res) => {

  axios.post('http://3.129.55.10:3007/addHosts', {data: req.body})
    .then((host) => {
      res.status(200).send('Users added', host);
    }).catch((error) => {
      res.status(400).send(error);
    });
});

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

app.listen(port, () => {
  console.log(`Proxy server listening on http://localhost:${port}/1`);
});
