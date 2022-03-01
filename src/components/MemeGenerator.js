import React, {Component} from 'react'

class MemeGenerator extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            memes : '',
            random: ''
        }
        this.handleClick = this.handleClick.bind(this)

    }

    handleClick(){
          const randomIndex = Math.floor( Math.random() * this.state.memes.length)
     
      console.log(this.state.memes[randomIndex])
      this.setState({ random: this.state.memes[randomIndex]})

    }
    componentDidMount() {

const loadData = async () =>{

    try {

        const url ='https://api.imgflip.com/get_memes';
        const resp = await fetch(url)
        const data = await resp.json()
        const {data:{memes}} = data;
      
        this.setState( {memes: memes})
    }catch(err){
        console.log(err)
    }

}

loadData()

    }



    render() {

        return (
            <div className="meme_container">
                <button className='meme_container_btn'
                onClick={this.handleClick}>
                    <span>Generate meme</span></button>
             {this.state.random &&     
                <div className="meme__result" >
                {/* <h1>{this.state.random.name}</h1> */}
                <img src={this.state.random.url} alt="random meme"  />
                </div>
                 }
            </div>
        )
    }
}

export default MemeGenerator