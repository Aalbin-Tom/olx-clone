import {createContext,useState} from 'react'


export const PostContext = createContext(null)



function Post ({children}){
const [postDetails,setPostDetails] = useState()
    console.log(postDetails+'postcontext')
    return(
        <PostContext.Provider value={{postDetails,setPostDetails}}>
            {children}
        </PostContext.Provider>
    )

}

export default Post