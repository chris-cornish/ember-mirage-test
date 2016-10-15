// Factories enable us to define blueprints for our models.

import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  title(i) {
    return `Post ${i+1}`;
  },
  body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
});
