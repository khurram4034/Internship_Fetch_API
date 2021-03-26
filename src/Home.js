import React, { useEffect, useState } from 'react'
import './Home.css';
import RecipeReviewCard from './RecipeReviewCard';
import Grid from '@material-ui/core/Grid';

const Home = () => {
        const [repos, setRepos] = useState([{}]);
    
    
    useEffect(()=> {

        async function getRepos(){
            const response = await fetch('https://jsonplaceholder.typicode.com/photos')
            const data = await response.json();
            console.log(data.slice(0,5));
            setRepos(data.slice(0,100));

           
        }
        getRepos();
  
    }, [])
    return (
        <>
        <Grid container spacing={4} mt-2>
                {repos.map((index) => {
                    return(
                    <Grid item xs={4} mt-2>
                        <RecipeReviewCard
                        key={index.id}
                        url={index.url}
                        title={index.title}
                        thumbnailUrl={index.thumbnailUrl}
                    />
                    </Grid>

            );
        })}
    </Grid>
    </>
        
    )
}

export default Home;


