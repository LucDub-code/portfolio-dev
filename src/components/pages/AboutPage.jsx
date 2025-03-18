import { useState } from 'react';
import folderIcon from '../../assets/icons/navigation/folder.svg';
import chevronDown from '../../assets/icons/navigation/nav-full-down.svg';
import navIcon from '../../assets/icons/navigation/nav-light.svg';
import mdIcon from '../../assets/icons/technos/md.svg';
import BioContent from '../about/BioContent';
import InteretsContent from '../about/InteretsContent';
import EducationContent from '../about/EducationContent';

export default function AboutPage({ className }) {
  const [activeTab, setActiveTab] = useState('bio');

  return (
    <div className={`flex flex-col h-full ${className || ''}`}>
      {/* En-tête de la page */}
      <div className="flex items-center px-3 py-2 bg-bg-terminal border-b border-border-ide">
        <img src={chevronDown} alt="Chevron" className="w-4 h-4 mr-2" />
        <img src={folderIcon} alt="Dossier" className="w-5 h-5 mr-2" />
        <span className="text-text-default text-base">_a-propos-de-moi</span>
      </div>

      {/* Navigation par onglets */}
      <div className="bg-bg-terminal border-b border-border-ide">
        {['bio', 'interets', 'education'].map((tab) => (
          <div 
            key={tab}
            className="flex items-center px-8 py-2 cursor-pointer"
            onClick={() => setActiveTab(tab)}
          >
            <img src={navIcon} alt="Chevron" className="w-4 h-4 mr-1" />            
            <div className="relative">
              <div className="flex items-center">
                <img src={mdIcon} alt="Markdown" className="w-4 h-4 mr-1" />
                <span className={`${activeTab === tab ? 'text-text-selected' : 'text-text-default'} text-sm`}>
                  {tab}.md
                </span>
              </div>
              {activeTab === tab && (
                <div className="absolute bottom-[-5px] left-0 right-0 h-[3px] bg-orange-string"></div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Zone de contenu*/}
      <div className="flex-1 overflow-auto p-4">
        {activeTab === 'bio' && <BioContent />}
        {activeTab === 'interets' && <InteretsContent />}
        {activeTab === 'education' && <EducationContent />}
      </div>
    </div>
  );
}