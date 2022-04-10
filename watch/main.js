function stopwatch(){
    function createTime (segunds){
        const data = new Date(segunds * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false, 
            timeZone: 'UTC'
        });
       }
       
       
       const watch = document.querySelector('.watch');
       
       let segunds = 0;
       let timer;
       
       function startWatch(){
           timer = setInterval(function(){
               segunds++;
               watch.innerHTML = createTime(segunds);
           }, 1000);
       }
       
       document.addEventListener(`click`, function(e){
           const el = e.target;
       
           if(el.classList.contains('start')){
               watch.classList.add('initiated');
               clearInterval(timer);
               startWatch();
           }
           if(el.classList.contains(`pause`)){
               clearInterval(timer);
               watch.classList.add('paused');
           }
           if(el.classList.contains(`zero`)){
               watch.classList.remove('paused', 'initiated');
               clearInterval(timer);
               watch.innerHTML = "00:00:00"
               segunds = 0;
           }
       })
       
       
}
stopwatch();

