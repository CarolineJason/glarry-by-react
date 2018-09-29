require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

// let yeomanImage = require('../images/yeoman.png');

let imageDatas = require('../data/imagesDatas.json');

// console.log(imageDatas);
// 获取图片相关的数据
(function genImageUrl(imagesData){

  //利用自执行函数，将图片名信息 转成url 
  for(let i =0;i<imagesData.length;i++){
    var singleImageUrl = imagesData[i];

    singleImageUrl.imageUrl = require('../images/' + singleImageUrl.fileName);

    imagesData[i] = singleImageUrl;

    //console.log(imagesData);
  }
  return imagesData;
})(imageDatas)



class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec">
          <nav className="controller-nav">

          </nav>
        </section>  
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
