// import { createElement } from 'rax';
import { createElement, Component, render, useState } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Image from 'rax-image';
import styles from './index.module.css';
import Logo from '@/components/Logo';
import Link from 'rax-link';




const renderDemo = () => {
  render(<Demo uri="//gw.alicdn.com/tfs/TB1MRC_cvb2gK0jSZK9XXaEgFXa-1701-1535.png" />);
}

export default function Home() {
  return (
    <View>
        <Image source={{
          uri: 'http://localhost:5678/margin.png'
        }} style={{
          width: '100%',
          marginBottom: '20px'
        }}></Image>
      <Image
        source={{
          uri: 'http://localhost:5678/top_home.png'
        }} style={{
          width: '70%',
          position: 'relative',
          left: '15%'
        }}></Image>

      <Link
        href={'/#/core'}
        miniappHref={'/pages/Core/index'}
      >
        <Image source={{
          uri: 'http://localhost:5678/select.png'
        }} style={{
          width: '100%',
          marginBottom: '20px'
        }}></Image>
      </Link>



    </View>
  );
}
