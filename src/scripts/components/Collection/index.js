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
		filterProducts: function(filter) {
			filter.isActive = !filter.isActive;
			this.productsToShow = [];
			const filterString = `${filter.type}:${filter.value}`;
			if(filter.isActive) {
				this.filterArray.push(filterString);
			} else {
				const index = this.filterArray.indexOf(filterString)
				this.filterArray.splice(index, 1);
			}

			if(this.filterArray.length > 0) {
				collection.products.map(product => {
					let filterCount = 0;
					product.filterTags.map(item => {
						if(collection.filterArray.indexOf(item) != -1) {
							filterCount++
						}
						return filterCount;
					})
					if(filterCount === collection.filterArray.length) {
						collection.productsToShow.push(product)
					}
				})
			} else {
				this.productsToShow = this.products;
			}
		},

		reset: function() {
			this.filterSelected = false;
			this.productsToShow = this.products;
			this.filterArray = [];
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
	    	const obj = {type: 'color', value: item, isActive: false, key: key, filterString: `color:${item}`}
	    	return collection.colorFilters.push(obj)
	    });
	    Array.from(allShells).map(function(item, key) {
	    	const obj = {type: 'shell', value: item, isActive: false, key: key, filterString: `shell:${item}`}
	    	return collection.shellFilters.push(obj)
	    });
	    Array.from(allSizes).map(function(item, key) {
	    	const obj = {type: 'size', value: item, isActive: false, key: key, filterString: `size:${item}`}
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
			history.pushState(null, null, `https://localhost:3000${handle}`);
			return this.getCollectionData(handle);
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