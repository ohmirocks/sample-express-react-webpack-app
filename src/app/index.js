import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import HTML from '../pres/html'
import HelloWorld from '../pres/hello-world'

const app = express()
app.use(express.static('static'))

app.get('/', function(req, res){
    res.send(ReactDOMServer.renderToString(
        <HTML>
            <HelloWorld />
        </HTML>
    
    ))
    res.end()
})
app.listen(3000)