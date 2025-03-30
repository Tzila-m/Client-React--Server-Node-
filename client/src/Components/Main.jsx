

import { Outlet } from 'react-router-dom';
import * as React from 'react';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import PhotoIcon from '@mui/icons-material/Photo';
import '../'
import TextField from '@mui/material/TextField';

const NAVIGATION = [

    {
        segment: 'users',
        icon: <AccountCircleIcon />,
    },
    {
        segment: 'todos',
        icon: <FormatListBulletedIcon />,
    },

    {
        segment: 'posts',
        icon: <LocalPostOfficeIcon />,
    }
];


function useDemoRouter(link) {
    const [pathname, setPathname] = React.useState(link);

    const router = React.useMemo(() => {
        return {
            searchParams: new URLSearchParams(),
            navigate: (path) => setPathname(String(path)),
        };
    }, [pathname]);

    return router;
}



const Main = () => {
    useDemoRouter('/');

    return (
        <div>
            <AppProvider navigation={NAVIGATION}>
                <DashboardLayout>
                    <PageContainer>
                        <Outlet />
                    </PageContainer>
                </DashboardLayout>
            </AppProvider>

        </div>

    );
}

export default Main