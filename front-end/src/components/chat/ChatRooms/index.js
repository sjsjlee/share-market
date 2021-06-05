import React from 'react';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Badge } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
	},
	drawer: {
		[theme.breakpoints.up('md')]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	appBar: {
		[theme.breakpoints.up('md')]: {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth,
		},
		display: 'flex',
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
	// necessary for content to be below app bar
	toolbar: {
		...theme.mixins.toolbar,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	chatRoom: {
		display: 'flex',
		listStyleType: 'none',
		overflowY: 'scroll',
		'&:hover': {
			backgroundColor: grey[100],
			cursor: 'pointer',
		},
		'&:active': {
			backgroundColor: grey[200],
		},
		paddingTop: theme.spacing(1),
		paddingBottom: theme.spacing(1),
		paddingRight: theme.spacing(1),
	},
	chatRoomAvatar: {
		margin: theme.spacing(1),
	},
	chatRoomInfo: {
		width: '100%',
		margin: theme.spacing(0, 1, 0),
	},
}));

const ChatRooms = ({ chatRooms, version, onClickRoom }) => {
	const classes = useStyles();

	const ChatRoom = ({ room }) => {
		let lastMsg = room.lastMessage;
		//상대방 아이디
		let username = version === 'seller' ? room.buyer : room.seller;
		// 16자 이상이면 자르기
		if (room.lastMessage.length >= 16) {
			lastMsg = room.lastMessage.substring(0, 16) + '...';
		}
		const handleClickRoom = () => {
			onClickRoom({ room_id: room.id, post_id: room.post_id, username })
		};

		return (
			// 왼쪽 사이드의 대화방 목록에 들어가는 아이템
			<div
				className={classes.chatRoom}
				onClick={handleClickRoom}
			>
				<div className={classes.chatRoomAvatar}>
					<Badge color="secondary" variant="dot" invisible={false}>
						<Avatar>{username.charAt(0).toUpperCase()}</Avatar>
					</Badge>
				</div>
				<div className={classes.chatRoomInfo}>
					<Typography variant="h6">{username}</Typography>
					<Typography variant="body2" color="textSecondary">
						{lastMsg}
					</Typography>
				</div>
			</div>
		);
	};

	return (
		<>
			<div className={classes.toolbar} />
			<Divider />
			<div>
				{chatRooms.map(room => {
					return (
						<div key={room.id}>
							<ChatRoom room={room} />
							<Divider
								style={{
									width: '80%',
									marginLeft: 'auto',
									marginRight: 'auto',
								}}
							/>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default ChatRooms;