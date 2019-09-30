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
          .then(res => res)
          .then(res => {
            const  products  = res.data.collectionByHandle.products
            console.log(products.edges.map(item => item.node))
          })
    }
  }
</script>