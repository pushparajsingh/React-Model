
const initialState ={
    posts: [],
}
const Post_reducer = (state = initialState ,action) =>{
   
    switch(action.type){ 
        case 'GET_POSTS':
            return {
                ...state
            }
        case 'ADD_POSTS':
            return {
            ...state,
            posts : state.posts.concat(action.payload)
        }
        case 'UPDATE_POSTS':
            var object = state.posts.find(value => action.ids == value.id)
            object.title = action.val;
            const b = state.posts.map((item)=>{
                if(action.ids == item.id)
                return object;
                else
                return item;
              })
            return {
                ...state,

                posts : b
            }
         
        case 'DELETE_POST':  
            const a = state.posts.filter((value) => {
                
             if(value.id != action.payload)
             {
                return value;
             }
         })
            return {
               ...state,
                  posts:a
            }

        default:
            return {
                ...state }
    }
}
export default Post_reducer;