import '../styles/navStyle.css'
import { Image } from 'react-bootstrap'
import Logo from '../res/images/logo-s-transparent.png'
import BottomNav from './BottomNav'
import TopNav from './TopNav'
import { Navbar, Container } from 'react-bootstrap'
import { useMediaQuery } from 'react-responsive'
import { useScroll } from 'framer-motion'


const Header = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const mdSize= useMediaQuery({query: '(max-width: 768px)'})
  const { scrollY } = useScroll()

  // This variable check the scroll status
  let v = undefined
  scrollY.onChange((latest) => {
    v = latest

  })



  return (
    <header>
      <div 
      id= 'nav_container' className={!isTabletOrMobile 
      ? `nav_container ${v !== undefined && v > 80 ? 'change_nav' : ''}` 
      : `nav_container nav_container_mobile` }>
      {!mdSize &&  <Navbar.Brand href='#' className='logo'>
            <Image src={Logo} />
            </Navbar.Brand> 
             }
     
            
            
            <Navbar collapseOnSelect expand='md' className='nav_box navigation_inner_container'>
                <Container>
                <Navbar.Toggle aria-controls='responsive-navbar-nav danger' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                <div className='inner_nav_container'>
                    <TopNav />
                    <BottomNav />
                    </div>
                </Navbar.Collapse>
                </Container>
             </Navbar>
    
                
         {mdSize &&  <Navbar.Brand href='#' className='logo logo_moboile'>
            <Image src={Logo} />
            </Navbar.Brand> 
             }
             
       </div>
    
    </header>
  )
}

export default Header
