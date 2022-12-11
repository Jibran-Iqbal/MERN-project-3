import { CircularProgress, Grid } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import Post from './Post/Post'
// import useStyles from './styles'

const Posts = ({setCurrentId, setCurrentD}) => {

    const posts = useSelector((state)=>state.posts)
    // const classes = useStyles()
    // console.log(posts)
    // console.log("Hello")
    return (
    !posts.length?<CircularProgress/>:(
        <Grid container alignItems='stretch' spacing = {3} >
            {
                posts.map((post)=>(
                    <Grid item key={post._id} xs={12} sm={6}>
                        <Post post={post} setCurrentId={setCurrentId} setCurrentD={setCurrentD}/>
                    </Grid>
                ))
            }
        </Grid>

    )
    )
}

export default Posts
