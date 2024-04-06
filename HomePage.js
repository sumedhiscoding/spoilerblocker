const arr=document.querySelectorAll('div#content.style-scope.ytd-rich-item-renderer')
arr.forEach((e, i) => {
  if (i != -1) {
    const element = e.childNodes[0];
    if (element.getAttribute("is-short") != null) {
      //brr.push("element is a reel");
      const videoTitle=element.firstElementChild.children[1].firstElementChild.firstElementChild.lastElementChild;
   if(videoTitle.innerHTML.toLowerCase().includes("spoilers") && videoTitle.innerHTML.toLowerCase().includes("spiderman") && videoTitle.innerHTML.toLowerCase().includes("spider-man") ){
    //if the reel contains spoilers
    if(!videoTitle.innerHTML.toLowerCase().includes("no spoiler"))
        element.style.display="none";
   };
    } else {
      //brr.push("element is not a reel");
      const videoTitle=element.firstElementChild.childNodes[2].childNodes[1].firstElementChild.childNodes[1].firstElementChild;
    if(videoTitle.innerHTML.toLowerCase().includes("spoilers") &&  videoTitle.innerHTML.toLowerCase().includes("spiderman") && videoTitle.innerHTML.toLowerCase().includes("spider-man")){
        // if the video contains spoilers 
        if(!videoTitle.innerHTML.toLowerCase().includes("no spoiler"))
        {element.style.display="none";}
    };
   
    }
  }
});