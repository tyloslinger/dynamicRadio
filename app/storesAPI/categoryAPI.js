const CategoryAPI = {
	categoryGroup:[],
	categories:[],	
	//
	_getCategories(payload){
		if(payload === undefined){
			return CategoryAPI.categories;
		}else{					
			var temp = [];
			CategoryAPI.categories.forEach((cat) => {
				if(cat.groupName === payload.groupName){temp.push(cat);}
			});					
			return temp;
		}
	},
	//
	_addNewCategoryGroup(_categoryGroup){		
		if(CategoryAPI.categoryGroup.find( grp => grp.groupName === _categoryGroup.groupName) === undefined){			
			CategoryAPI.categoryGroup.push(_categoryGroup);
		}
	},
	//
	_addNewCategory(category){		
		if(CategoryAPI.categories.find(cat => cat.catName === category.catName) === undefined){
			CategoryAPI.categories.push(category)
		}
	},
	//
	_deleteCategory(category){		
		CategoryAPI.categories.splice(CategoryAPI.categories.findIndex( i => i === category), 1)		
	},
	//
	init(){
		currentPage = {
			currentPage: ''
		}
	}
}

export default CategoryAPI;