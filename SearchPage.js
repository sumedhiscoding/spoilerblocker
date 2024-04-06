// for the videos
const arr=document.querySelectorAll('ytd-video-renderer'); 
//for all the reels
const arr2=document.querySelectorAll('ytd-reel-item-renderer');


arr.forEach((e)=>{
    const title=e.firstElementChild.lastElementChild.firstElementChild.firstElementChild.childNodes[1].lastElementChild.lastElementChild
    if(title.innerHTML.toLowerCase().includes('spoilers') &&  (title.innerHTML.toLowerCase().includes('spiderman') || title.innerHTML.toLowerCase().includes('spider man') )  )
    {
        title.innerHTML="CONTAINS SPOILERS"
    }
})