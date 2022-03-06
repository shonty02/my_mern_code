import { useState } from "react";

const Gallery = () => {
   
        <h1>Gallery Component</h1>
        const url1 =
            "https://venturebeat.com/wp-content/uploads/2021/11/forzahorizon5-1.jpg?fit=2560%2C1440&strip=all";
        const url2 =
            "https://cdn1.epicgames.com/offer/3ddd6a590da64e3686042d108968a6b2/EGS_GodofWar_SantaMonicaStudio_S1_2560x1440-5d74d9b240bba8f2c40920dcde7c5c67_2560x1440-5d74d9b240bba8f2c40920dcde7c5c67";
        const url3 =
            "https://venturebeat.com/wp-content/uploads/2020/09/Crash-Bandicoot%E2%84%A2-4_-Its-About-Time_20200928205415.jpg?fit=3840%2C2160&strip=all";
        const url4 =
            "https://media.newyorker.com/photos/590977c9019dfc3494ea2f7f/master/pass/Johnston-Clash-Clans.jpg";




        const [mainimg, setMainimg] = useState(url1);

            const changeImage = (imgurl) => {
            setMainimg(imgurl);
        }
    
    return (
        <div className="container">
        <h1 className="text-center">Gallery Component</h1>
        <hr />
  
        <img className="img-fluid mt-5" src={mainimg} alt="" />
  
        <div className="row">
          <div className="col-md-3">
            <img onClick={ () => { changeImage(url1) } } className="img-fluid" src={url1} alt="" />
          </div>
          <div className="col-md-3">
            <img onClick={ () => { changeImage(url2) } } className="img-fluid" src={url2} alt="" />
          </div>
          <div className="col-md-3">
            <img onClick={ () => { changeImage(url3) } } className="img-fluid" src={url3} alt="" />
          </div>
          <div className="col-md-3">
            <img onClick={ () => { changeImage(url4) } } className="img-fluid" src={url4} alt="" />
          </div>
        </div>
      </div>
        
    );

};

export default Gallery;
