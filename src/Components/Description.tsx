import './Styles/Description.css';

const text = {
  fr:[],
  de:[],
  en:[]
}
const Description = () => {

  return (
    <div className="Description">
      <div className='DescriptionContent'>

      
      <br/><br/>
        
        <p>
        We're digital specialists.
Whatever the problem, we have a solution.
Save time, contact us.
        </p>


        <br/><br/>

        <div className='button'>
            KONTAKTIEREN SIE UNS
          </div>

{/*


        <NavLink to='/contact' activeclassname='nav-active' data-scroll>
          <div className='button' data-scroll>
            KONTAKTIEREN SIE UNS
          </div>
      </NavLink>
      */}

      </div>
    </div>
  );
  
}

export default Description;