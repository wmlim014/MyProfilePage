import { useAlert } from './AlertContext';
import { Close, Error, Warning, Success, Info } from '../Icons.tsx';

import './Alert.css';
import '../../App.css';

const Alert = () => {
    const { alert, hideAlert } = useAlert();

    if (!alert.visible) return null;

    return (
        <div className={`alert-container alert-${alert.type}`}>
            <div className={`App alert-title`}>
                <div className="App alert-title-header">
                    {Icon(alert.type)}
                    <h2>{alert.title}</h2>
                </div>
                {alert.closable && (
                    <button className="Logo" onClick={hideAlert}>
                        <Close />
                    </button>
                )}
            </div>
            <div className='alert-content'>
                <p>{alert.content}</p>
                { alert.message && 
                    <span className='alert-content-msg'>
                        &rarr; {alert.message}
                    </span>
                }
            </div>
        </div>
    );
};

const Icon = (type: String) => {
    if(type === 'error')
        return <Error />;
    else if (type === 'warning')
        return <Warning />;
    else if (type === 'success')
        return <Success />;
    else
        return <Info />
}

export default Alert;