import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme)=>({
    appBar:{
    borderRadius: '15px',
    padding: '10px 20px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom:20
    },
    brandContainer:{
        display:'flex',
        alignItems:'center'
    },
    heading:{
        color: 'rgba(0,183,255,1)',
        textDecoration:'none'
    },
    image:{
        marginLeft: '15px'
    },
    toolbar:{
        display:'flex',
        justifyContent:'flex-end',
        width:'400px'
    },
    [theme.breakpoints.down('sm')]:{
        bt:{
            backgroundColor:'white',
            borderRadius:'10px'
        }
    }
}));