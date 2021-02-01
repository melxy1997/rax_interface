
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

    </View>
  );
}
