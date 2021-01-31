import { createElement, Component, render, useState } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Modal from 'rax-modal';
import Image from 'rax-image';
import File from 'universal-file';
import chooseImage from 'universal-choose-image';
import request from 'universal-request';
import Loading from 'universal-loading';

const getGIFshow = () => {
  console.log('getGIFshow...');
  request({
    url: 'http://localhost:5678/getGifURL/',
    method: 'GET',
    dataType: 'json'
  }).then(response => {
    Loading.hide()
    global_setVisible(true)
    console.log('gifURL', response.data.value);
    let gifURL = 'http://localhost:5678/' + response.data.value
    // global_setGifURI()
    setTimeout(global_setGifURI({ 
      uri: gifURL,
      width:'100%',
    }), 1000);

  })
}

const startQuery = function () {
  let num = 1
  let flag
  const queryFlag = function () {
    request({
      url: 'http://localhost:5678/getFlag/',
      method: 'GET',
      // data: {
      //   // from: 'Rax',
      // },
      dataType: 'json'
    }).then(response => {

      console.log('value', response.data);
      flag = response.data.value

      if (flag == 1) {
        Loading.show({ content: '上传完毕，启动推理' });
      }
      else if (flag == 2) {
        // Loading.hide()
        Loading.show({ content: '推理完毕，正在渲染' });
      }
      else if (flag == 3) {
        // Loading.hide()
        Loading.show({ content: '渲染完成，传输中' });
        getGIFshow()
        clearInterval(si)
      }

    })
      .catch(error => {
        console.log('ERR');
      });

    // num += 1
    // if (num > 3) {
    //   clearInterval(si)
    // }
  }
  let si = setInterval(queryFlag, 1000)
}

const options = {
  count: 1,
  sourceType: ['camera', 'album'],
  accept: 'video/mp4',
}

const upLoadFile = function () {

  chooseImage(options).then((fp) => {
    console.log("local file obj", fp);
    File.upload({
      url: 'http://localhost:5678/upLoad',
      fileType: 'video',
      fileName: fp.files[0].name,
      filePath: fp.data,
      success: res => {
        console.log('upload success');
        startQuery()
      },
      fail: res => {
        console.log('upload fail');
      },
    });
  })
}
let global_setVisible, global_setGifURI

const Demo = props => {
  const [visible, setVisible] = useState(false);
  global_setVisible = setVisible
  const [gifURI, setGifURI] = useState({ uri: 'https://gw.alicdn.com/tfs/TB1MgZBmHY1gK0jSZTEXXXDQVXa-860-860.jpg' });
  global_setGifURI = setGifURI
  return [
    
    <View>
      
      <Image source={{
        width: '100%',
        uri: 'http://localhost:5678/button.png'
      }} onClick={() => {
        upLoadFile()
      }}></Image>
    </View>,
    <Modal
      visible={visible}
      onHide={() => {
        console.log('hide');
      }}
      onShow={() => {
        console.log('show');

      }}
      onMaskClick={() => {
        // setVisible(false);

      }}
      contentStyle={{
        padding: '10rpx',
        position: 'absolute',
        top: '240rpx',
        width: '90%',
        height: '720rpx',

      }}
    >
      <View style={{
        textAlign: 'right',
        margin: '5rpx'
      }}>
      <Image source={{
        width: '50rpx',
        height: '50rpx',
        uri: 'http://pic.51yuansu.com/pic3/cover/01/83/10/596fc733dc5e5_610.jpg'
      }}
      onClick={()=>{setVisible(false)}}
          ></Image>
      </View>
      <View style={{
        margin: '5rpx',
        width: '98%',
        // height: '600rpx',
        backgroundColor: 'rgba(0,0,0,0.1)'
      }}>
        <Image source={gifURI} onLoad={console.log('加载完毕')}></Image>
      </View>
      <Text style={{ textAlign: 'center', }}>移动设备请长按保存图片</Text>
    </Modal >,
  ];
};
export default Demo;
// render(<Demo />);