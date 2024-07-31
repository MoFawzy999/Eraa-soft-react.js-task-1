import style from './ContentBody.module.css' ;

export default function ContentBody(props) {
  const headColor = {
      backgroundColor : props.color 
  };
  
  return (
    <div className={`bg-white d-flex flex-column gap-4 align-items-center ${style['content-style']}`}>
       <div className={`${style.head}`} style={headColor} >
         <span className="d-block fs-5 text-uppercase pb-1">{props.headTitle}</span>
         <span className={`d-block ${style.price}`}>${props.price}</span>
         <span className="d-block fs-5 text-uppercase">Per Month</span>
       </div>
       <ul className={style.desc}>
        <li className='pb-3'><i className={`fa-solid fa-check pe-2 ${style['check-color']}`}>
        </i>Unlimited Support</li>
        <li className='pb-3'><i className={`fa-solid fa-check pe-2 ${style['check-color']}`}>
        </i>{props.storage}GB Server Space</li>
        <li className='pb-3'><i className={`fa-solid fa-check pe-2 ${style['check-color']}`}>
        </i>{props.users} Users per Project</li>
        <li className='pb-3'><i className={`fa-solid ${props.emailIntegrationAvailable == true ? 'fa-check' : 'fa-x'}
           pe-2 ${props.emailIntegrationAvailable ? style['check-color'] : style['x-color']}`}>
        </i>Email Integration</li>
        <li className='pb-3'><i className={`fa-solid ${props.downloadAvailable == true ? 'fa-check' : 'fa-x'} 
          pe-2  ${props.downloadAvailable ? style['check-color'] : style['x-color']}`}>
        </i>Unlimited Download</li>
       </ul>
       <button className={`text-uppercase ${style['btn-style']}`}>Choose plan</button>
    </div>
  )
}
