var React = require('react'),
    _ = require('underscore'),
    createReactClass = require('create-react-class'),
    PropTypes = require('prop-types');


var NavItem = createReactClass({
    render: function() {
        var item = this.props.item;
    
        return (
            React.createElement("li", {className: "nav-item"}, 
                React.createElement("a", {className: "nav-link", href: item.url, target: (item.newTab ? '_blank' : '_self') }, 
                    item.title
                )
            )
        );
    }
});

NavItem.propTypes = {
    item: PropTypes.object
}

var NavBar = createReactClass({
    render: function() {
        const { navBar } = this.props;
        return (
            React.createElement("nav", {className: "navbar navbar-expand-lg navbar-light bg-light"}, 
                React.createElement("a", {className: "navbar-brand", href: "#"}, 
                    React.createElement("img", {src: "https://ias.inspera.no/file/cil/mp_logo/file"})
                ), 

                React.createElement("button", {className: "navbar-toggler", "data-toggle": "collapse", "data-target": "#navBar"}, 
                    React.createElement("span", {className: "navbar-toggler-icon"})
                ), 

                React.createElement("div", {className: "collapse navbar-collapse", id: "navBar"}, 
                    React.createElement("ul", {className: "navbar-nav"}, 
                     navBar.length > 0 && navBar.map( navItem => React.createElement(NavItem, {item: navItem, key: navItem.url}))
                    )
                )
            )
        );
    }
});


NavBar.propTypes = {
    navBar: PropTypes.array
}

module.exports = NavBar;