<template>
  <ul id="example-1">
    <li v-for="item in items">
      {{ item }}
    </li>
  </ul>
</template>

<script>
  import { fetchCollectionData } from 'scripts/vue/graphql/collections.js';

  export default {
    data () {
      return {
        message: 'hello!',
        items: []
      }
    },
    methods: {
      handleClick: function() {
      }
    },
    created () {
        fetchCollectionData('mens-shoes')
          .then(data => console.log(data))
          .then(data => {
            const { edges } = data;
          })
    }
  }
</script>