import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';

import styles from './index.module.css';

import Logo from '@/components/Logo';
// import { Button, Icon } from '@alifd/next';
// import { Button, Radio } from 'antd';

import File from 'universal-file';
import chooseImage from 'universal-choose-image';

const options = {
  count: 1,
  sourceType: ['camera', 'album'],
  accept: 'video/mp4',
}
const upLoadFile = ()=>{
  chooseImage(options).then((fp)=>{
    console.log("local file obj", fp);
    File.upload({
      url: 'http://127.0.0.1:7890/',
      fileType: 'video',
      fileName: fp.files[0].name,
      filePath: fp.data,
      success: res => {
        console.log('upload success');
      },
      fail: res => {
        console.log('upload fail');
      },
    });
  })
  
}

export default function Home() {
  return (
    <View className={styles.homeContainer}>
      <Logo uri="//gw.alicdn.com/tfs/TB1MRC_cvb2gK0jSZK9XXaEgFXa-1701-1535.png" />

      <Text  type="primary" size="large" onCLick={upLoadFile}>【 UpLoad 】</Text>

    </View>
  );
}
