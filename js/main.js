var React = require('react');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');
var NavBar = require('./Navbar');
var MainContent = require('./MainContent');


var Main = createReactClass({displayName: "Main",
    render: function() {
        return  (
            React.createElement("html", null, 
                React.createElement("head", null, 
                React.createElement("base", {href: "/"}), 
                    React.createElement("link", {rel: "stylesheet", href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"}), 
                    React.createElement("link", {rel: "stylesheet", type: "text/css", href: "base.css"})
                ), 
                React.createElement("body", null, 
                   React.createElement(NavBar, {navBar: this.props.navBar}), 
                   React.createElement(MainContent, null), 
                    React.createElement("script", {src: "https://code.jquery.com/jquery-3.3.1.slim.min.js", integrity: "sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo", crossOrigin: "anonymous"}), 
                    React.createElement("script", {src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js", integrity: "sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1", crossOrigin: "anonymous"}), 
                    React.createElement("script", {src: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js", integrity: "sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM", crossOrigin: "anonymous"})
                )
            )
        );
    }
});

Main.propTypes = {
    navBar: PropTypes.array.isRequired
}

module.exports = Main;