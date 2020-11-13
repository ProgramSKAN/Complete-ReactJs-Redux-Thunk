import React from 'react'

class ImageCard extends React.Component {
    constructor(props){
        super(props);
        this.state={spans:0}
        this.imageRef=React.createRef();//gives reference to dom elemment like document.queryselector
    }

    componentDidMount(){
        // console.log(this.imageRef);//object
        // console.log(this.imageRef.current.clientHeight);//0 since image is not loaded yet
        this.imageRef.current.addEventListener('load',this.setSpans);
    }
    setSpans=()=>{
        const height=this.imageRef.current.clientHeight;//image height
        const spans=Math.ceil(height/10);//no of grid rows
        this.setState({spans});//{spans:spans}
    }

    render() {
        const {description,urls}=this.props.image;
        return (
            <div style={{gridRowEnd:`span ${this.state.spans}`}}>
                <img ref={this.imageRef} src={urls.regular} alt={description}/>
            </div>
        )
    }
}

export default ImageCard;
