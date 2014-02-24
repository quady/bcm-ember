module.exports = function(server) {

  // Create an API namespace, so that the root does not 
  // have to be repeated for each end point.
  server.namespace('/api/v1', function() {

    // Return fixture data for '/api/posts/:id'
    server.get('/recipes', function(req, res) {
      var recipes = {
        "recipes" : [
          {
            "id": 1,
            "name": "Super Steak",
            "instructions": "1) Salt and Pepper steak<br> 2) Grill That Shit!<br> 3) Melt Butter on it<br> 4)Let it rest<br>",
            "description": "Make an awesome steak!!!",
            "created_at": "2014-01-20T04:56:49.493Z",
            "updated_at": "2014-01-20T04:56:49.493Z"
          },
          {
            "id": 2,
            "name": "Thai Steak Steak",
            "instructions": "1) Salt and Pepper steak<br> 2) Grill That Shit!<br> 3) Melt Butter on it<br> 4)Let it rest<br>",
            "description": "Make an awesome steak salad!!!",
            "created_at": "2014-01-20T04:57:49.493Z",
            "updated_at": "2014-01-20T04:57:49.493Z"
          },
          {
            "id": 3,
            "name": "Ultimate Wooden Steak",
            "instructions": "1) Salt and Pepper steak<br> 2) Grill That Shit!<br> 3) Melt Butter on it<br> 4)Let it rest<br>",
            "description": "Make an awesome steak, and then stab a vampire!!!",
            "created_at": "2014-01-20T04:58:49.493Z",
            "updated_at": "2014-01-20T04:58:49.493Z"
          }
        ]
      };
      res.send(recipes);
    });
  });
};
