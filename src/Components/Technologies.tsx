import './Styles/Technologies.css';

export const Technologies = () => {

  const technoList = [
    '.C#',
    '.NET',
    '.MAUI',
    'Javascript',
    'React',
    'Vite',
    'Webpack',
    'Node',
    'Express',
    'MongoDB',
    'Mongoose',
    'Firebase',
  ]

  return (
      <>
          <div className='technologies'>
              <h1>Our technologies</h1>

              <div className='flexContainer'>
              {technoList.map((item, index) => {
                  return (
                      <div key={index} className='techBox'>
                          <div className='techContent'>{item}</div>
                      </div>
                  )
              })}
              </div>

          </div>
      </>
  );
}