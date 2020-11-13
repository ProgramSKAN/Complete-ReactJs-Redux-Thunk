//to avoid hard reload on every route click
import React from 'react';

const Link = ({href,className,children}) => {

    const onClick=(event)=>{
        if(event.metaKey||event.ctrlKey){//ctrl+click on nav link  open in new window
            return;
        }

        event.preventDefault();//prevent full page reload
        window.history.pushState({},'',href);
        
        const navEvent=new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };
    return <a href={href} className={className} onClick={onClick}>
        {children}
        </a>
}

export default Link;
