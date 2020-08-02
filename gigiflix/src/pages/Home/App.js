import React from 'react';
import './App.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/Footer';
import dadosInicias from '../../data/dados_iniciais.json';
import Banner from '../../components/BannerMain';
import Carrocel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';

const App = () => {
  return (
    <PageDefault>
      <Banner
        videoTitle={dadosInicias.categorias[4].videos[4].titulo}
        url={dadosInicias.categorias[4].videos[4].url}
        videoDescription={"O que é front-end? Trabalhando na área"}
      />

      <Carrocel
        ignoreFirstVideo
        category={dadosInicias.categorias[0]}
      />


      <Carrocel
        ignoreFirstVideo
        category={dadosInicias.categorias[1]}
      />

      <Carrocel
        ignoreFirstVideo
        category={dadosInicias.categorias[2]}
      />

      <Carrocel
        ignoreFirstVideo
        category={dadosInicias.categorias[3]}
      />

      <Carrocel
        ignoreFirstVideo
        category={dadosInicias.categorias[4]}
      />

      <Carrocel
        ignoreFirstVideo
        category={dadosInicias.categorias[5]}
      />

    </PageDefault>
  );
}

export default App;
