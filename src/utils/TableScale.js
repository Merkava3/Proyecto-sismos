const TableScale = (number) => {
     if (number === -Infinity || isNaN(number)) {
      return false
    }
  
     if(number <= 3.5 ){
          return {
            color:'#27AE60',
            msg:'Microsismo detectado por instrumentos',
            number: number.toFixed(1)
     };
  
     }
  
     if(number  >= 3.5 && number <= 5.4){        
        return{
          color:'#1E8449',
          msg:'Sentido por algunas personas (generalmente en reposo)',
          number: number.toFixed(1)}
          }
     
     if(number >= 5.5 && number <= 6.0){ 
                return {
                  color:'#F1C40F',
                  msg:'Sentido por algunas personas dentro de edificios',
                  number: number.toFixed(1)
                }
     }
     
     if(number  >= 6.1 && number <= 7.0){ 
       return {
         color:'#D68910',
         msg:'Sentido por algunas personas fuera del edificios',
         number: number.toFixed(1)}
     }
     
     if(number  >=  7.0 && number <= 7.9){
       return {
         color:'#B03A2E',
         msg:'sentido por casi todos daños serios edificios',
         number: number.toFixed(1)}
          }     
     if(number >= 8){       
           return {
             color:'red',
             msg:'destructivo daños muy grandes edificios',
             number:number.toFixed(1)
           }
   }  
}
export default TableScale