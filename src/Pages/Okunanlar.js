import { Component } from "react";
import Okunanlar_Listesi from "./Page_Components/Okunanlar_Listesi";

class Okunanlar extends Component{
  
    render(){
      return(
            <div className="container"  >
     <table class="table table-hover">
    <thead>
      <tr>
        
        <th scope="col">Kitap İsmi</th>
        <th scope="col">Kitap Yazarı</th>
        <th scope="col">Sayfa Sayısı</th>
        <th scope="col">Puan</th>
        <th scope="col">Yorum</th>
      </tr>
    </thead>
    <tbody>
    <Okunanlar_Listesi />
    </tbody>
  </table>
  </div> 
      );}
}
export default Okunanlar;