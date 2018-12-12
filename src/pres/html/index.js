import React from 'react'


const HTML = (props) => {
    const { children} = props
    return (
        <html>
            <body>
                <div id="root">
                    {children}
                </div>
                <script type="text/javascript" src="bundle.js" crossOrigin="anonymous" />
            </body>
        </html>
    )
}
export default HTML