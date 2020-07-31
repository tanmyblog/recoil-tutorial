
import React, { Fragment } from 'react';

import Product from './Product';
import Cart from './Cart';

const LiveCode = () => {

    return (
        <Fragment>
            <div className={`title`}>Product List</div>
            <Product />
            <Cart />
        </Fragment>
    )
}

export default LiveCode;