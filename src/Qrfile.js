import React, { useState } from 'react'
import QrReader from 'modern-react-qr-reader'
import './App.css'

function Qrfile() {
    const [resultfile , setresultfile] = useState('');
    // const qrref = useRef(null);
    const handleError = (error) => {
        console.log(error);
    }
    const handleScan = (result) => {
        if (result) {
            setresultfile(result);
            console.log(result)
            window.open(result, '_blank', 'noopener,noreferrer')
        }
    }
  return (
  <>
    <div className='heading'>Scan Your QRCode Here.</div>
    <div className='scan'>
        <QrReader        
            delay={200}
            onError={handleError}
            onScan={handleScan}
            style={{ "width": '100%' , "height": "100px" }}
        />
    </div>
    <h1 className='output'>Scan Text Is : {resultfile}</h1>
  </>
  )
}

export default Qrfile