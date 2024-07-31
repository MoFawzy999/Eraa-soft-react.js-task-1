import style from './Footer.module.css' ;

export default function Footer() {
  return (
    <div className={`w-100 py-5 ${style['bg-color']}`}>
      <div className='container'>
       <p className='text-white text-center'>Sample text. Click to select the text box. Click again or double 
       <span className='d-block'>click to start editing the text.</span></p>
       <p className={`text-white text-center ${style['second-p']}`}> <a className={style.link}>Website Templates</a>created with 
       <a className={style.link}>Website Builder Software.</a></p>
      </div>
    </div>
  )
}
