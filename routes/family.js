var express = require('express');
var neo4j = require('neo4j');
var db = new neo4j.GraphDatabase('http://neo4j:G00fu$3141@localhost:7474');
var router = express.Router();




router.get('/', function(req, res, next){



  var node = db.cypher({
      query: 'MATCH (u:Person {firstname: {firstname}})<-[:MOTHER|:FATHER]-(v:Person)<-[:BROTHER|:SISTER]-(w:Person)<-[:SON|:DAUGHTER]-(x) RETURN x.firstname, x.lastname',
      params: {
          firstname: 'Ellie',
      },
  }, function (err, results) {
      if (err) throw err;
      var result = results;
      if (!result) {
          console.log('No user found.');
      } else {
          var user = result;
          console.log(JSON.stringify(user, null, 4));
          res.send(JSON.stringify(user, null, 4));
      }

      //response.send('pages/graphene', { results: results, something: "else" });
  });

});

module.exports = router;
