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
		filterSelected: false,
		filterArray: [],
		collectionList: [],
		loading: true,
	},
	methods: {
		filterClick: function(filter) {
			filter.isActive = !filter.isActive;
			this.productsToShow = [];
			this.filterArray = [];
			this.colorFilters.map(item => {
				if(item.isActive) {
					this.filterArray.push(item)
				}
				return 
			})
			this.shellFilters.map(item => {
				if(item.isActive) {
					this.filterArray.push(item)
				}
				return item
			})
			this.sizeFilters.map(item => {
				if(item.isActive) {
					this.filterArray.push(item)
				}
				return item
			})
			this.products.map(product => {
				this.filterArray.map(filter => {
					if(product[filter.type].indexOf(filter.value) != -1) {
						console.log(product)
						this.productsToShow.push(product)
					}
				})
			})
			this.filterSelected = this.filterArray.length > 0;
			if(!this.filterSelected) {
				this.productsToShow = this.products;
			}
		},

		reset: function() {
			this.filterSelected = false;
			this.productsToShow = this.products;
			this.shellFilters.map(item => item.isActive = false);
			this.sizeFilters.map(item => item.isActive = false);
			this.colorFilters.map(item => item.isActive = false);
		},

		buildProductGrid: function(response) {
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
	    Array.from(allColors).map(function(item, key) {
	    	const obj = {type: 'color', value: item, isActive: false, key: key}
	    	return collection.colorFilters.push(obj)
	    });
	    Array.from(allShells).map(function(item, key) {
	    	const obj = {type: 'shell', value: item, isActive: false, key: key}
	    	return collection.shellFilters.push(obj)
	    });
	    Array.from(allSizes).map(function(item, key) {
	    	const obj = {type: 'size', value: item, isActive: false, key: key}
	    	return collection.sizeFilters.push(obj)
	    });
		},

		buildCollectionData: function(response) {
			response.collections.map(item => {
				const obj = {title: item.split(':')[0], handle: item.split(':')[1]}
				collection.collectionList.push(obj);
			})
		},

		clearState: function(handle) {
			this.products = [];
			this.productsToShow = [];
			this.colorFilters = [];
			this.shellFilters = [];
			this.sizeFilters = [];
			this.filterSelected = false;
			this.collectionList = [];
			this.loading = true;
			history.pushState(null, null, `https://localhost:3000${handle}`)
			return this.getCollectionData(handle)
		},

		getCollectionData: function(handle) {
			const collectionURL = `${handle}?view=json`
			fetch(collectionURL)
			  .then(function(response) {
			    return response.json();
			  })
			  .then(function(response) {
			  	collection.buildProductGrid(response)
			  	collection.buildCollectionData(response)
					setTimeout(function() {
						collection.loading = false
					}, 1500)
			  })
		}
	},
	created() {
		this.getCollectionData(window.collectionHandle); 
	}
})

const init = () => {
	collection;
}

export default init;