import InventoryIcon from '@mui/icons-material/Inventory';
import LanguageIcon from '@mui/icons-material/Language';
import LogoutIcon from '@mui/icons-material/Logout';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import SummarizeIcon from '@mui/icons-material/Summarize';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import Link from 'next/link';

const LeftNavigation: React.FC = () => {
  const menus = [
    {
      name: 'Dashboard',
      path: '/',
      icon: <SpaceDashboardIcon />,
    },
    {
      name: 'Stock',
      path: '/stock',
      icon: <InventoryIcon />,
    },
    {
      name: 'Report',
      path: '/report',
      icon: <SummarizeIcon />,
    },
    {
      name: 'User',
      path: '/user',
      icon: <SupervisedUserCircleIcon />,
    },
    {
      name: 'Logout',
      path: '/logout',
      icon: <LogoutIcon />,
    },
  ];

  return (
    <div className="h-screen w-1/12 bg-gray-300">
      <ul>
        <li className="p-2">
          <Link href="/" className="align-center flex items-center p-2">
            <LanguageIcon fontSize="large" color="primary" />
          </Link>
        </li>
        {menus.map((menu) => (
          <li key={menu.name} className="p-2">
            <Link
              href={menu.path}
              className=":hover:bg-gray-400 flex items-center gap-x-3 text-black"
            >
              {menu.icon}
              <span>{menu.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftNavigation;
