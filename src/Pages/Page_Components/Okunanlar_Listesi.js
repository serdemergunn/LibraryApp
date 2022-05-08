import { Component } from "react";
import BookConsumer from "../../context";
import Okunmuş_Kitaplar from "./Okunmuş_Kitaplar";
import Yorumlar from "./Yorumlar";

class Okunanlar_Listesi extends Component{

    render(){
      return(
        <BookConsumer>
          {
            value=>{
              const {okunmus_kitaplar}=value;
              

      return(
        okunmus_kitaplar.map(kitap=>{
          return(
            <Okunmuş_Kitaplar key={kitap.key} kitap_adi={kitap.kitap_adi} kitap_yazari={kitap.kitap_yazari} sayfa_sayisi={kitap.sayfa_sayisi} puan={kitap.puan}/>
          )
        })
          );
            }
          }
        </BookConsumer>
      )
}
}
export default Okunanlar_Listesi;