var express = require('express');
var neo4j = require('neo4j');
if (neo4j){
  var db = new neo4j.GraphDatabase('http://neo4j:G00fu$3141@localhost:7474');
}
var router = express.Router();




router.get('/:relationship/:name', function(req, res, next){
  console.log(req.params.name);
  if (db){
    var queryString = '';
    if (req.params.relationship=='cousins'){
      queryString = 'MATCH (u:Person {firstname: {firstname}})<-[:MOTHER|:FATHER]-(v:Person)<-[:BROTHER|:SISTER]-(w:Person)<-[:SON|:DAUGHTER]-(x) RETURN x.firstname, x.lastname';
    }
    if (queryString === '' && req.params.relationship=='parents'){
      queryString = 'MATCH (u:Person {firstname: {firstname}})<-[:MOTHER|:FATHER]-(x) RETURN x.firstname, x.lastname';
    }
    if (queryString === '' && req.params.relationship=='siblings'){
      queryString = 'MATCH (u:Person {firstname: {firstname}})<-[:BROTHER|:SISTER]-(x) RETURN x.firstname, x.lastname';
    }
    if (queryString === '' && req.params.relationship=='aunts'){
      queryString = 'MATCH (u:Person {firstname: {firstname}})<-[:MOTHER|:FATHER]-(v:Person)<-[:SISTER]-(x) RETURN x.firstname, x.lastname';
    }
    if (queryString === '' && req.params.relationship=='uncles'){
      queryString = 'MATCH (u:Person {firstname: {firstname}})<-[:MOTHER|:FATHER]-(v:Person)<-[:BROTHER]-(x) RETURN x.firstname, x.lastname';
    }
    var node = db.cypher({

        query: queryString,
        params: {
            firstname: req.params.name,
        },
    }, function (err, results) {
        if (err) throw err;
        var result = results;
        if (!result) {
            console.log('No user found.');
        } else {
            var user = result;
            //console.log(JSON.stringify(user, null, 4));
            res.send(JSON.stringify(user, null, 4));
        }

        //response.send('pages/graphene', { results: results, something: "else" });
    });
  } else {
    res.send('db not started');
  }
});



module.exports = router;
