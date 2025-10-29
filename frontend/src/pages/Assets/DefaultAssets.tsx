import { MdHomeFilled } from "react-icons/md";
import { useAlert } from '../../assets/alert/AlertContext';

import './DefaultAssets.css';
import '../../App.css';

function DefaultAssets() {
    const { showAlert } = useAlert();

    const displayAlert = (alertType: String) => {
        if(alertType === 'error'){
            showAlert(
                'Error Alert',
                'Test on Error Alert',
                'This is a test error message',
                {
                    type: 'error',
                    duration: 5000, // Default value
                    closable: true, // Default value
                }
            )
        } else if (alertType === 'warning'){
            showAlert(
                'Warning Alert',
                'Test on Warning Alert',
                'This is a test warning message',
                {
                    type: 'warning',
                    duration: 5000, // Default value
                    closable: true, // Default value
                }
            )
        } else if (alertType === 'success'){
            showAlert(
                'Success Alert',
                'Test on Success Alert',
                'This is a test success message',
                {
                    type: 'success',
                    duration: 5000, // Default value
                    closable: true, // Default value
                }
            )
        } else {
            showAlert(
                'Info Alert',
                'Test on Info Alert',
                'This is a test info message',
                {
                    type: 'info',
                    duration: 5000, // Default value
                    closable: true, // Default value
                }
            )
        }
    }

    return (
        <ul>
            <li>
                Menu Logo&nbsp;&rarr;&nbsp;
                <span className="Menu-logo"><MdHomeFilled /></span>
            </li>
            <li>
                Logo&nbsp;&rarr;&nbsp;
                <span className="Logo"><MdHomeFilled /></span>
            </li>
            <li>
                Primary Button&nbsp;&rarr;&nbsp;
                <button className="Primary-button">home</button>
            </li>
            <li>
                Secondary Button&nbsp;&rarr;&nbsp;
                <button className="Secondary-button">home</button>
            </li>
            <li>
                Cancellation Button&nbsp;&rarr;&nbsp;
                <button className="Cancel-button">home</button>
            </li>
            <li>
                Heading 1&nbsp;&rarr;&nbsp;
                <h1>home</h1>
            </li>
            <li>
                Heading 2&nbsp;&rarr;&nbsp;
                <h2>home</h2>
            </li>
            <li>
                Heading 3&nbsp;&rarr;&nbsp;
                <h3>home</h3>
            </li>
            <li>
                Body&nbsp;&rarr;&nbsp;
                <p>home</p>
            </li>
            <li>
                Bold Body&nbsp;&rarr;&nbsp;
                <p className='Bold-body'>home</p>
            </li>
            <li>
                Span / Footnote&nbsp;&rarr;&nbsp;
                <span>home</span>
            </li>
            <li>
                Special Span / Footnote&nbsp;&rarr;&nbsp;
                <span className='Special-footnote'>home</span>
            </li>
            <li>
                Danger Alert&nbsp;&rarr;&nbsp;
                <button onClick={() => displayAlert('error')}>
                    Display Error's Alert
                </button>
            </li>
            <li>
                Warning Alert&nbsp;&rarr;&nbsp;
                <button onClick={() => displayAlert('warning')}>
                    Display Warning's Alert
                </button>
            </li>
            <li>
                Success Alert&nbsp;&rarr;&nbsp;
                <button onClick={() => displayAlert('success')}>
                    Display Success's Alert
                </button>
            </li>
            <li>
                Info Alert&nbsp;&rarr;&nbsp;
                <button onClick={() => displayAlert('info')}>
                    Display Info's Alert
                </button>
            </li>
        </ul>
    )
}

export default DefaultAssets