import { Component } from "react";
import Okunacaklar_Listesi from "./Page_Components/Okunacaklar_Listesi";

class Okunacaklar extends Component{

  
    render(){

              return(
                <div className="container"  >
                <table class="table table-hover">
               <thead>
                 <tr>
                   
                   <th scope="col">Kitap İsmi</th>
                   <th scope="col">Kitap Yazarı</th>
                   <th scope="col">Sayfa Sayısı</th>
                   <th scope="col">Beğen/ Beğenme</th>
                   <th scope="col">Sizin Tavsiyelerinizle...</th>
                 </tr>
               </thead>
               <tbody>
               <Okunacaklar_Listesi/>
        
                 
               
               </tbody>
             </table>
             </div> 
              );

      
    }
}
export default Okunacaklar;