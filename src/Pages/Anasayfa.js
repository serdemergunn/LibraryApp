import Okunacaklar from "./Okunacaklar";
import Okunanlar from "./Okunanlar";

function Anasayfa(){
    return(
    <div className="container"  >

<div class="card border-secondary mt-3 col-sm-4" styles="width: 20px " >
  <div class="card-header">Anasayfa</div>
  <div class="card-body">
    <h4 class="card-title">Kütüphanem</h4>
    <p class="card-text">Bu blog, okuduğum ve okuyacağım kitaplardan oluşur. 
    Bana okumam için kitap önerilerinde bulunabilir, okuduğum kitaplar hakkında benimle sohbet edebilir,
    okuyacağım kitaplara yorumda bulunabilirsiniz.</p>
    </div>
</div>


</div>
    );
}
export default Anasayfa;