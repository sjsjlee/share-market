import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import RoomIcon from '@material-ui/icons/Room';

const useStyles = makeStyles(theme => ({
	root: {
		
	},
	media: {
		height: 320,
	},
  itemInfo:{
    display:'flex',
    justifyContent:'space-between',
    marginBottom: theme.spacing(2),
  },
  addr:{
    display:'flex',
    alignItems:'center',
  }
}));

const ItemCard = ({ title, category, addr, createdDate, img='https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=559&q=80' }) => {
	const classes = useStyles();
  return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image={img}
					title="Contemplative Reptile"
				/>

			</CardActionArea>
      <CardContent>
        <div className={classes.itemInfo}>
          <Chip color='primary' label={category} size="small"/>
          <div className={classes.addr}><RoomIcon/><Typography component='span'>{addr}</Typography></div>
        </div>
        <div>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
        </div>
      </CardContent>
		</Card>
	);
};

export default ItemCard;