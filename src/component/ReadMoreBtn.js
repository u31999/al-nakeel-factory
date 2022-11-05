import '../styles/rootStyle.css'
import { Button } from 'react-bootstrap'

const ReadMoreBtn = ({text}) => {
  return (
    <Button className='read_more_btn'>
      {text}
    </Button>
  )
}

export default ReadMoreBtn
