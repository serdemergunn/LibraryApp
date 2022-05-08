import { Component } from "react";
import BookConsumer from "../../context";
import Okunacak_Kitaplar from "./Okunacak_Kitaplar";

class Okunacaklar_Listesi extends Component{

    render(){
      return(
<BookConsumer>
  {
    value=>{
      const {okunacak_kitaplar}= value;
      
      return(
        okunacak_kitaplar.map(kitap => {
        return(
          <Okunacak_Kitaplar kitap_adi={kitap.kitap_adi} kitap_yazari={kitap.kitap_yazari} sayfa_sayisi={kitap.sayfa_sayisi}/>
      )}));
   
    }
  }
</BookConsumer>)
      }
}
export default Okunacaklar_Listesi;