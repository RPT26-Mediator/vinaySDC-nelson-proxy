const axios = require('axios')
const express = require('express');
const app = express();
const port = 3000;

app.use('/:listingID', express.static(__dirname + '/../public'));

app.get('/photos/:propertyID', (req, res) => {
  // axios.get(`http://localhost:3002/photos/${req.params.propertyID}/`)
  axios.get(`http://52.53.176.39:3002/photos/${req.params.propertyID}/`)
    .then((photos) => {
      res.send(photos.data);
    }).catch((err) => {
      res.send(err);
    });
});

app.get('/details/:propertyId', (req, res) => {
  // axios.get(`http://localhost:3003/details/${req.params.propertyId}/`)
  axios.get(`http://3.142.136.159/details/${req.params.propertyId}/`)
    .then((details) => {
      res.send(details.data);
    }).catch((err) => {
      res.send(err);
    });
});

app.get('/checkoutInformation/:propertyId', (req, res) => {
  axios.get(`http://localhost:3004/checkoutInformation/${req.params.propertyId}/`)
    .then((checkout) => {
      res.send(checkout.data);
    }).catch((err) => {
      res.send(err);
    });
});

app.get('/:listingID/reviews', (req, res) => {
  // axios.get(`http://localhost:3006/${req.params.listingID}/reviews`)
  axios.get(`http://3.101.105.128:3006/${req.params.listingID}/reviews`)
    .then((reviews) => {
      res.send(reviews.data);
    }).catch((error) => {
      console.log(error)
      res.send(error);
    })
});

app.get('/:listingID/averageReviewsRating', (req, res) => {
  // axios.get(`http://localhost:3006/${req.params.listingID}/averageReviewsRating/`)
  axios.get(`http://3.101.105.128:3006/${req.params.listingID}/averageReviewsRating/`)
    .then((details) => {
      res.send(details.data);
    }).catch((error) => {
      //console.log(error)
      res.send(error);
    })
});

app.get('/:listingID/host', (req, res) => {
  axios.get(`http://13.57.41.115:3007/${req.params.listingID}/host`)
  // axios.get(`http://localhost:3007/${req.params.listingID}/host`)
    .then((host) => {
      res.send(host.data);
    }).catch((error) => {
      console.log(error)
      res.send(error);
    })
});

app.listen(port, () => {
  console.log(`Proxy server listening on http://localhost:${port}/1`);
});
