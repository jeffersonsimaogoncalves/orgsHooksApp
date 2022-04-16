import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import logo from '../../../assets/logo.png';

export default function Topo() {
  return (
    <View style={styleTopo.topo}>
      <Image source={logo} style={styleTopo.image} />
      <Text style={styleTopo.boasVindas}>Olá Jefferson</Text>
      <Text style={styleTopo.legenda}>Encontre os melhores produtores</Text>
    </View>
  );
}

const styleTopo = StyleSheet.create({
  topo: {
    backgroundColor: '#f6f6f6',
    padding: 16,
  },
  image: {
    width: 70,
    height: 28,
  },
  boasVindas: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
  },
  legenda: {
    fontSize: 16,
    lineHeight: 26,
  },
});
