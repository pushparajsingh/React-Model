// export const get_post =()=>{

//     return {
//         type:'GET_POSTS',
        
//     };
// };
export const add_post =(post)=>{
    console.log(6767,post)
    return{
        type  : "ADD_POSTS",
        payload : post
    }

};
export const update_post =(val,ids)=>{

    return {
        type:'UPDATE_POSTS',
        val:val,
        ids:ids
        
    };
};

export const delete_post = (id) =>{
    
    return {
        type:'DELETE_POST',
        payload:id
    }
};