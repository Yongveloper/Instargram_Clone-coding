

const likeBtn   = document.querySelectorAll('.heart');

    [].forEach.call(likeBtn, function(likeBtn){
        likeBtn.addEventListener("click",btnClick,false) ;
    }) ;

    function btnClick(e){    
        
        const likeIcon = e.path[0]        

        const likeCount=likeIcon.parentNode.parentNode.parentNode.childNodes[3].childNodes[1].childNodes[1].childNodes[1];        

        let likeCountInt;

        if(likeIcon.classList.contains('fa-heart-o')){
        likeCountInt= parseInt(likeCount.innerHTML)+1;
        
        } else{
        likeCountInt= parseInt(likeCount.innerHTML)-1;
        
        };

        likeCount.innerHTML=likeCountInt;
         
        likeIcon.classList.toggle('fa-heart-o');
        likeIcon.classList.toggle('fa-heart');      
    }

    