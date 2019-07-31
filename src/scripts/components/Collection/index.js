import Vue from 'vue';

const collection = new Vue({
	el: '#collection',
	delimiters: ['${', '}'],
	data: {
		title: '',
		products: [],
		productsToShow: [],
		colorFilters: [],
		shellFilters: [],
		sizeFilters: [],
		filterSelected: false
	},
	methods: {
		filterClick: function(filter) {
			filter.isActive = true;
			if(!this.filterSelected) {
				this.productsToShow = this.products.filter(product => product[filter.type] == filter.value)
			} else {
				console.log(filter.type, filter.value)
				this.productsToShow = this.productsToShow.filter(product => product[filter.type] == filter.value)
			}
			this.filterSelected = true;
		},

		reset: function() {
			this.filterSelected = false;
			this.productsToShow = this.products
			this.shellFilters.map(item => item.active = false);
			this.sizeFilters.map(item => item.active = false)
			this.colorFilters.map(item => item.active = false)
		},

		getCollectionData: function(url) {

			fetch(url)
			  .then(function(response) {
			    return response.json();
			  })
			  .then(function(response) {
			  	let allSizes = new Set();
			  	let allShells = new Set();
			  	let allColors = new Set();
			    collection.title = response.title
			    response.products.map(function(item) {
			    	collection.products.push(item)
			    	collection.productsToShow.push(item)
			    	item.shell.map(item => allShells.add(item))
			    	item.color.map(item => allColors.add(item))
			    	item.size.map(item => allSizes.add(item))
			    	return item
			    })
			    Array.from(allColors).map(function(item) {
			    	const obj = {type: 'color', value: item, isActive: false}
			    	return collection.colorFilters.push(obj)
			    });
			    Array.from(allShells).map(function(item) {
			    	const obj = {type: 'shell', value: item, isActive: false}
			    	return collection.shellFilters.push(obj)
			    });
			    Array.from(allSizes).map(function(item) {
			    	const obj = {type: 'size', value: item, isActive: false}
			    	return collection.sizeFilters.push(obj)
			    });
			  });
		}
	},
	created() {
		this.getCollectionData(`/collections/${window.collectionHandle}?view=json`); 
	}
})

const init = () => {
	collection;
}

export default init;