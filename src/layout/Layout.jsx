import Header from "./Header"
import Footer from "./Footer"
import SideMenu from "./SideMenu"
import EditorContent from "./EditorContent"

export default function Layout() {
  return (
    <div className="h-screen w-full bg-bg-ui flex flex-col overflow-hidden">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <SideMenu />
        <EditorContent className="flex-1 overflow-auto" />
      </div>
      <Footer />
    </div>
  )
}