const session = require('express-session')
const bodyParser = require('body-parser')
const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }))

  server.use( bodyParser.json() )       // to support JSON-encoded bodies
  server.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
  }))

  server.post('/auth', function (req, res) {
    const sess = req.session
    sess.token = req.body.token
    return res.sendStatus(200)
  })

  server.get('/a', (req, res) => {
    return app.render(req, res, '/b', req.query)
  })

  server.get('/b', (req, res) => {
    return app.render(req, res, '/a', req.query)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})