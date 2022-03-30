import React from 'react';
import './sidebar.scss';
import {
    LineStyle, Timeline, TrendingUp,
    PersonOutline, Storefront, CreditCard, BarChart,
    MailOutline, DynamicFeed, ChatBubbleOutline,
    WorkOutline, Report
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Customer</h3>
                    <ul className="sidebarList">
                    <Link to="/newUser" className='link'>
                            <li className="sidebarListItem">
                                <LineStyle className='sidebarIcon' />
                                New Job
                            </li>
                        </Link>
                        <Link to="/products" className='link'>
                        <li className="sidebarListItem">
                            <Timeline className='sidebarIcon' />
                            All Jobs
                        </li>
                        </Link>
                        <Link to="/products" className='link'>
                        <li className="sidebarListItem">
                            <TrendingUp className='sidebarIcon' />
                            Active Jobs
                        </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Agent</h3>
                    <ul className="sidebarList">
                        <Link to="/newUser" className='link'>
                            <li className="sidebarListItem">
                                <PersonOutline className='sidebarIcon' />
                                New Job
                            </li>
                        </Link>
                        <Link to="/products" className='link'>
                        <li className="sidebarListItem">
                            <Storefront className='sidebarIcon' />
                            All Jobs
                        </li>
                        </Link>
                        <Link to="/products" className='link'>
                        <li className="sidebarListItem">
                            <CreditCard className='sidebarIcon' />
                            Active Jobs
                        </li>
                        </Link>
                        {/* <li className="sidebarListItem">
                            <BarChart className='sidebarIcon' />
                            Reports
                        </li> */}
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Spares</h3>
                    <ul className="sidebarList">
                    <Link to="/products" className='link'>
                        <li className="sidebarListItem">
                            <MailOutline className='sidebarIcon' />
                            IC/Transistor
                        </li>
                        </Link>
                        <Link to="/products" className='link'>
                        <li className="sidebarListItem">
                            <DynamicFeed className='sidebarIcon' />
                            PC Board
                        </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Income</h3>
                    <ul className="sidebarList">
                    <Link to="/" className='link'>
                        <li className="sidebarListItem">
                            <WorkOutline className='sidebarIcon' />
                            Reports
                        </li>
                        </Link>
                        <li className="sidebarListItem">
                            <Timeline className='sidebarIcon' />
                            Manage
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
