import React from 'react';
import Button from '@material-ui/core/Button';
import { useGradientBtnStyles } from '@mui-treasury/styles/button/gradient';
import { usePushingGutterStyles } from '@mui-treasury/styles/gutter/pushing';
import '../scss/general.scss'

const GradientBtn = () => {
  const chubbyStyles = useGradientBtnStyles({ chubby: true });
  const gutterStyles = usePushingGutterStyles({ cssProp: 'marginBottom', space: 2 });
  return (
    <div className={gutterStyles.parent} style={{display: 'flex', justifyContent: 'center'}}>
      <div>
        <Button classes={chubbyStyles} style={{marginRight: 15}} className="colorBoton">Actualizar informacion</Button>
      </div>
      <div>
        <Button classes={chubbyStyles} style={{marginLeft: 15}} className="colorBoton">Cambiar contraseña</Button>
      </div>
    </div>
  );
};


export default GradientBtn;