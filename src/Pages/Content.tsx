import Description from "../Components/Description.tsx";
import { useEffect, useRef, useState } from "react";
import { appPage, appState } from "../store/index.ts";
import AFirstPage from "../Components/AFirstPage.tsx";
import "../Components/Styles/content.css"

import { useSnapshot } from "valtio";
import { Contact } from "../Components/Contact.tsx";

//https://www.npmjs.com/package/react-use-gesture
import { useScroll, useWheel } from "react-use-gesture";
import gsap from "gsap";
import { Knowledge } from "../Components/Knowledge.tsx";
import { Technologies } from "../Components/Technologies.tsx";


  export const ContentPages = () => {

  const scrollRef = useRef(null);
  const appStateSnapshot = useSnapshot(appState);
  //const pageValue = useSnapshot(appPage);
  const [firstScroll, setFirstScroll] = useState(false);
  const [scrollIsNotBusy, setScrollIsNotBusy] = useState(true);

  const [scrollOffset, setScrollOffset] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [page, setPage] = useState(null);
  const [intention, setIntention] = useState(null);
  

  //Deactivate classic scroll
  const handleScroll = (event: MouseEvent) => event.preventDefault();
  const handleTouchStart = (event: TouchEvent) => {
                                        event.preventDefault();
                                        setTouchStart(event.touches[0].clientY);
                                      };
  const handleTouchEnd = (event: TouchEvent) => {
                                      event.preventDefault();
                                      if(scrollIsNotBusy)setTouchEnd(event.changedTouches[0].clientY);      
                                      };

  const moveToAnotherPage = () => {
                                        if(scrollIsNotBusy){
                                                            setScrollIsNotBusy(false);
                                                            if(!firstScroll){setFirstScroll(true)};
                                                            const nextDivToGo = page[page.desir?"up":"down"]

                                                            if(page.desir && nextDivToGo)appPage.actualPage--

                                                            if(nextDivToGo){
                                                              appPage.actualPageName = nextDivToGo.className
                                                              gsap.to(scrollRef.current, { duration: 0.9, scrollTop: nextDivToGo.offsetTop, ease: "power2.inOut", onComplete:()=>{setScrollIsNotBusy(true)} })
                                                            }else{
                                                              appPage.actualPageName = page.actualPage
                                                              setScrollIsNotBusy(true);
                                                            }
                                        }
                                    }



  
 useScroll((event) => setScrollOffset(event.offset[1]) ,{domTarget: scrollRef}) 

  useWheel(({event, last, offset}) => {
                              if(scrollIsNotBusy){
                                              console.log("penser a inverser le sens sur apple")
                                              setIntention(event.wheelDelta>0?true:false);

                                            //For webGL background
                                            //const NUMBER_OF_PAGE = scrollRef.current.childNodes.length;
                                            //const sensitivity = 200
                                            //const currentState = offset[1]/sensitivity
                                            //const progress = currentState%1
                                            //const current = Math.floor((currentState + NUMBER_OF_PAGE*1000)%NUMBER_OF_PAGE);
                                            }
                                },{domTarget: scrollRef})


  const defineWhereScrollIs = (desir) => {
                                            let closestChild = null;
                                            let closestOffsetDiff = Infinity;
                                            let previousChild = null;
                                            let nextChild = null;

                                            scrollRef.current.childNodes.forEach((obj, index) => {
                                              const childOffsetTop = obj.offsetTop;
                                              const offsetDiff = Math.abs(childOffsetTop - scrollOffset);
                                              if (offsetDiff < closestOffsetDiff) {
                                                //Si l'utilisateur a reussi a scroller manuellement
                                                closestOffsetDiff = offsetDiff;
                                                closestChild = obj;
                                                //console.log(`closestChild= ${closestChild.className} | offsetDiff= ${offsetDiff}`);
                                                }

                                              if (offsetDiff < 30) {
                                                //Scroll fixe et auto
                                                if (index > 0) previousChild = scrollRef.current.childNodes[index - 1]
                                                if (index < scrollRef.current.childNodes.length - 1) nextChild = scrollRef.current.childNodes[index + 1]
                                                }
                                            });

                                            if(nextChild===null){
                                              nextChild=scrollRef.current.childNodes[0]
                                              appPage.actualPage = 0
                                            }else{
                                              if(!desir) appPage.actualPage++
                                            }

                                            setPage({
                                              up: previousChild,
                                              closest: closestChild,
                                              down: nextChild,
                                              desir: desir
                                            })
  }

  useEffect(() => {
    document.addEventListener("wheel", handleScroll, { passive: false });
    scrollRef.current.addEventListener("touchstart", handleTouchStart);
    scrollRef.current.addEventListener("touchend", handleTouchEnd);
    return () => {
      document.removeEventListener("wheel", handleScroll);
      scrollRef.current.removeEventListener("touchstart", handleTouchStart);
      scrollRef.current.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  useEffect(()=>{ if(touchEnd !== null)setIntention(touchEnd>touchStart?true:false); } , [touchEnd] )

  useEffect( () => {
     if(appStateSnapshot.introAlreadySee) scrollRef.current.style.overflowY = "auto"
     if(appStateSnapshot.introAlreadySee && appPage.actualPage === 0) setIntention(false)
    } , [appStateSnapshot])

  useEffect(() => { if(page){ moveToAnotherPage(); } },[page])

  useEffect(() => {
      if(intention !== null){
        defineWhereScrollIs(intention);
        setIntention(null);
      }
      },[intention])

      

  return (
            <>
              
              {firstScroll? <AFirstPage firstScroll={true} mini={true}/>:<></>}

              <div ref={scrollRef} className="content">
                
                 <AFirstPage firstScroll={false} mini={false}/>
                 <Knowledge onFocusPageNumber={appPage.actualPage} onFocusPageName={appPage.actualPageName}/>
                 <Description/>
                 
                 {/* <Technologies/> */}
                 
                 
                {/*
                  <Contact/>
                  */
                }
              </div>
              
              {/*
              <Header/>
              <IntroTextTioms/>*/}
                {
                /*
                  showIntro && !appState.introAlreadySee?<IntroLogo/>:
                                                              <>
                                                                <Header/>
                                                                <Description/>
                                                                <Footer/>
                                                              </>
                  */
                }

            </>
          );
  
}