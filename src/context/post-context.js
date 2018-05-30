import React from 'react';
const dataURL = `https://www.hackrva.org/blog/wp-json/wp/v2/posts?page=1`;

// this context will provide the first page of blog posts.  Additional sets will need to be fetched

const request = async () => 
    await (await fetch(dataURL)).json()


const PostContext = React.createContext(request());

export  const withPostData = Component => props => {
    return (
        <PostContext.Consumer > 
            {
                postOn => {
                    return <Component {...props} postOn = { postOn } /> 
                }
            }
        </PostContext.Consumer> 
    )}