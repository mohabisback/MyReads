
import { FaLink, FaInfoCircle, FaEnvelopeOpenText, FaHouseUser, FaUtensils, FaMagnifyingGlass } from 'react-icons/fa';
import { FaAnglesUp, FaAnglesLeft, FaAnglesRight, FaAnglesDown, FaDiagramProject } from 'react-icons/fa';
import { FaUserCheck, FaBookOpenReader, FaBook, FaStar, FaBookBookmark, FaFolderTree } from 'react-icons/fa';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaWordpress, FaYoutube } from 'react-icons/fa'

const staticNavItems = [
  
  {
    url: '/',
    title: 'Home',
    Icon: <FaHouseUser />,
  },
  {
    url: '/about',
    title: 'About',
    Icon: <FaInfoCircle />,
    submenu: [
      {
        title: 'Email',
        url: 'php',
        Icon: <FaEnvelopeOpenText />,
      },
      {
        title: 'Links',
        url: '/link',
        Icon: <FaLink />,    
        submenu: [
          {
            title: 'Linked-In',
            url: '/linkedin',
            Icon: <FaLinkedin />,
          },
          {
            title: 'Github',
            url: '/github',
            Icon: <FaGithub />,
          },
          {
            title: 'Facebook',
            url: '/facebook',
            Icon: <FaFacebook />,
          },
          {
            title: 'Twitter',
            url: '/twitter',
            Icon: <FaTwitter />,
          },
          {
            title: 'Youtube',
            url: '/youtube',
            Icon: <FaYoutube />,
          },
          {
            title: 'Wordpress',
            url: '/wordpress',
            Icon: <FaWordpress />,
          },
        ]
      },
    ],
  },
]
export default staticNavItems