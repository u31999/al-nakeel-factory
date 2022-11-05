import { Container, Col, Row, Image } from "react-bootstrap"
import ReadMoreBtn from './ReadMoreBtn'
import { useMediaQuery } from 'react-responsive'
import { motion, AnimatePresence } from 'framer-motion'


import '../styles/posts.css'

/*
  This is a Component for shoeing posts in the home page
  @parms :
    # data : The data type Obj
    # mode: The mode of display, there is two mode [onePost, multiPost], type Str
    defaultMode = onePost
 */
const PostSection = ({data, mode}) => {
 const mdSize = useMediaQuery({query: '(max-width: 768px)'})
 const StyledTitle = ({title}) => {
  return (
    <Row className="title">
      
      <h2 className={!mdSize ? 'line' : ''}>
        {title}
      </h2>
    </Row>
    
  )
 }
 const Posts = ({title, post}) => {
    return (
    <Row>
      {
        // If we are in mode multiPosts
        mode === 'multiPost' && <Row>Title</Row>
      }
      {
        // if we are in the default mode
      }
      <AnimatePresence>
        <Col className="img_container" md='3'>
          <Image src={post.img} rounded fluid className="post_image" />
        </Col>
        </AnimatePresence>
        <Col className='post_data_card col-md col-lg' md='3'>
          <StyledTitle title={title} />
          <Row>
            {post.text}
          </Row>
          <Row>
          <div>
          <ReadMoreBtn text={post.btnText} />
            
            </div>
          </Row>
        </Col>
      </Row>
    )  
 }
  if (data) {
    return (
      <Container className='posts_container'>
        <Posts title = {data.title} post={data.posts[0]}/>
      </Container>
    )
  } else {
    return( 
    <div>...Loading</div> 
    )
  } 
}

export default PostSection
