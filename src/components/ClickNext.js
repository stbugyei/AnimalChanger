import React, { Component } from 'react'
//import React from 'react'
//import uuid from "uuid";


const animals = [
    {
        name: 'Cat',
        image: 'https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg'
    },
    {
      
        name: 'Dog',
        image:
            'https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg'
    },
    {
    
        name: 'Koala',
        image:
            'https://pbs.twimg.com/profile_images/1367917640/Twitter_Profile_Picture_400x400.jpg'
    },
    {
   
        name: 'Lion',
        image:
            'https://www.bornfree.org.uk/storage/media/content/images/Field%20Conservation%20Work/Meru/meru-1.jpg'
    },
    {
    
        name: 'Zebra',
        image:
            'https://africanzebra.files.wordpress.com/2012/11/zebra-4-400-x-400.jpg?w=584'
    },
    {
     
        name: 'Tiger',
        image:
            'https://img.apmcdn.org/1d7e509f9c3948721d903c2c77c97cc8ce30a02a/square/d31ef8-20161130-molniy.jpg'
    },
    {
     
        name: 'Elephant',
        image:
            'https://www.humanesociety.org/sites/default/files/styles/400x400/public/2018/08/elephant-235105.jpg?h=3fbe8d4f&itok=9_KcfZat'
    },
    {
     
        name: 'Hyena',
        image:
            'https://dlp2gfjvaz867.cloudfront.net/product_photos/52538777/Hyena_20smaller_400sq.jpg'
    },
    {
    
        name: 'Wild Dog',
        image:
            'https://2.bp.blogspot.com/_DfiJkdLFAtk/TMkzrmSXiVI/AAAAAAAABMI/G2u5rD64FqM/s400/licaone01.jpg'
    }
]


class  ClickNext  extends Component{
    
        state = {
                index: 0,
                animals
            };
      
    Next = () => { 
        if (this.state.index < this.state.animals.length -1) {
          this.setState({index: this.state.index + 1});
        } else {
          this.setState({index: 0});
        }  
      }
    

       // ========= mapping out the name and image ======= 
    render() {

    /* const AnimalList =  this.state.animals.map((animal, index) => {
            return (<div className="NameImage" key={index}>
                <h4>{animal.name}</h4>
                <img className="image-container" src={animal.image} alt="new" />
                <div><button onClick={this.Next}>NEXT</button></div>
            </div>);
        });*/
        return (<div className="wrapper">
 
            <div style= {{margin:'20px'}}>{this.state.animals[this.state.index].name}</div>
            <div><img className="image-container" src={this.state.animals[this.state.index].image} alt="new" /></div>
            <div className = 'btn'><button onClick={this.Next}>NEXT</button></div>
        </div>);
    
    }

}
export default ClickNext 
