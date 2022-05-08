import React, { Component } from 'react'
import { Link, Route, Router } from 'react-router-dom';
import Yorumlar from './Yorumlar';

export default class Okunmuş_Kitaplar extends Component {
  render() {
    const{key, kitap_adi,kitap_yazari,sayfa_sayisi, puan}=this.props;
    return (
        <tr class="table-secondary" >
        <th scope="row">{kitap_adi}</th>
        <td>{kitap_yazari}</td>
        <td>{sayfa_sayisi}</td>
        <td>{puan}</td>

        <td><button type="button" class="btn btn-outline-light"><Link style={{ color : 'white', textDecoration:'none' }} to={"/yorum/"+ key}>Kitap Yorumuna Git</Link></button></td>

      </tr>
    )
  }
}
