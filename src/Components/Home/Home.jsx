/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Home.css'
import profile from './../../assets/reading-book.png'
import dollar from './../../assets/dollar.png'
import Card from '../Card/Card';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
       
  const [cards, setCards] = useState([])
  const [selector, setSelector] = useState([])
  const [Remaining, setRemaining] = useState(20)
  const [totalCost, setTotalcost] = useState(0)
 


  useEffect(() => {
         fetch('phero.json')
         .then(res => res.json())
         .then(data => setCards(data))
        
  },[])

         const handleBtn = (card) =>{
           const isExit = selector.find(item => item.id == card.id )
           let count = card.credit;
           if(isExit){
             return toast("Already booked");
           }
           else{
             
            selector.forEach(item =>{
              count = count + item.credit;

            })
            const totalRemaining = 20-count;
            
            if(count > 20){
              return toast("sorry 20 er beshi hoye gese");
            }
            else{
              setTotalcost(count);
              setRemaining(totalRemaining);
              setSelector([...selector, card]); 
            }
             
            

          }
                  
        }
    



  return (
    <div>
      <div className="main-container">
        <h2>
          <span>Programming</span> Hero Course Registration <br />
          Instructor With Jhankar Mahbub
        </h2>
        <div className="container">
          <div className="map">
            {cards.map((card) => (
              // eslint-disable-next-line react/jsx-key
              <div className="cart">
                <img className="photo" src={card.cover} alt="" />
                <div className="title">
                  <h3>{card.name}</h3>
                  <p className="descriptin">{card.title}</p>
                  {/* <p>{actor.country}</p> */}
                </div>
                <div className="price">
                 <img className='dollar-img' src={dollar} alt="" />
                  <h3>price:{card.price}</h3>
                  <img className="img" src={profile} alt="" />
                  <p>Credit: {card.credit} hr</p>
                </div>

                <button onClick={() => handleBtn(card)} className="btn">
                  Select
                </button>
                <ToastContainer position="top-center" autoClose={1500} />
              </div>
            ))}
          </div>

          <div className="right-side-card">
            {/* <h3>This is count card</h3> */}
            <Card
              selector={selector}
              Remaining={Remaining}
              totalCost={totalCost}
            ></Card>
          </div>
        </div>
      </div>
    </div>
  );

};

export default Home;