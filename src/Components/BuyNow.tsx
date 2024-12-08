import './Styles/BuyNow.css';

export const BuyNow = (props) => {


  return (
            <>
                <div className={props.visibility ? 'buyNow show' : 'buyNow'}>
                      <div className='button' onClick={props.back}>
                        Return
                      </div>
                    <h1>Buy a Solution</h1>
                    <br/>
                    blablabla
                    <br/>
                    formular
                </div>
                </>
  )
}