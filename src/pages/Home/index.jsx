// import { createElement } from 'rax';
import { createElement, Component, render, useState } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';

import styles from './index.module.css';
import Logo from '@/components/Logo';


import Demo from '../Modal'



const renderDemo = () => {
  render(<Demo uri="//gw.alicdn.com/tfs/TB1MRC_cvb2gK0jSZK9XXaEgFXa-1701-1535.png" />);
}

export default function Home() {
  return (
    <View>
      <Image source={{
          width: '100%',
          uri: 'http://localhost:5678/Welcome.gif'
        }}></Image>
      <View className={styles.homeContainer}>
        
        {/* <Logo uri="//gw.alicdn.com/tfs/TB1MRC_cvb2gK0jSZK9XXaEgFXa-1701-1535.png" /> */}
        <Demo />
        {/* <Text type="primary" size="large" onClick={upLoadFile}>【 UpLoad 】</Text>
        <Text type="primary" size="large" onClick={renderDemo}>【 Demo 】</Text>
        <Text type="primary" size="large" onClick={startQuery}>【 startQuery 】</Text> */}


      </View>

    </View>
  );
}
