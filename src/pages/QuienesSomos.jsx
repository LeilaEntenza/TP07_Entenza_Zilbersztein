    import React from 'react';
    import './QuienesSomos.css';
    
    export const QuienesSomos = () => {
      return (
        <>
            <div className='QuienesSomosInicio'>
                <h1>Buscamos brindar productos de calidad a nuestros usuarios cada día</h1>
                <p>Nuestros productos son producidos en su totalidad sin crueldad animal</p>
            </div>
            <p>Trabajamos cada día para mejorar nuestra compañía</p>
            <div className='mision'>
                <h1>Nuestra misión</h1>
                <p>Desde 1970 nos esforzamos para llevar productos de calidad y que traigan felicidad a los argentinos</p>
            </div>
            <h1>Conocé al equipo</h1>
            <div className='persona'>
                <div className='a'>
                <img className='imgPersona' src="https://i.pinimg.com/736x/d4/da/21/d4da218e178a7218ccb9acbb31cb1168.jpg"/>
                <h1>Spider-man</h1>
                <p>Estudió ingeniería en alimentos en la UBA, lo expulsaron porque se comió todos los cupcakes</p>
                </div>
            </div>
            <div className='persona'>
            <div className='a'>
                <img className='imgPersona' src="https://i.pinimg.com/736x/5e/a9/26/5ea926d1991890fa315e7d1f51d68d71.jpg"/>
                <h1>Batman</h1>
                <p>Estudió literatura inglesa y actualmente dedica gran parte de su tiempo a ORTSupermarket.</p>
                </div>
            </div>
        </>
      )
    }
    

