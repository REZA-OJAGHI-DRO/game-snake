"use client";
import './globals.css';

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const box = useRef();
  const snake = useRef();
  const rr = useRef();
  const ll = useRef();
  const tt = useRef();
  const bb = useRef();
  const x = 19;
  const y = 19;
  const [r, setR] = useState(x);
  const [t, setT] = useState(y);
  const [z, setZ] = useState();
  const [d, setD] = useState();
  const[nd,setNd]=useState(1)
  const [data,setData]=useState([[0]])
  // const[move,setMove]=useState([])
  // const[move1,setMove1]=useState([])
  // const[move2,setMove2]=useState([])
  // const[move3,setMove3]=useState()
  // const[number,setNumber]=useState()
  // const[number1,setNumber1]=useState()
const [direction, setDirection] = useState('RIGHT');
  



  function food(){ 
    const fff=document.getElementById('fff')
    const p=Math.floor(Math.random()*256)
    const u=Math.floor(Math.random()*256)
    fff.style.background='rgb('+p+','+u+',230)'
    fff.style.boxShadow='0px 0px 10px 1px rgb('+p+','+u+',230)'
    fff.style.width='19px'
    fff.style.height='19px'
    fff.style.position='absolute'
    // fff.style.borderRadius='100%'
    const xx=Math.floor(Math.random()*19)
    const yy=Math.floor(Math.random()*19)
    setZ((xx+1)*19)
    setD((yy+1)*19)
    fff.style.left=(19*xx)+'px'
    fff.style.top=(19*yy)+'px'
    setData(add=>[...add,[nd]])
    setNd(nd+1)
  }
  
  if(r==z&&t==d){
    food()  
    }


  function start(){
      food()
      rr.current.setAttribute("data-status", "on");
    }
    function reset(){
      window.location.reload()
    }

    
      // setTimeout(()=>{
      //   for (let i = 0; i < move1.length; i+1) {
        
      //      if(move1[i]==number[0]&&move3[i]==number[1]){
      //     alert('game over')
      //   } 
        
      // } 
      // },1000)
     
    

  function right(e) {
    tt.current.setAttribute("data-status", "off");
    bb.current.setAttribute("data-status", "off");
    if (e.target.getAttribute("data-status") == "off"&& ll.current.getAttribute('data-status')=='off') {
      e.target.setAttribute("data-status", "on");
      if (r < x*y) {
        setTimeout(()=>{
          snake.current.style.left = r + "px";
          // setNumber([r,t])
          setR(r + x);

          data.map((val,i)=>{            
            // const q=(data.length-1)
            // setMove(para=>[...para,r])
            // setMove1(move.slice(-q)) 
          setTimeout(()=>{
            box.current.children[i+1].style.left =r+'px';
            box.current.children[i].style.display='flex';
          },(i*200))
        })
      },200)
      }
    }
  }
  
  function left(e) {
    tt.current.setAttribute("data-status", "off");
    bb.current.setAttribute("data-status", "off");

    if (e.target.getAttribute("data-status") == "off"&& rr.current.getAttribute('data-status')=='off') {
      e.target.setAttribute("data-status", "on");
      if (r > x) {
        setTimeout(()=>{
        snake.current.style.left = r - (2*x) + "px";
          setR(r - x);

          // const q=(data.length+1)
          // setMove(para=>[...para,r-20])
          // setMove1(move.slice(-q))
          

          data.map((val,i)=>{
            setTimeout(()=>{
              box.current.children[i+1].style.left =r- (2*x) +'px';
              box.current.children[i].style.display='flex';
            },(i*200))
          })
        },200)

      }
    }
  }
  
  function bottom(e) {
    rr.current.setAttribute("data-status", "off");
    ll.current.setAttribute("data-status", "off");
    if (e.target.getAttribute("data-status") == "off"&& tt.current.getAttribute('data-status')=='off') {
      e.target.setAttribute("data-status", "on");
      if (t < x*y) {
        setTimeout(()=>{
          snake.current.style.top = t + "px";
          setT(t + x);

          // const q=(data.length+1)
          // setMove2(para=>[...para,t+20])
          // setMove3(move2.slice(-q))

          data.map((val,i)=>{
            setTimeout(()=>{
              box.current.children[i+1].style.top = t +'px';
              box.current.children[i].style.display='flex';
            },(i*200))
          })
        },200)
        }
    }
  }

  function top(e) {
    rr.current.setAttribute("data-status", "off");
    ll.current.setAttribute("data-status", "off");
    if (e.target.getAttribute("data-status") == "off"&& bb.current.getAttribute('data-status')=='off') {
      e.target.setAttribute("data-status", "on");
      if (t > y) {
        setTimeout(()=>{
          snake.current.style.top = t - (2*y) + "px";
          setT(t - y);

          // const q=(data.length+1)
          // setMove2(para=>[...para,t-20])
          // setMove3(move2.slice(-q))

          data.map((val,i)=>{
            setTimeout(()=>{
              box.current.children[i+1].style.top = t- (2*y) +'px';
              box.current.children[i].style.display='flex';
            },(i*200))
          })
        },200)
        
      }
    }
  }

  setTimeout(function () {
    
      if( rr.current.getAttribute("data-status") == "on"){
        if (r < x*y) {
          snake.current.style.left = r + "px";
          setR(r + x);
          data.map((val,i)=>{
            // const q=(data.length-1)
            // setMove(para=>[...para,r])
            // setMove1(move.slice(-q))          
            setTimeout(()=>{
             box.current.children[i+1].style.left =r+'px';
             box.current.children[i].style.display='flex';
          },(i*200))
         })
        }else if(r>=x*y){
          setR(0)
          if (r < x*y) {
            snake.current.style.left = r + "px";
            setR(r + x);
            data.map((val,i)=>{
              setTimeout(()=>{
                // const q=(data.length-1)
                // setMove(para=>[...para,r])
                // setMove1(move.slice(-q)) 
               box.current.children[i+1].style.left =r+'px';
               box.current.children[i].style.display='flex';
            },(i*200))
           })
          }
        }
      }else if(ll.current.getAttribute("data-status") == "on"){  
        if (r > x) {
          snake.current.style.left = r - 2*x + "px";
          setR(r - x);

          // const q=(data.length+1)
          // setMove(para=>[...para,r-20])
          // setMove1(move.slice(-q))

          data.map((val,i)=>{
            setTimeout(()=>{
             box.current.children[i+1].style.left =r- 2*x +'px';
             box.current.children[i].style.display='flex';
          },(i*200))
         })

        }else if(r<=x){
          setR((x*y)+x)
          if (r > x) {
            snake.current.style.left = r - 2*x + "px";
            setR(r - x);

            // const q=(data.length+1)
            // setMove(para=>[...para,r-20])
            // setMove1(move.slice(-q))

            data.map((val,i)=>{
              setTimeout(()=>{
               box.current.children[i+1].style.left =r- 2*x+'px';
               box.current.children[i].style.display='flex';
            },(i*200))
           })

          }
        }
      }else if(tt.current.getAttribute("data-status") == "on"){       
          if (t > y) {
            snake.current.style.top = t - 2*y + "px";
            setT(t - y);

          //   const q=(data.length+1)
          // setMove2(para=>[...para,t-20])
          // setMove3(move2.slice(-q))

            data.map((val,i)=>{
              setTimeout(()=>{
               box.current.children[i+1].style.top = t- 2*y +'px';
               box.current.children[i].style.display='flex';
            },(i*200))
           })

          }else if(t<=y){
            setT((x*y)+x)
            if (t > (x*y)+x) {
              snake.current.style.top = t - 2*y + "px";
              setT(t - y);

          //     const q=(data.length+1)
          // setMove2(para=>[...para,t-20])
          // setMove3(move2.slice(-q))

              data.map((val,i)=>{
                setTimeout(()=>{
                 box.current.children[i+1].style.top = - 2*y +'px';
                 box.current.children[i].style.display='flex';
              },(i*200))
             })
            }
          }
        }else if(bb.current.getAttribute("data-status") == "on"){
            if (t < x*y) {
              snake.current.style.top = t + "px";
              setT(t + y);

          //     const q=(data.length+1)
          // setMove2(para=>[...para,t])
          // setMove3(move2.slice(-q))

              data.map((val,i)=>{
                setTimeout(()=>{
                 box.current.children[i+1].style.top = t +'px';
                 box.current.children[i].style.display='flex';
              },(i*200))
             })

            }else if(t>=x*y){
              setT(0)
              if (t < x*y) {
                snake.current.style.top = t + "px";

          //       const q=(data.length+1)
          // setMove2(para=>[...para,t])
          // setMove3(move2.slice(-q))

                data.map((val,i)=>{
                  setTimeout(()=>{
                   box.current.children[i+1].style.top = t +'px';
                   box.current.children[i].style.display='flex';
                },(i*200))
               })
              }
            }
          }

        }, 200);
        
function key(e){
if(e.key=='w'){
  rr.current.setAttribute("data-status", "off");
  ll.current.setAttribute("data-status", "off");
  if (tt.current.getAttribute("data-status") == "off"&& bb.current.getAttribute('data-status')=='off') {
    tt.current.setAttribute("data-status", "on");
    if (t > y) {
      setTimeout(()=>{
        snake.current.style.top = t - (2*y) + "px";
        setT(t - y);

        // const q=(data.length+1)
        // setMove2(para=>[...para,t-20])
        // setMove3(move2.slice(-q))

        data.map((val,i)=>{
          setTimeout(()=>{
            box.current.children[i+1].style.top = t- (2*y) +'px';
            box.current.children[i].style.display='flex';
          },(i*200))
        })
      },200)
      
    }
  }
  
}else if(e.key=='s'){
  rr.current.setAttribute("data-status", "off");
    ll.current.setAttribute("data-status", "off");
    if (bb.current.getAttribute("data-status") == "off"&& tt.current.getAttribute('data-status')=='off') {
      bb.current.setAttribute("data-status", "on");
      if (t < x*y) {
        setTimeout(()=>{
          snake.current.style.top = t + "px";
          setT(t + x);

          // const q=(data.length+1)
          // setMove2(para=>[...para,t+20])
          // setMove3(move2.slice(-q))

          data.map((val,i)=>{
            setTimeout(()=>{
              box.current.children[i+1].style.top = t +'px';
              box.current.children[i].style.display='flex';
            },(i*200))
          })
        },200)
        }
    }
}else if(e.key=='a'){
  tt.current.setAttribute("data-status", "off");
    bb.current.setAttribute("data-status", "off");

    if (ll.current.getAttribute("data-status") == "off"&& rr.current.getAttribute('data-status')=='off') {
      ll.current.setAttribute("data-status", "on");
      if (r > x) {
        setTimeout(()=>{
        snake.current.style.left = r - (2*x) + "px";
          setR(r - x);

          // const q=(data.length+1)
          // setMove(para=>[...para,r-20])
          // setMove1(move.slice(-q))
          

          data.map((val,i)=>{
            setTimeout(()=>{
              box.current.children[i+1].style.left =r- (2*x) +'px';
              box.current.children[i].style.display='flex';
            },(i*200))
          })
        },200)

      }
    }
}else if(e.key=='d'){
  tt.current.setAttribute("data-status", "off");
  bb.current.setAttribute("data-status", "off");
  if (rr.current.getAttribute("data-status") == "off"&& ll.current.getAttribute('data-status')=='off') {
    rr.current.setAttribute("data-status", "on");
    if (r < x*y) {
      setTimeout(()=>{
        snake.current.style.left = r + "px";
        // setNumber([r,t])
        setR(r + x);

        data.map((val,i)=>{            
          // const q=(data.length-1)
          // setMove(para=>[...para,r])
          // setMove1(move.slice(-q)) 
        setTimeout(()=>{
          box.current.children[i+1].style.left =r+'px';
          box.current.children[i].style.display='flex';
        },(i*200))
      })
    },200)
    }
  }
}
}

  return (
        <main onKeyUp={()=>key(event)} className="w-[100%] h-[100vh] bg-[rgb(34,39,56)] flex flex-wrap justify-center content-center">
      <div className="w-[100%] h-[10vh] flex justify-center items-center font-sans font-bold text-[3rem] text-[rgb(110,120,136)] gap-5">REZA OJAGHI</div>
      <div className="w-[100%] h-[10vh] flex justify-center items-center gap-5">
        <button className="w-[5rem] d h-[2rem] bg-[rgb(110,120,136)] font-sans font-bold uppercase rounded-lg" onClick={start}>start</button>
        <p className="w-[10rem] h-[2rem] flex justify-center items-center font-sans font-bold text-[rgb(110,120,136)] rounded-lg text-[1.5rem]">SCORE {nd-1}</p>
        <button className="w-[5rem] d h-[2rem] bg-[rgb(110,120,136)] font-sans font-bold uppercase rounded-lg" onClick={reset}>reset</button>
      </div>

      <div ref={box} className="div d1 w-[361px] h-[361px] bg-[rgb(24,24,37)] flex flex-wrap relative" >
        <div ref={snake} style={{ position: "absolute" }} className="w-[20px] top-0 left-0 border border-[rgb(24,24,136)] h-[20px] bg-white"></div>

        {data.map((val,i)=>{
          return(
            <div key={val} id={val} style={{ position: "absolute",display:'none' }} className="border  border-[rgb(24,24,136)] w-[20px] h-[20px] bg-white"></div>
          )
        })}
       
        <div id="fff"></div>
          
      </div>
      <div className="w-[100%] h-[20vh] my-1 flex justify-center content-center flex-wrap">
        <div className="w-[100%] flex justify-center">
          <button
            ref={tt}
            data-status="off"
            onClick={() => top(event)}
            className="w-[3rem] d m-1 shadow-xl h-[3rem] border-black bg-[rgb(110,120,136)] border-2 flex justify-center items-center text-[1.5rem]"
          >
            W
          </button>
        </div>
        <button
          ref={ll}
          data-status="off"
          onClick={() => left(event)}
          className="w-[3rem] d m-1 shadow-xl h-[3rem] border-black bg-[rgb(110,120,136)] border-2 flex justify-center items-center text-[1.5rem]"
        >
          A
        </button>
        <button
          ref={bb}
          data-status="off"
          onClick={() => bottom(event)}
          className="w-[3rem] d m-1 shadow-xl h-[3rem] border-black bg-[rgb(110,120,136)] border-2 flex justify-center items-center text-[1.5rem]"
        >
          S
        </button>
        <button
          ref={rr}
          data-status="on"
          onClick={() => right(event)}
          className="w-[3rem] d m-1 shadow-xl h-[3rem] border-black bg-[rgb(110,120,136)] border-2 flex justify-center items-center text-[1.5rem]"
        >
          D
        </button>
      </div>
    </main>
    
  );
}




  

  



 




