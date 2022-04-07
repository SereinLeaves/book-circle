export default{
    ranFile(){
      var myFileName=""
      var fileYear=new Date().getFullYear()+""
      var fileMon= new Date().getMonth()+1
      fileMon=fileMon<10 ? "0"+fileMon : fileMon+"";
      var fileDay= new Date().getDate();
      fileDay=fileDay<10 ? "0"+fileDay: fileDay+"";
      myFileName=fileYear+fileMon+fileDay+"/"
  
      var myId=Number(Math.random().toString().substr(3, 3) + Date.now()).toString(36);  
      
      return myFileName+myId;
    },
  
    houZhui(str){
      var idx=str.lastIndexOf(".");
      var hz=str.substring(idx);
      return hz;
    }
  }