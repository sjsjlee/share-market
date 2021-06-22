import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import RoomIcon from '@material-ui/icons/Room';
import { imagePath } from 'constant/constant';

const useStyles = makeStyles(theme => ({
	root: {
		height: 350,
	},
	media: {
		height: 200,
		width: 300,
	},
	itemInfo: {
		display: 'flex',
		justifyContent: 'space-between',
		marginBottom: theme.spacing(1),
	},
	addr: {
		display: 'flex',
		alignItems: 'center',
	},
	itemTitle: {
		overflowWrap: 'anywhere',
	}
}));

const ItemCard = ({
	id,
	title,
	category,
	addr,
	createdDate,
	userId,
	onClickItem,
	thumbnail,
}) => {
	const classes = useStyles();
	const handleClickItem = () => {
		onClickItem(id);
	};
	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image={imagePath + thumbnail.filename}
					onClick={handleClickItem}
					component="img"
				></CardMedia>
			</CardActionArea>
			<CardContent>
				<div className={classes.itemInfo}>
					<Chip color="primary" label={category} size="small" />
					<div className={classes.addr}>
						<RoomIcon />
						<Typography component="span">{addr}</Typography>
					</div>
				</div>
				<div className={classes.itemInfo}>
					<Typography color="textSecondary">{userId}</Typography>
					<Typography color="textSecondary">
						{createdDate.substring(0, 10)}{' '}
					</Typography>
				</div>
				<div>
					<Typography className={classes.itemTitle} gutterBottom variant="h5" component="h2">
						{title}
					</Typography>
				</div>
			</CardContent>
		</Card>
	);
};

export default ItemCard;
