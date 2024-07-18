import { AiOutlineCaretRight } from 'react-icons/ai';
import {
  BiMoneyWithdraw,
  BiNotepad,
  BiNotification,
  BiSolidAnalyse,
  BiSolidReport
} from 'react-icons/bi';
import { IoMdAnalytics } from 'react-icons/io';
import { IoSettingsOutline } from 'react-icons/io5';
import { LuLayoutDashboard } from 'react-icons/lu';

const useMenuItems = () => {
  return [
    {
      data: [
        {
          title: 'Dashboard',
          route: '/',
          icon: <LuLayoutDashboard />
        }
      ]
    },

    {
      data: [
        {
          title: 'Payments',
          icon: <BiMoneyWithdraw />,
          route: '#'
        },
        {
          title: 'Monthly Analysis',
          icon: <IoMdAnalytics />,
          route: '#'
        }
      ]
    },
    {
      data: [
        {
          title: 'Reports',
          icon: <BiSolidReport />,
          submenu: [
            {
              title: 'Ratio Analysis Report',
              route: '#',
              icon: <AiOutlineCaretRight />
            },
            {
              title: 'Duty & Tax Analysis Report',
              route: '#',
              icon: <AiOutlineCaretRight />
            }
          ]
        },
        {
          title: 'Duty & Tax Analysis',
          icon: <BiNotepad />,
          route: '#'
        }
      ]
    },
    {
      data: [
        {
          title: 'Ratio Analysis',
          icon: <BiSolidAnalyse />,
          route: '#'
        }
      ]
    },
    {
      data: [
        {
          title: 'Notifications',
          icon: <BiNotification />,
          submenu: [
            {
              title: 'Schedule Notifications',
              route: '#',
              icon: <AiOutlineCaretRight />
            },
            {
              title: 'View Notifications',
              route: '#',
              icon: <AiOutlineCaretRight />
            }
          ]
        }
      ]
    },

    {
      data: [
        {
          title: 'Settings',
          icon: <IoSettingsOutline />,
          submenu: [
            {
              route: '#',
              icon: <AiOutlineCaretRight />,
              title: 'Profile'
            },
            {
              title: 'Change Password',
              route: '#',
              icon: <AiOutlineCaretRight />
            }
          ]
        }
      ]
    }
  ];
};

export default useMenuItems;
