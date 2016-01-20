const CategoryAPI = {
	categories:[],	
	//
	_addNewCategory(category){		
		if(CategoryAPI.categories.find(cat => cat.catName === category.catName) === undefined){
			CategoryAPI.categories.push(category)
		}
	},
	_removeCategory(category){
		console.log("before: ", CategoryAPI.categories);
		CategoryAPI.categories.splice(CategoryAPI.categories.findIndex( i => i === category), 1)
		console.log("after: ", CategoryAPI.categories);
	},
	//
	init(){
		currentPage = {
			currentPage: ''
		}
	}
}

export default CategoryAPI;