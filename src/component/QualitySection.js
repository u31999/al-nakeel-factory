import { CardImg, Container, Card, Col, Row } from 'react-bootstrap'
import '../styles/QualitySection.css'

const QualityCard = ({imgSrc}) => {
    return (
        <Card className='quality_card'>
            <CardImg src={imgSrc} />
        </Card>
    )
} 
const QualitySection = () => {
    const qualityCert = [
        {
            name: 'gmp',
            src: 'images/cert/gmp.png'
         },
        {
            name: 'gmp',
            src: 'images/cert/isoI.png'
         },
        {
            name: 'gmp',
            src: 'images/cert/isoQ.png'
         }
    ]
  return (
    <Container className='quality_container'>
    <Row className='quality_row'>
    
    {qualityCert.map((cert, i) => (
        <Col className='col_quality' key={i}>
        <QualityCard imgSrc={cert.src} />
        </Col>
    ))}

    </Row>
    </Container>
  )
}

export default QualitySection
