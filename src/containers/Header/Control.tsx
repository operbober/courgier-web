import * as React from 'react';
import {Link} from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { NotificationIcon } from '../../components/NotificationIcon';
import './Header.css';

export default class Control extends React.Component {

    public props: {
        isAuthenticated: boolean,
        signOut: () => void,
    };

    public state = {
        menuAnchor: null,
        notificationAnchor: null,
    };

    public handleMenuClose = (name: any) => () => {
        this.setState({ [name]: null });
    };


    public handleMenuOpen = (name: any) => (event:any) => {
        this.setState({ [name]: event.currentTarget });
    };
    
    public handleLogOut = () => {
        this.props.signOut();
    };

    public render() {
        const { menuAnchor, notificationAnchor } = this.state;
        const isMenuOpen = Boolean(menuAnchor);
        const isNotificationOpen = Boolean(notificationAnchor);
        const renderNotificationMenu = (
            <Menu
                anchorEl={notificationAnchor}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isNotificationOpen}
                onClose={this.handleMenuClose('notificationAnchor')}
            >
                <MenuItem onClick={this.handleMenuClose('notificationAnchor')}>
                    <p className="notification-item">
                        <span className="notification-item__info">
                            <span className="notification-item__icon"><NotificationIcon type="warn" /></span>
                            <b>iPhone SE </b> Battery Level &lt; 30
                            <span className="notification-item__time">22:15 Wed</span>
                        </span>
                        <a className="notification-item__link" href="#">Clear</a>
                    </p>
                </MenuItem>
                <MenuItem onClick={this.handleMenuClose('notificationAnchor')}>
                    <p className="notification-item">
                        <span className="notification-item__info">
                            <span className="notification-item__icon"><NotificationIcon type="info" /></span>
                            <b>iPhone SE </b> Is Battery Charging = true
                            <span className="notification-item__time">01:30 Th</span>
                        </span>
                        <a className="notification-item__link" href="#">Clear</a>
                    </p>
                </MenuItem>
                <MenuItem>
                    <p className="notification-item">
                        <span className="notification-item__info">
                            <span className="notification-item__icon"><NotificationIcon type="error" /></span>
                            <b>iPhone SE </b> Battery Level &lt; 10
                            <span className="notification-item__time">01:15 Th</span>
                        </span>
                        <a className="notification-item__link" href="#">Clear</a>
                    </p>
                </MenuItem>
            </Menu>
        );
        const renderMenu = (
            <Menu
                anchorEl={menuAnchor}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMenuOpen}
                onClose={this.handleMenuClose('menuAnchor')}
            >
                <MenuItem onClick={this.handleMenuClose('menuAnchor')}>Change Password</MenuItem>
                <MenuItem onClick={this.handleLogOut}>Sign Out</MenuItem>
            </Menu>
        );
        return (
            <ul className={'control-panel'}>
                {!this.props.isAuthenticated
                    ? <React.Fragment>
                        <li>
                            <Link
                                className="btn"
                                to="/signin"
                            >
                                Sign In
                            </Link>
                        </li>
                        <li>
                            <span className="separate"> or </span>
                            <Link
                                className="btn"
                                to="/signup"
                            >
                                Sign Up
                            </Link>
                        </li>
                    </React.Fragment> :
                    <React.Fragment>
                        <li>
                            <IconButton
                                aria-owns={isNotificationOpen ? 'material-appbar' : undefined}
                                aria-haspopup="true"
                                onClick={this.handleMenuOpen('notificationAnchor')}
                            >
                                <Badge badgeContent={3} color="secondary">
                                    <NotificationsIcon color="action" />
                                </Badge>
                            </IconButton>
                            {renderNotificationMenu}
                        </li>
                        <li>
                            <IconButton
                                aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                                aria-haspopup="true"
                                onClick={this.handleMenuOpen('menuAnchor')}
                            >
                                <AccountCircle />
                            </IconButton>
                            {renderMenu}
                        </li>
                    </React.Fragment>
                }
            </ul>
        );
    }
}
