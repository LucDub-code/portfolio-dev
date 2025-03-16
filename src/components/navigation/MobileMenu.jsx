import jsIcon from '../../assets/icons/technos/js.svg'
import jsonIcon from '../../assets/icons/technos/json.svg'
import htmlIcon from '../../assets/icons/technos/html.svg'
import folderIcon from '../../assets/icons/navigation/folder.svg'
import chevronRight from '../../assets/icons/navigation/nav-full.svg'


export default function MobileMenu() {

  // Tableau pour les icônes et noms des sous-menus
  const menuItems = [
    { icon: jsIcon, text: "_hello-world.js" },
    { icon: folderIcon, text: "_a-propos-de-moi" },
    { icon: jsonIcon, text: "_mes-projets.json" },
    { icon: htmlIcon, text: "_me-contacter.html" }
  ];

  // Méthode map() pour créer les sous-menus
  return (
    <div className="fixed inset-x-0 top-12 z-40 flex flex-col">
      <div className="w-full bg-bg-terminal shrink-0">
        {menuItems.map((item, index) => (
          <div key={index} className="flex items-center p-3 border-b border-border-ide">
            <img src={chevronRight} alt="Chevron" className="w-4 h-4 mr-2" />
            <img src={item.icon} alt="Icon" className="w-6 h-6 mr-2" />
            <span className="text-text-default">{item.text}</span>
          </div>
        ))}
      </div>
      <div className="flex-1 bg-bg-ui"></div>
    </div>
  )
}