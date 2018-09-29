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
    const controllerUnits = [];
    const imgFigures = imageDatas.map((value,index) => {
      return (
        <figure key={index}>
          <img src={value.imageUrl}/>
          <figcation>
            <h2>{value.title}</h2>
          </figcation>
        </figure>
      )
    })

    return (
      <section className="stage">
        <section className="img-sec">
          {imgFigures}
        </section>
        <nav className="controller-nav">
          {controllerUnits}
        </nav>
        
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
