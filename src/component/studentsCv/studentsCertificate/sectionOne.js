import React from 'react'
import { SRLWrapper } from "simple-react-lightbox";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserParams from '../useParams';

const SectionOne = ({studentData}) => {
  const {name} = UserParams()
  const student = name
  const images = []
  if(studentData){
    studentData.map((img, index) =>{
      const {studentName, certificates} = img
      console.log(studentName)

      if(studentName === student && certificates ){
        console.log(img.frontImg)
        certificates.map((data) =>{
          images.push(data)
        })
      }
    })
  }
    
    console.log(images)
  return (
    <SRLWrapper>
      <div className="container">
        <div className="container-fluid">
          <div className="row">
            
            {
              images.map((data, index) =>{
                return(
                  <div key={index} className="col-md-6 col-sm-6 col-6 certificate-div">
                    <div className=" " >
                      <img className="responsive" src={data.img} alt="..."></img>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      {/* <img className="responsive" src={studentData[1].certificates[0].img} alt="test ne isteyirsen"></img> */}
    </SRLWrapper>
  )
}

export default SectionOne