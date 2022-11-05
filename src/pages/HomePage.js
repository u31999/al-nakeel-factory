import Header from "../component/Header"
import PostSection from "../component/PostSection"
import Slider from "../component/Slider"
import '../styles/homePage.css'
import postData from '../data/posts'
import productsData from '../data/products'
import { useEffect, useState } from "react"
import OurProducts from "../component/OurProducts"
import QualitySection from "../component/QualitySection"
import Footer from "../component/Footer"


const HomePage = () => {
  const [data, useData] = useState(null)
  const [productData, useProductData] = useState(null)
 

  useEffect(() => {
    if(!data) {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useData(postData)
    }
    if(!productData) {
       // eslint-disable-next-line react-hooks/rules-of-hooks
      useProductData(productsData)
    }
  },[data, productData])

  /*
    @ getData: get the data by name
    @ name: Str
    @ Return: Object
  */
  const getData =  (name) => {
    let lang = 'ar'
    if(data) {
      let result;

      data.forEach((el) => {
          if(el.name === name) {      
            result =  lang === 'ar' ? {
                      title: el.lang.ar.title,
                      posts:  el.lang.ar.posts
              
                      } 
                      : {
                      title: el.lang.eng.title,
                      posts:  el.lang.eng.posts
                      }
          } 
        })

        return result
        
    } else {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useData(postData)
    }
  }

  return (
    <div className="home_page">
        <Header />
        <Slider />
        <PostSection data={getData('about')} mode='onePost' />
        <OurProducts data={productData} />
        <QualitySection />
        <Footer />
    </div>
  )
}

export default HomePage
