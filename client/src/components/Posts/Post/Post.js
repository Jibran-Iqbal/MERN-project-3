import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import useStyles from './styles'
import moment from 'moment'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import DeleteIcon from '@material-ui/icons/Delete'
import { deletePost, likePost } from '../../../actions/posts'



const Post = ({post, setCurrentId, setCurrentD}) => {

    
    const like=()=>{
        dispatch(likePost(post._id));
        setCurrentD(post._id);
    }
    const del=()=>{
        dispatch(deletePost(post._id));
        setCurrentD(post._id);  
    }
    
    const dispatch = useDispatch();
    const classes = useStyles();

    return (
    <Card className={classes.card}>
        <CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>
        <div className={classes.overlay}>
            <Typography variant='h6' >
                {post.creator}
            </Typography>
            <Typography variant='body2' >
                {moment(post.createdAt).fromNow()}
            </Typography>
        </div>
        <div className={classes.overlay2}>
            <Button size='small' style={{color:'white'}} onClick={()=>setCurrentId(post._id)}>
                <MoreHorizIcon fontSize='default'/>
            </Button>
        </div>
        <div className={classes.details}>
            <Typography variant='body2' color='textSecondary'>
                {post.tags.map((tag)=>`#${tag}`)}
            </Typography>
        </div>
        <Typography className={classes.title} variant='h5' gutterBottom>
            {post.title}
        </Typography>
        <CardContent>
            <Typography component='p' variant='body2' color='textSecondary'>
                {post.message}
            </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
            <Button size='small' color='primary' onClick={like}>
                <ThumbUpAltIcon fontSize='small'/>
                &nbsp; Like &nbsp; {post.likeCount}
            </Button>
            <Button size='small' color='primary' onClick={del}>
                <DeleteIcon fontSize='small'/>
            </Button>
        </CardActions>
    </Card>
    )
}

export default Post