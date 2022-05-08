import React, { Component } from 'react'
import BookConsumer from '../context';

export default class Kontrol_Paneli extends Component {
   state={
         
         isim:"jkh",
         yazar:"",
         sayfa:""
      
   }
    okunacak_kayit(){
       
               this.setState({
                  isim: document.getElementById("kitap_ismi").value,
                  yazar: document.getElementById("kitap_yazari").value,
                  sayfa: document.getElementById("sayfa_sayisi").value
                  })

    }
    addBook = (dispatch, e) => {
      e.preventDefault();
         const {isim, yazar, sayfa}= this.state;

         const newBook={
            kitap_adi: isim,
            kitap_yazari: yazar,
            sayfa_sayisi: sayfa
         }
         dispatch({type:"ADD_BOOK", payload: newBook});
    }
  render() {
  return (
     <BookConsumer>
        {
           value=>{
              const {dispatch}= value;
              return (
               <div className='container'>
                   <form onSubmit={this.addBook.bind(this, dispatch)}>
                  <div class="form-group col-sm-4">
                     <label class="col-form-label mt-4" for="kitap_ismi">Kitap İsmi</label>
                     <input type="text" class="form-control"  id="kitap_ismi"></input>
                  </div>
                  <div class="form-group col-sm-4">
                     <label class="col-form-label mt-4" for="kitap_yazari">Kitabın Yazarı</label>
                     <input type="text" class="form-control"  id="kitap_yazari"></input>
                  </div>
                  <div class="form-group col-sm-4">
                     <label class="col-form-label mt-4" for="sayfa_sayisi">Kitabın Sayfa Sayısı</label>
                     <input type="text" class="form-control" id="sayfa_sayisi"></input>
                  </div>
                     <div className="d-flex justify-content-end col-sm-4">
                     <button type="submit" class="btn btn-outline-warning mt-4 " value="Submit" onClick={this.okunacak_kayit.bind(this)}>EKLE</button>
         
                  </div>
                  </form>
         <h4>{this.state.isim}</h4>
               </div>
                          
             )
           }
        }
     </BookConsumer>
  )
  }
}
