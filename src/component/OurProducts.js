import { Card, CardImg, Col, Container, Row } from "react-bootstrap"
import { CardTitle } from "reactstrap"
import '../styles/ourProducts.css'
import ReadMoreBtn from "./ReadMoreBtn"
import { useMediaQuery } from 'react-responsive'


const OurProducts = ({data}) => {
  const mdSize = useMediaQuery({query: '(max-width: 768px)'})

  return (
    <div className="our_products_background_div">
    <Container className='our_products_container'>
      <Row className="our_products_title">
        <h2 className={!mdSize ? 'line' : ''}>
            منتجاتنا
        </h2>
      </Row>
      <Row className='products_details_container d-flex' >
        {
            data && (
                data.map((item, i) => (
                 
                    <Col key={i} className='product_image_container'>
                        <Card className='product_card'>
                            <CardTitle>{item.name}</CardTitle>
                            <CardImg src={item.imgSrc} fluid/>
                        </Card>
                    </Col>
                    
                ))
            )
        }
       
      </Row>
      <Row className='products_btn_container'>
        <div className="d-flex"><ReadMoreBtn text='منتجاتنا' /></div>
      </Row>
    </Container>
    </div>
  
  )
}

export default OurProducts
