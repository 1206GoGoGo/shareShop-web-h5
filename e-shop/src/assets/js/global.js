

const global={
    path_style:"@/assets/style/",
    path_js:"@/assets/js/",


    countDownOption:function(val){
        val.status=true;
      
        var interval = setInterval(function(){
           //console.log("interval:"+val.seconds);
            if(val.seconds>0&&val.status){
                val.seconds--;
            } 
            else{
                val.status=false;
                val.seconds=val.totalSeconds;
                clearInterval(interval);
            }
        },1000);


    }


};



export default global;