import React from 'react';
import "./video-react.css";
import { Player, BigPlayButton } from 'video-react';
import {Grid,  CardContent, Card, Divider} from '@mui/material';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

const aulas = [
  {
    title: 'Aula 01 - Iniciando o projeto de ponta a ponta',
    link: 'Videos/aula-01.mp4',
    poster: 'Videos/poster_01.jpg',
    description: 'É hora de decolar e partir rumo ao próximo nível. Esse é o começo da nossa missão onde você vai preparar o setup, e construir a base do back-end com Node.js, do front-end web com React e do aplicativo mobile com React Native. Vamos também criar nosso banco de dados, as entidades principais da aplicação e listar os casos de uso, além de desvendar o Tailwind CSS e os principais fundamentos por trás do React.',
  },
  {
    title:  'Aula 02 - Avançando o back-end e Front-end',
    link: 'Videos/aula-02.mp4',
    poster: 'Videos/poster_02.jpg',
    description: 'A decolagem foi um sucesso e agora é hora de avançar com velocidade máxima rumo ao nosso objetivo! Nesta aula nós vamos acelerar o desenvolvimento back-end da aplicação criando todas tabelas e relacionamentos no banco de dados, as rotas da aplicação e as regras de negócio por trás do projeto. Vamos também avançar no visual do front-end e mobile do app criando a homepage do projeto tanto na sua versão web quanto na versão mobile com React e React Native.',
  }, 
  {
    title: "Aula 03 - Finalizando o layout web e mobile",
    link: "Videos/aula-03.mp4",
    poster: 'Videos/poster_03.jpg',
    description: 'Já estamos em órbita! Chegamos na metade da nossa missão explorando ferramentas e tecnologias. E nesta aula vamos dar vida às telas da aplicação tanto na versão web com React quanto mobile com React Native. Vamos utilizar o Tailwind anexado à outras bibliotecas visuais para criar as telas de criação de hábito e detalhamento do dia e aproveitar para melhorar a usabilidade e acessibilidade da nossa aplicação.',
  }
  {
    title: "Aula 04 - Conectando a API",
    link: "Videos/aula-04.mp4",
    poster: 'Videos/poster_04.jpg',
    description: 'Quase lá! Estamos nos aproximando do final da nossa missão. Nessa aula vamos conectar todas as pontas integrando a API RESTful que desenvolvemos com Node.js aos nossos projetos em REact e React Native utilizando Axios e outras bibliotecas auxiliares.',
    }
];

function App() {

  return (
    
    <Grid container mt={9}>  
      {aulas.map((video, index)=>(
        <React.Fragment key={index}>
          <Grid item md={6} xs={12} mt={2}> 
            <Typography variant="h5">
              {video.title}
            </Typography>
            <Box p={2}>
            <Typography variant="body1">
              {video.description}
            </Typography>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Grid container>
              <Grid item m={2} xs={12} >
                <Card>
                  <CardContent>
                    <Player src={video.link} poster={video.poster}>
                      <BigPlayButton position="center" />
                    </Player>
                  </CardContent>
                </Card>
              </Grid>    
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Divider color="#ccc"/>
          </Grid>
        </React.Fragment>
      ))}


          
        
    </Grid>

  )
}

export default App;