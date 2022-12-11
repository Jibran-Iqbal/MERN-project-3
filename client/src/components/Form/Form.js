import { Button, Paper, TextField, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createPost, updatePost } from '../../actions/posts'
import FileBase from 'react-file-base64'
import useStyles from './styles'

const Form = ({currentId, setCurrentId}) => {
    const [postData, setPostData] = useState({
        title:'', 
        message:'', 
        creator:'', 
        selectedFile:'', 
        tags:''
    })

    const post = useSelector((state)=>currentId?state.posts.find((p)=>p._id===currentId):null)

    useEffect(()=>{
        if(post)
            setPostData(post)
    },[post])

    const classes = useStyles()

    const dispatch = useDispatch()

    const clear = ()=>{
        setCurrentId(null)
        setPostData({
        title:'', 
        message:'', 
        creator:'', 
        selectedFile:'', 
        tags:''
    })
    }

    const handleSubmit = (e)=>{
        e.preventDefault()

        if(currentId)
            dispatch(updatePost(currentId, postData))
        else
            dispatch(createPost(postData))
        clear();
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate onSubmit={handleSubmit} className={`${classes.root} ${classes.form}`}>
                
                <Typography variant='h6'>{currentId?"Editing":"Creating"} a Memory</Typography>
                <TextField name='creator' label='Creator' fullWidth variant='outlined' value={postData.creator} onChange={(e)=>setPostData({...postData,creator:e.target.value})}/>
        
                <TextField name='title' label='Title' fullWidth variant='outlined' value={postData.title} onChange={(e)=>setPostData({...postData,title:e.target.value})}/>

                <TextField name='message' label='Message' fullWidth variant='outlined' value={postData.message} onChange={(e)=>setPostData({...postData,message:e.target.value})}/>

                <TextField name='tags' label='Tags' fullWidth variant='outlined' value={postData.tags} onChange={(e)=>setPostData({...postData,tags:e.target.value.split(',')})}/>

                <div className={classes.fileInput}>
                    <FileBase type='file' multiple={false} onDone={({base64})=>setPostData({...postData,selectedFile:base64})} />
                </div>

                <Button className={classes.buttonSubmit} variant='contained' color='primary' size='large' type='submit' fullWidth>Submit</Button>

                <Button variant='contained' size='small' color='secondary' onClick={clear} fullWidth>Clear</Button>

            </form>
        </Paper>
    )
}

export default Form
