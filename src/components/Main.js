require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';


let imagesData=require('../data/imagesData.json');

/*自执行函数得到图片url*/
imagesData= (function (imageDataArr) {

    for (let i in imageDataArr){
        let singleImgData=imageDataArr[i];
        singleImgData.imageUrl=require('../images/'+singleImgData.fileName);
        imageDataArr[i]=singleImgData;
    }

    return imageDataArr;

})(imagesData);

//let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
          <section className="image-sec">

          </section>
          <nav className="controller-nav">

          </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
