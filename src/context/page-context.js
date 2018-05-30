import React from 'react';
const dataURL = `https://www.hackrva.org/blog/wp-json/wp/v2/pages`;


const request = async () => 
    await (await fetch(dataURL)).json()


const PageContext = React.createContext(request());

export  const withPageData = Component => props => {
    return (
        <PageContext.Consumer > 
            {
                pageOn => {
                    return <Component {...props} pageOn = { pageOn } /> 
                }
            }
        </PageContext.Consumer> 
    )}