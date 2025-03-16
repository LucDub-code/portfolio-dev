import jsIcon from '../../assets/icons/technos/js.svg';
import folderIcon from '../../assets/icons/navigation/folder.svg';
import jsonIcon from '../../assets/icons/technos/json.svg';
import htmlIcon from '../../assets/icons/technos/html.svg';

export const pages = {
  'hello-world': {
    id: 'hello-world',
    icon: jsIcon,
    title: '_hello-world.js',
    path: 'hello-world'
  },
  'a-propos': {
    id: 'a-propos',
    icon: folderIcon,
    title: '_a-propos-de-moi',
    path: 'a-propos'
  },
  'projets': {
    id: 'projets',
    icon: jsonIcon,
    title: '_mes-projets.json',
    path: 'projets'
  },
  'contact': {
    id: 'contact',
    icon: htmlIcon,
    title: '_me-contacter.html',
    path: 'contact'
  }
};