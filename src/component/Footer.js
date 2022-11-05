import { Container, Row, Col, Image, NavLink } from "react-bootstrap"
import Logo from '../res/images/logo-s-transparent.png'
import '../styles/footer.css'

const Footer = () => {
  return (
    <Container className='footer_container'>
      <Row className='footer_logo'>
        <Image src={Logo} />
      </Row>
      <Row className='footer_details'>
        <Col className='content_col'>
            <Row className='content_row'>
                <Row className='content_title'>العنوان</Row>
                <Row className='content_data'>الخرطوم - سوبا</Row>
            </Row>
            <Row className='content_row'>
                <Row className='content_title'>رقم الهاتف</Row>
                <Row className='content_data'> +123456789</Row>
            </Row>
        </Col>
        <Col className='content_col'>
            <Row className='content_row'>
                <Row className='content_title'>الخدمات والروابط السريعة</Row>
                <Row className='content_data'>
                    <NavLink>اتصل بنا</NavLink>
                </Row>
            </Row>
            <Row className='content_row'>
                <Row className='content_title'>البريد الالكتروني</Row>
                <Row className='content_data'>sales@example.com</Row>
            </Row>
            
        </Col>
      </Row>
      
      <Col className='content_col'>
        <Row className='content_row footer_details'>
             <Row className="content_title">
            تابعونا
        </Row>
        </Row>
           
      </Col>
        
      
      <Row className="copyright content_title">
       جميع الحقوق محفوظة لشركة النخيل
       © 2022
      </Row>
      <Row className='createdBy content_title copyright'>
       <NavLink className='createdBy'> Created by @ 
        Ahmed Hassan
      </NavLink> </Row>
    </Container>
  )
}

export default Footer
