import Vue from 'vue';
import VueResource from 'vue-resource'
Vue.use(VueResource);

const collection = new Vue({
	el: '#collection',
	delimiters: ['${', '}'],
	data: {
		title: '',
		products: [],
		filters: []
	},
	methods: {
		getCollectionData: function(url) {

			fetch(url)
			  .then(function(response) {
			    return response.json();
			  })
			  .then(function(response) {
			  	const filterSet = new Set()
			    collection.title = response.title
			    response.products.map(function(item) {
			    	console.log('item', item)
			    	collection.products.push(item)
			    	filterSet.add(item.shell)
			    	filterSet.add(item.color)
			    	collection.filters = Array.from(filterSet)
			    })
			  });
		}
	},
	created() {
		this.getCollectionData(`/collections/drum-kits?view=json`); 
	}
})

const init = () => {
	collection;
}

export default init;