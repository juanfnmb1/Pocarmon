import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import star from '../../img/star.png'

const Card = () => {
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [formValues, setFormValues] = useState({
    image: '',
    make: '',
    model: '',
    year: '',
    color: '',
    hp: '',
    miles: ''
  });

  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US');

  const cardRef = useRef(null);
  const [isSaving, setIsSaving] = useState(false);

  // Handle input change for multiple inputs
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  };

  // Handle button click to show all input values and toggle visibility
  const testValues = () => {
    setIsFormVisible(false);
  };

  // Function to save the card as an image
  const saveCard = () => {
    if (cardRef.current) {
      setIsSaving(true);
      document.querySelectorAll('.save-button').forEach(btn => btn.style.display = 'none');
      document.querySelectorAll('.go-back-button').forEach(btn => btn.style.display = 'none');

      html2canvas(cardRef.current, {
        useCORS: true,
        allowTaint: true
      }).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/jpeg');
        link.download = 'card.jpg';
        link.click();
        document.querySelectorAll('.save-button').forEach(btn => btn.style.display = 'inline');
        document.querySelectorAll('.go-back-button').forEach(btn => btn.style.display = 'inline');
        setIsSaving(false);
      }).catch(err => {
        console.error('Error generating screenshot:', err);
        setIsSaving(false);
      });
    }
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <div
        className="square"
        style={{
            width: '350px',
            height: '700px',
            backgroundBlendMode: 'overlay', /* Blend the background color with the image */
            backgroundColor:"#9F7762",
            backgroundImage: 'url(/img/texture.jpg)', // Path to your texture image
            backgroundSize: 'cover', // Cover the entire element
            backgroundRepeat: 'no-repeat', // Prevent tiling
            backgroundPosition: 'center', // Center the texture
            display: 'inline-block',
            padding: '20px',
            border: '10px ridge black',
            textAlign: 'center',
            overflow: 'auto',
            boxSizing: 'border-box',
            position: 'relative' // Ensure child elements are positioned correctly
        }}
        ref={cardRef}
      >
        <span style={{ fontSize: '35px', color: 'white', fontFamily: 'fantasy' , textShadow: '1px 1px 0 black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black'}}>POCARMON</span>
       
        {isFormVisible ? (
          <>
            <br />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <p style={{ marginRight: '15px' }}>Image</p>
                <input
                  style={{ marginRight: '55px' }}
                  placeholder='URL goes here'
                  name='image'
                  value={formValues.image}
                  onChange={handleChange}
                />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <p style={{ marginRight: '15px' }}>Make</p>
                <input
                  style={{ marginRight: '55px' }}
                  placeholder='Toyota'
                  name='make'
                  value={formValues.make}
                  onChange={handleChange}
                />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <p style={{ marginRight: '15px' }}>Model</p>
                <input
                  style={{ marginRight: '55px' }}
                  placeholder='Corolla'
                  name='model'
                  value={formValues.model}
                  onChange={handleChange}
                />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <p style={{ marginRight: '15px' }}>Year</p>
                <input
                  style={{ marginRight: '55px' }}
                  placeholder='2022'
                  name='year'
                  value={formValues.year}
                  onChange={handleChange}
                />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <p style={{ marginRight: '15px' }}>Color</p>
                <input
                  style={{ marginRight: '55px' }}
                  placeholder='Blue'
                  name='color'
                  value={formValues.color}
                  onChange={handleChange}
                />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <p style={{ marginRight: '15px' }}>HP</p>
                <input
                  style={{ marginRight: '55px' }}
                  placeholder='300'
                  name='hp'
                  value={formValues.hp}
                  onChange={handleChange}
                />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <p style={{ marginRight: '15px' }}>Miles</p>
                <input
                  style={{ marginRight: '55px' }}
                  placeholder='22,000'
                  name='miles'
                  value={formValues.miles}
                  onChange={handleChange}
                />
              </div>
              <button onClick={testValues} style={{ marginTop: '20px' }}>Craft Your Card</button>
            </div>
          </>
        ) : (
            <div>
          <div>
             <div style={{display:"flex", alignItems:"center", justifyContent:'center', gap:'5px', marginBottom:"8px", marginLeft:"110px"}}>
 <img src={star} alt="Star" style={{ width: '27px', height: 'auto' }} />
 <img src={star} alt="Star" style={{ width: '27px', height: 'auto' }} />
 <img src={star} alt="Star" style={{ width: '27px', height: 'auto' }} />
 <img src={star} alt="Star" style={{ width: '27px', height: 'auto' }} />
 <img src={star} alt="Star" style={{ width: '27px', height: 'auto' }} />
 </div>
            <img src={formValues.image} alt="No image loaded" style={{
    width: '250px',
    height: '170px',
    border: `5px inset black`, // Add a border here
    boxShadow: '0 0 0 3px black',
    borderRadius: '5px' // Optional: adds rounded corners
  }} />
  
            <h2 style={{marginTop:"-5px",  textTransform: 'uppercase'}}>{formValues.make} {formValues.model}</h2>
            
            <div style={{display:"flex", alignItems:"center", justifyContent:'center'}}>
            <p style={{ marginRight: '40px' }}><span style={{fontSize:"30px"}}><strong>Year:</strong></span> <br></br>{formValues.year}</p>
            <p><span style={{fontSize:"30px", }}><strong>Color:</strong></span><br></br> <span style={{ color: formValues.color,  textTransform: 'uppercase'}}>{formValues.color}</span></p></div>
            <div style={{display:"flex", alignItems:"center", justifyContent:'center'}}>
            <p style={{ marginRight: '40px' }}><span style={{fontSize:"30px"}}><strong>HP:</strong></span> <br></br>{formValues.hp} </p>
            <p><span style={{fontSize:"30px"}}><strong>Miles:</strong></span> <br></br>{formValues.miles}</p></div>
          
          </div>
          
            <p style={{marginTop:"20%", marginLeft:"130px"}}>&#9675; Created {formattedDate} </p></div>
        )}
      </div>
      {!isFormVisible && !isSaving && (
        <button onClick={() => setIsFormVisible(true)} className="go-back-button" style={{
          position: 'absolute',
          bottom: '-40px', // Adjust this value based on your layout
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1
        }}>
          Go back
        </button>
      )}
    </div>
  );
};

export default Card;
