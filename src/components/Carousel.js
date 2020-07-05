import React from 'react';
import devgrub from '../assets/images/Degree.jpg';
import youtube from '../assets/images/HSC.jpg';
import evverest from '../assets/images/SSC.jpg';

import Card from '../components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


class Carousel extends React.Component{
   constructor(props){
       super(props);
       this.state ={
        items:[
            {
                id:0,
                title: 'Dev Grub',
                subTitle: 'The cookbook for developers',
                imgSrc :  devgrub,
                link:'https://devgrub.com',
                selected:false
            },
            {
                id:1,
                title: 'Garret Love',
                subTitle: 'Youtube Channel',
                imgSrc : youtube,
                link:'https://www.google.com',
                selected:false
            },
            {
                id:2,
                title: 'Evverest',
                subTitle: 'A social network for developers',
                imgSrc : evverest ,
                link:'https://www.google.com',
                selected:false
            }
            
           
        ]
       }
   }

   handleCardClick = (id, card)=>{

        console.log(id)

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false: true;

        items.forEach(item =>{
            if(item.id!=id){
                item.selected =false;
            }
        });

        this.setState({
            items
        });

   }

   makeItems = (items) => {
    return items.map(item => {
        return <Card item= {item}  click={(e => this.handleCardClick(item.id, e))} key={item.id} />
    })
   }

   render(){
       return (
           <Container fluid={true}>
               <Row className='justify-content-around'>
                   {this.makeItems(this.state.items)}
               </Row>
           </Container>
       );
   }
}

export default Carousel;