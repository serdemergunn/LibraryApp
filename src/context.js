import React, { Component } from 'react'

const BookContext= React.createContext();

const reducer = (state, action)=>{
  switch(action.type){
    case "ADD_BOOK":
      return{
        ...state,
        okunacak_kitaplar: [...state.okunacak_kitaplar, action.payload ]
      }
      default:
        return state
  }
}

export class BookProvider extends Component {
    state={
        okunacak_kitaplar:[{
            
            kitap_adi:"Lolita",
            kitap_yazari:"Vladimir Nabokov",
            sayfa_sayisi:"123"
            },
            {
              
              kitap_adi:"Ulysses",
              kitap_yazari:"James Joyce",
              sayfa_sayisi:"259"
            },
            {
              
              kitap_adi:"Yüzyıllık Yalnızlık",
              kitap_yazari:"Gabriel Garcia Marquez",
              sayfa_sayisi:"321"
            },
            {
                
                kitap_adi:"Yakıcı Sır",
                kitap_yazari:"Stefan Zweig",
                sayfa_sayisi:"88"
              },
          ],
          
            okunmus_kitaplar:[{
                key:1,
                kitap_adi:"Martin Eden",
                kitap_yazari:"Jack London",
                sayfa_sayisi:"123",
                puan: "10/10",
                yorum:"Herkes Martin Eden'ın hikayesinde kendinden bir parça bulabilir."
                },
                {
                    key:2,
                  kitap_adi:"Jane Eyre",
                  kitap_yazari:"Charlotte Bronte",
                  sayfa_sayisi:"600",
                  puan: "7/10",
                  yorum: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus velit at mi gravida, a ultricies mi sagittis. Quisque id lacus eu velit tempor ultricies. Vivamus id rhoncus libero. Nulla sit amet viverra orci. Etiam turpis ex, tristique et felis quis, efficitur tincidunt sapien. Nulla malesuada nulla quis velit tristique blandit. Donec at sollicitudin leo, sed fermentum quam. Vivamus condimentum egestas felis, nec pulvinar neque facilisis vel. Aenean condimentum leo quis arcu hendrerit molestie sit amet hendrerit nisl."
                },
                {
                    key:3,
                  kitap_adi:"Benim Hüzünlü Orospularım",
                  kitap_yazari:"Gabriel Garcia Marquez",
                  sayfa_sayisi:"160",
                  puan: "6/10",
                  yorum:"Vivamus vitae pharetra quam, nec egestas libero. Nunc laoreet ligula in felis accumsan suscipit. Nam suscipit lacus ut purus vulputate, viverra maximus libero elementum. Fusce vel varius velit. Fusce volutpat bibendum finibus. Sed eget dui non elit ullamcorper consequat. Praesent urna libero, commodo vel aliquet ut, ornare vel odio. Ut sit amet enim nisl. Proin condimentum consequat urna, eget gravida lectus volutpat ut. Ut euismod suscipit dolor quis feugiat. Cras vitae felis non lectus congue fringilla. Praesent nec lacus maximus, mattis est quis, maximus est. Proin dapibus eros mauris, non pharetra dolor ultrices et. Sed lobortis libero ut varius tempus. Sed vel semper lectus, ac dapibus enim."
                }
              ],
              dispatch: action =>{
                this.setState(state => reducer(state, action))
              }
          }
  render() {
    return (
      
          <BookContext.Provider value={this.state}>
              {this.props.children}
          </BookContext.Provider>
    )
  }
  
}
const BookConsumer = BookContext.Consumer;

export default BookConsumer;
