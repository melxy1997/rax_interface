
// import { createElement } from 'rax';
import { createElement, Component, render, useState } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Image from 'rax-image';
import styles from './index.module.css';
import Logo from '@/components/Logo';
import Demo from "../Modal/index";

export default function Home() {
  return (
    <View>

      <Image source={{
        uri: 'http://localhost:5678/preview.gif'
      }} style={{
        width: '70%',
        position: 'relative',
        left: '15%',
        marginBottom: '20px'
      }}></Image>

      <Image source={{
        uri: 'http://localhost:5678/top.png'
      }} style={{
        width: '70%',
        position: 'relative',
        left: '15%'
      }}></Image>

      <Demo />

      <View className={styles.homeContainer}>

        {/* <Logo uri="//gw.alicdn.com/tfs/TB1MRC_cvb2gK0jSZK9XXaEgFXa-1701-1535.png" /> */}

        {/* <Text type="primary" size="large" onClick={upLoadFile}>【 UpLoad 】</Text>
        <Text type="primary" size="large" onClick={renderDemo}>【 Demo 】</Text>
        <Text type="primary" size="large" onClick={startQuery}>【 startQuery 】</Text> */}
      </View>

    </View>
  );
}
