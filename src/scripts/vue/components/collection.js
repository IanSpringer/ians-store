import Vue from 'Vue';
import { fetchCollectionData } from 'scripts/vue/graphql/collections.js';

export default {
  data: function () {
    return {
      count: 0
    }
  },
  template: `

    <button v-on:click="count++">You clicked me {{ count }} times.</button>
  `
}