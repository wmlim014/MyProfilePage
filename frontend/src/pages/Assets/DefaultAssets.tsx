import React from 'react';
import { MdHomeFilled } from "react-icons/md";

import './DefaultAssets.css';
import '../../App.css';

function DefaultAssets() {
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
                Span&nbsp;&rarr;&nbsp;
                <span>home</span>
            </li>
        </ul>
    )
}

export default DefaultAssets