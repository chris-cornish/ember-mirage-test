// We only use models to define relationships. Attributes are specified in factories.

import { Model, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  comments: hasMany('comment')
});
