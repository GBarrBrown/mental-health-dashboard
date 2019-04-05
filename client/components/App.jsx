import React, { Fragment } from 'react'

import TheBigFour from './TheBigFour'
import Footer from './Footer'

const App = () => {
    return(
        <Fragment>
            <div className="content">
                <TheBigFour />
            </div>
            <Footer />
        </Fragment>
    )
}

export default App