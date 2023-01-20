import React, {useState} from 'react';
import "./video-react.css";
import {Grid,  CardContent, Card, Divider} from '@mui/material';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import YouTube from 'react-youtube';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Tab from '@mui/material/Tab';
import { TabContext } from '@mui/lab';

export interface aulas {
    id: string;
    title: string;
    ytId: string;
    poster: string;
    description: string;
}
export const aulas: aulas[] = [
  {
    id: '1',
    title: 'Aula 01 - Iniciando o projeto de ponta a ponta',
    ytId: '53eCXZJM1qU',
    poster: 'Videos/poster_01.jpg',
    description: 'É hora de decolar e partir rumo ao próximo nível. Esse é o começo da nossa missão onde você vai preparar o setup, e construir a base do back-end com Node.js, do front-end web com React e do aplicativo mobile com React Native. Vamos também criar nosso banco de dados, as entidades principais da aplicação e listar os casos de uso, além de desvendar o Tailwind CSS e os principais fundamentos por trás do React.',
  },
  {
    id: '2',
    title:  'Aula 02 - Avançando o back-end e Front-end',
    ytId: 'C8uf2-zz3rU',
    poster: 'Videos/poster_02.jpg',
    description: 'A decolagem foi um sucesso e agora é hora de avançar com velocidade máxima rumo ao nosso objetivo! Nesta aula nós vamos acelerar o desenvolvimento back-end da aplicação criando todas tabelas e relacionamentos no banco de dados, as rotas da aplicação e as regras de negócio por trás do projeto. Vamos também avançar no visual do front-end e mobile do app criando a homepage do projeto tanto na sua versão web quanto na versão mobile com React e React Native.',
  }, 
  {
    id: '3',
    title: "Aula 03 - Finalizando o layout web e mobile",
    ytId: "KFdqOdNtz94",
    poster: 'Videos/poster_03.jpg',
    description: 'Já estamos em órbita! Chegamos na metade da nossa missão explorando ferramentas e tecnologias. E nesta aula vamos dar vida às telas da aplicação tanto na versão web com React quanto mobile com React Native. Vamos utilizar o Tailwind anexado à outras bibliotecas visuais para criar as telas de criação de hábito e detalhamento do dia e aproveitar para melhorar a usabilidade e acessibilidade da nossa aplicação.',
  },
  {
    id: '4',
    title: "Aula 04 - Conectando a API",
    ytId: "uDaO3ioTo88",
    poster: 'Videos/poster_04.jpg',
    description: 'Quase lá! Estamos nos aproximando do final da nossa missão. Nessa aula vamos conectar todas as pontas integrando a API RESTful que desenvolvemos com Node.js aos nossos projetos em REact e React Native utilizando Axios e outras bibliotecas auxiliares.',
    }
];
const opts = {
  height: '480',
  width: '100%',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
  },
};
function App() {
  const [value, setValue] = useState<string>('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    
    <Grid container mt={9} justifyContent="center"> 
      <TabContext value={value}>
        <Grid item xs={12}>
          <TabList onChange={handleChange} aria-label="lab API tabs example"  textColor="secondary"
            indicatorColor="secondary" centered>
            {aulas.map((video, index)=>{
              return(
                <Tab value={video.id} label={`Aula ${video.id}`} key={index} style={{fontWeight: 'bold', color: 'white', backdropFilter: 'blur(10px)  brightness(30%)'}}/>
              )
            })}
          </TabList>
        </Grid>

        {aulas.map((video, index)=>(
          <React.Fragment key={index}>
            <TabPanel value={video.id} key={index}>
              <Grid item md={6} xs={12} mt={2}> 
                <Typography variant="h5" color="yellow" style={{textTransform: 'uppercase', fontWeight: 'bold'}}>
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
                    <Card className="card">
                      <CardContent className="card">
                        <YouTube videoId={video.ytId} opts={opts}/>
                      </CardContent>
                    </Card>
                  </Grid>    
                </Grid>
              </Grid>
            </TabPanel>
          </React.Fragment>
        ))}
      </TabContext>
    </Grid>

  )
}

export default App;