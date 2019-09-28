import Vue from 'vue';
import CollectionTemplate  from 'scripts/vue/components/collection.vue';

export const initVue = () => {
	new Vue({
		delimiters: ['${', '}'],
    el: '#app-collection',
    components: {
    	'collection-template': CollectionTemplate
    }
	})
}

