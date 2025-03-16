// import { useState } from 'react';
// import TabNavigation from '../navigation/TabNavigation';
// import MobileMenu from '../navigation/MobileMenu';

export default function Header() {
  return (
    <div className="border-b border-border-ide w-full bg-bg-terminal text-text-default px-4 py-2 flex justify-between items-center h-12">
      <div className="flex items-center">
        <p className="font-medium text-sm">lucas-dubeau</p>
      </div>
      <button className="md:hidden w-8 h-8 flex items-center justify-center focus:outline-none">
        {/* Ici viendra l'icône hamburger/X */}
      </button>
    </div>
  )
}