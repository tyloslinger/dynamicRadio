const CategoryAPI = {
	categories:[],
	currentPage: null,
	addNewCategory(categoryObj){
		console.log("add new category from api");
	},
	init(){
		currentPage = {
			currentPage: ''
		}
	}
}

export default CategoryAPI;