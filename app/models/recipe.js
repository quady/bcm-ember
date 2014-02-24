var Recipe = DS.Model.extend({
  name: DS.attr(),
  instructions: DS.attr(),
  description: DS.attr(),
  created_at: DS.attr(),
  updated_at: DS.attr()
});

export default Recipe;
