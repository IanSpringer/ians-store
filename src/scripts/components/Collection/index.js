import Vue from 'vue';
import CollectionTemplate  from 'scripts/vue/components/collections/app.vue';

export const initVue = () => {
	new Vue({
		delimiters: ['${', '}'],
    el: '#app-collection',
    components: {
    	'collection-template': CollectionTemplate
    }
	})
}

