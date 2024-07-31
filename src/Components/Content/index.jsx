import ContentBody from '../ContentBody';
import style from './Content.module.css' ;


export default function Content() {
  return (
    <div className={`container-fluid ${style['content-bg-color']} pt-5 pb-5`}>
    <div className='container'>
    <h1 className={`text-white text-center pb-4 fw-bold ${style.head}`}>Plans & Pricing</h1>
      <p className="text-white text-center fw-medium pb-5">
       Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam
        <span className="d-block pt-2">nunc justo sagittis suscipit ultrices.</span></p>
      <div className="container col-12 d-flex flex-wrap align-items-center justify-content-center gap-4 pt-5">
         <ContentBody className="col-12 col-md-4" headTitle="Hatchling Plan" price="29" color="#533E9B" storage="5" users="2" 
          emailIntegrationAvailable={false}  downloadAvailable= {false}/>
         <ContentBody className="col-12 col-md-4" headTitle="baby Plan" price="69" color="#8CBD0B" storage="10" users="5" 
          emailIntegrationAvailable={true} downloadAvailable= {false} />
         <ContentBody className="col-12 col-md-4" headTitle="Premium Plan" price="99" color="#B76231" storage="25" users="10" 
         emailIntegrationAvailable={true} downloadAvailable= {true} />
      </div>
    </div>
    </div>
  )
}
