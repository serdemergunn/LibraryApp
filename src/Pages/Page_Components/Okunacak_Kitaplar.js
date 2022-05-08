import React, { Component } from 'react'

 class Okunacak_Kitaplar extends Component {
    constructor (props){
        super(props);
    
        this.state={
          like: 0,
          dislike: 0,
          tavsiye: "Okumalıyım."
        }
      }
    
    
      onClickEventBegeni=(e)=>{
        this.setState({
          like: this.state.like + 1
        })
        this.kontrol(this.state.like, this.state.dislike)
      }
    
    
    
      onClickEventBegenmeme(e){
        this.setState({
          dislike: this.state.dislike + 1
        })
    
       this.kontrol(this.state.like, this.state.dislike)
      }
    
      kontrol (a, b){
        if(a<b){
          this.setState({
            tavsiye: "Okumamalıyım!"
          })
        }
        else{
          this.setState({
            tavsiye: "Okumalıyım."
          })
        }
      }
    
  render() {
    const{kitap_adi,kitap_yazari,sayfa_sayisi}=this.props;
    return (
<tr class="table-info">
          <th scope="row">{kitap_adi}</th>
          <td>{kitap_yazari}</td>
          <td>{sayfa_sayisi}</td>
          <td><button type="button" class="btn btn-success btn-sm " onClick={this.onClickEventBegeni.bind(this)}>Beğen</button><span class="badge rounded-pill bg-success">{this.state.like}</span><button type="button" class="btn btn-danger btn-sm" onClick={this.onClickEventBegenmeme.bind(this)}>Beğenme</button><span class="badge rounded-pill bg-danger">{this.state.dislike}</span></td>
          <td>{this.state.tavsiye}</td>
        </tr>
    )
  }
}
export default Okunacak_Kitaplar;