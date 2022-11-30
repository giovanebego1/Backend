import { Grid, Card, Tabs, Typography, Tab, Box } from '@mui/material';
import Pic1 from '../images/pic1.png';

const Home = () => {
  return <>
    <Grid container justifyContent='center'>
      <Grid item sm={10}>
        <h1>Sobre a ferramenta</h1>
        <hr />
        <p>O Finance Ctrl é uma ferramenta de análise e organização financeira voltada para pequenas e médias empresas do mercado nacional que auxilia e traz clareza para a tomada de decisões por gestores.
          Essa aplicação web reúne informações financeiras de diversos setores de uma empresa e as exibe de forma simples e amigável para o usuário final.
          Utilizamos métodos gráficos de interpretação dos dados como dashboards, gráficos e tabelas atualizados em tempo real de acordo com a base de dados fornecida pelo cliente, podendo ser acessado através de qualquer dispositivo com internet.
          Com isso sua empresa pode trabalhar de forma mais organizada e tranquila para se manter no mercado com maior competitividade!</p>
      </Grid>
    </Grid>
  </>;
};

export default Home;
