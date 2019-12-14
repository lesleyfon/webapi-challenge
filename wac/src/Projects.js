import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Container, Card, makeStyles, Button, Typography} from '@material-ui/core'


const useStyles = makeStyles({
    container: {
        display: 'flex'
    },
    card: {
      minWidth: 100,
      border: '1px solid lightgrey'
    },
    title: {
      fontSize: 18,
    }
  });
function Projects() {
    const [projects, setProjects] = useState([])
    useEffect(()=>{
        fetchProjects()
    },[])
   async function fetchProjects(){
        try {
            const fetchProd = await axios.get('https://web-api-challenge.herokuapp.com/api/project');
            setProjects(fetchProd.data)
        } catch (error) {
            throw Error(error)
        }
    }
    return (
        <Container maxWidth='lg' fixed className='MuiContainer'>
            {projects.length >=1 && projects.map((project, i) => (
            <Card key={i}>
                 <Typography color="textSecondary" gutterBottom>
                    ProjectName: {project.name}
                </Typography>
                <Button size="small">Complete</Button>
            </Card>))}
        </Container>
    )
}

export default Projects
