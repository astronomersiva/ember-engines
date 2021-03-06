import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  exampleService: service(),

  model() {
    // cause a service to be instantiated, so that our tests can
    // confirm that it gets cleaned up
    this.get('exampleService');

    return {
      name: 'Derek Zoolander',
    };
  },
});
