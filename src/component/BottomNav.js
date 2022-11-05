import { Nav } from 'react-bootstrap'
import { useMediaQuery } from 'react-responsive'
import '../styles/navStyle.css'

const BottomNav = () => {
  const mdSize = useMediaQuery({query: '(max-width: 768px)'})

  return (
    <Nav className={`bottom_nav ${!mdSize ? 'line' : ''}`}>
        <Nav.Link className='text-light'>الرئيسية</Nav.Link>
        <Nav.Link className='text-light'>نبذة عنا</Nav.Link>
        <Nav.Link className='text-light'>منتاجتنا</Nav.Link>
        <Nav.Link className='text-light'>علامتنا التجارية</Nav.Link>
        <Nav.Link className='text-light'> مجتمعنا</Nav.Link>
        <Nav.Link className='text-light'> اخر الأخبار</Nav.Link>
        <Nav.Link className='text-light'>تواصل معنا</Nav.Link>
    </Nav>
   
  )
}

export default BottomNav
