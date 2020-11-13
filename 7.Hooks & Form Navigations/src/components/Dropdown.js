import React,{useState,useEffect,useRef} from 'react';

const Dropdown = ({label,options,selected,onSelectedChange}) => {
    const [open,setOpen]=useState(false);
    const ref=useRef();

    useEffect(()=>{
        const onBodyClick=(event)=>{
            if(ref.current && ref.current.contains(event.target)){//if element that is click is inside the component don't close dropdown
                return;     //ref.current might becomes null is dropdown is conditionally rendered.so cleanup body click event listener 
            }
            setOpen(false);
        };
        document.body.addEventListener('click',onBodyClick);
        return ()=>{
            document.body.removeEventListener('click',onBodyClick);
        };
    },[])
    //ANY TIME addEventListener gets called first than react click event listeners even in event bubling
    const renderedOptions=options.map((option)=>{
        if(option.value===selected.value){
            return null;//dont show selected option again in dropdown
        }
        return(
            <div className="item" key={option.value} onClick={()=>onSelectedChange(option)}>
                {option.label}
            </div>
        );
    });
    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div className={`ui selection dropdown ${open?'visible active':''}`} onClick={()=>setOpen(!open)}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open?'visible transition':''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dropdown;
