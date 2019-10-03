<template>
  <div class="collection-grid">
    <div v-for="item in items" class="collection-tile">
      <collection-tile v-bind:title="item.title" v-bind:image="item.firstVariantImage"/>
    </div>
  </div>
</template>

<script>
  import { fetchCollectionData } from 'scripts/vue/graphql/collections.js' ;
  import collectionTile from 'scripts/vue/components/collections/collection-tile.vue'

  export default {
    data () {
      return {
        message: 'hello!' ,
        items: []
      }
    },
    methods: {
      handleClick: function() {
      }
    },
    components: {
      collectionTile
    },
    created () {
        fetchCollectionData('mens-shoes')
          .then(res => res)
          .then(res => {
            const products = res.data.collectionByHandle.products
            console.log(products)
            products.edges.map(item => {
              const productObject = {
                title: item.node.title,
                description: item.node.description,
                handle: item.node.handle,
                firstVariantImage: item.node.variants.edges[0].node.image.src
              }
              this.items.push(productObject)
              return item;
            }).join('')
            return this.items
          })
          .then(res => console.log(res))
    }
  }
</script>
<style scoped>
  
</style>