<template>
  <div>
    <h2>{{ title }}</h2>
    <img v-bind:src="image" />
  </div>
</template>

<script>
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
    props: ['title', 'image'],
    created () {

    }
  }
</script>