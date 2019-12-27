var express = require('express');
var app = express();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Main = React.createFactory(require('./js/main'));
var model = require('./js/NavModel');


const port = 5000;
app.use(express.static('css'));

app.get('/', (req, res) => {
	res.json('ok');
});

app.get('/inspera', (req, res) => {
	const html = ReactDOMServer.renderToStaticMarkup(Main({navBar: model.getNavBarItems()}))
	res.send(html);
})

app.listen(port, () => console.log(`running on ${port}`));