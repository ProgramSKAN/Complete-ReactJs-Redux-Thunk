import React,{useState} from 'react'

//CLASS BASED
// class Accordion extends React.Component{
//     onTitleClick(){
//     }
//     render(){
//     }
// }
//OR
//FUNCTION COMPONENT
const Accordion = ({items}) => {
    const [activeIndex,setActiveIndex]=useState(null);
    // const [<piece of state>,<function to change this piece of state>]=useState(<initial value for this piece of state>);


    const onTitleClick=(index)=>{
        setActiveIndex(index);
    }

    const renderedItems=items.map((item,index)=>{
        const active=index===activeIndex?'active':'';
        return <React.Fragment key={item.title}>
            <div className={"title"+active} onClick={()=>onTitleClick(index)}>
                <i className="dropdown icon"></i>
                {item.title}
            </div>
            <div className={`content ${active}`}>
                <p>{item.content}</p>
            </div>
        </React.Fragment>
    })

    return (
        <div className="ui styled accordion">
            {renderedItems}
        </div>
    )
}

export default Accordion;
