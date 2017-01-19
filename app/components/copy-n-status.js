import Ember from 'ember';

export default Ember.Component.extend({
  status: "N/A",

  actions: {
    onSuccess() {
      this.set('status', 'Success');
    },
    onError() {
      this.set('status', 'Error');
    }
  }
});
