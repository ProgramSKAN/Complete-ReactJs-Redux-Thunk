import React,{ useState,useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [term,setTerm]=useState('Programming');
    const [debouncedTerm,setDebouncedTerm]=useState(term);
    const [results,setResults]=useState([]);

    // console.log('I RUN WITH EVERY RENDER');

    /*
    useEffect(()=>{//this arrow function can't be async
        const search=async ()=>{
            const {data}=await axios.get('https://en.wikipedia.org/w/api.php',{
                    params:{
                        action:'query',
                        list:'search',
                        origin:'*',
                        format:'json',
                        srsearch:term,
                    }
                });
            setResults(data.query.search);
            };

            if(term && !results.length){//initial render
                search();
            }else{//rerenders
                const timeoutId = setTimeout(() => {//REQUEST THROTLLING
                    if(term){
                        search();
                    }
                }, 500);
                return ()=>{//clean up function(use here for request throttling)
                    clearTimeout(timeoutId);
                }
            }
    },[term])
    //useEffect 2nd argument::
    //1.[]>Run at initial render
    //2.empty>Run at initial render,Run after every rerender
    //3.[data,dat2]>Run at initial render,Run after every rerender if either data has changed since last rerender
    //INSIDE USEEFFECT
    // const search=async ()=>{
    //     await axios.get('https://www.google.com')
    // }
    // search();
    //OR
    //(async ()=>{
    //     await axios.get('https://www.google.com')
    // })()
    //OR
    //axios.get('https://www.google.com')
    // .then()
    //-------------
    //USEEFFECT can return a cleanup function.cleanup function is not invoked in initial render.cleanup function will be invoked in subsequent rerenders before invoking the actual function.

    OR USE 2 USEEFFECTS LIKE BELOW TO AVOID WARNING DUE TO NOT ADDING ALL STATES like ([term,results.length]) IN USEEFFECT 2nd parameter
    //ACTUAL ERROR IS:React Hook useEffect has a missing dependency: 'results.length'. Either include it or remove the dependency array  react-hooks/exhaustive-deps
    //so anytime we use a prop or state inside USEEFFECT, react/eslint wants to reference those prop/state inside useeffect dependency array.
    //but in above code if we use it then,if term changes there will be request and then resut changes again there will be a request.
    //to avoid this double request , separate out dependecies like below
    */

    useEffect(()=>{
        const timerId=setTimeout(() => {
            setDebouncedTerm(term);
        }, 1000);
        return ()=>{
            clearTimeout(timerId);
        };
    },[term])

    useEffect(()=>{
        const search=async ()=>{
            const {data}=await axios.get('https://en.wikipedia.org/w/api.php',{
                    params:{
                        action:'query',
                        list:'search',
                        origin:'*',
                        format:'json',
                        srsearch:debouncedTerm,
                    }
                });
            setResults(data.query.search);
            };
            search();
    },[debouncedTerm])

    const renderedResults=results.map((result)=>{
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a  className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    {/* {result.snippet}   below can be dangerous due to xss*/}
                    <span dangerouslySetInnerHTML={{__html:result.snippet}}></span>
                </div>
            </div>
        );
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter search Term</label>
                    <input className="input" value={term} onChange={e=>setTerm(e.target.value)}/>
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    )
}

export default Search;
