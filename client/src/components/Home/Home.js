import { Container, Grid, Grow } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Form from '../Form/Form'
import Posts from '../Posts/Posts'
import {getPosts} from '../../actions/posts'

const Home = () => {

    const [currentId,setCurrentId] = useState(null);
    const [currentD,setCurrentD] = useState(null);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getPosts());
        dispatch(getPosts());
        // console.log("HHHHHH")
    },[currentId, dispatch, currentD])


    return (
    <Grow in>
        <Container>
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={7}>
                    <Posts setCurrentId={setCurrentId} setCurrentD={setCurrentD}/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Form currentId={currentId} setCurrentId={setCurrentId} />
                </Grid>
            </Grid>
        </Container>
    </Grow>
    )
}

export default Home
