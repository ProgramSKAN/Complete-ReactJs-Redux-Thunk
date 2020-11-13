import React,{useState,useEffect} from 'react';
import axios from 'axios';

const Convert = ({language,text}) => {
    const [translated,setTranslated]=useState('');
    const [debouncedText,setDebouncedText]=useState(text);

//text>USEFFECT>set a timer to update debounced text in 500ms, return a cleanup function that cancels this timer.
//debouncedText>USEFFECT>make  a request with debouncedText
    useEffect(() => {
        const timerId=setTimeout(()=>{
            setDebouncedText(text);
        },500)
        return () => {
            clearTimeout(timerId);
        };
    }, [text]);

    useEffect(()=>{//rerender anytime language or text is changed
        const doTranslation=async()=>{
            const {data}=await axios.post('https://translation.googleapis.com/language/translate/v2',{},{
                params:{    
                    q:debouncedText,
                    target:language.value,
                    key:'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            });
            setTranslated(data.data.translations[0].translatedText);
        };
        doTranslation();
    },[language,debouncedText])//[language,text]

    return (
        <div>
            <h1 className="ui header">{translated}</h1>
        </div>
    );
}

export default Convert;
