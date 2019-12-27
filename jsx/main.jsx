var React = require('react');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');
var NavBar = require('./Navbar');
var MainContent = require('./MainContent');


var Main = createReactClass({displayName: "Main",
    render: function() {
        return  (
            <html>
                <head>
                <base href="/" />
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
                    <link rel="stylesheet" type="text/css" href="base.css"/>
                </head>
                <body>
                   <NavBar navBar={this.props.navBar}/>
                   <MainContent />
                    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
                </body>
            </html>
        );
    }
});

Main.propTypes = {
    navBar: PropTypes.array.isRequired
}

module.exports = Main;