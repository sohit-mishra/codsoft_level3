import React from 'react'
import { Link } from 'react-router-dom';
import PrivacyPolciy from './PrivacyPolciy';
import TermaandRefund from './TermaandRefund';
import FQA from './FQA';

const Footer = () => {
    return (
        <div className='Footer'>
            <p> &#169; WebShop. All Right Reserved.</p>
            <div className="right">
                <Link to="/PrivacyPolciy">Privacy Policy</Link>
                <Link to="/TermaandRefund">Term And Refund</Link>
                <Link to="/FQA">FQA</Link>
            </div>
        </div>
    )
}

export default Footer;