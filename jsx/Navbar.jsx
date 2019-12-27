var React = require('react'),
    _ = require('underscore'),
    createReactClass = require('create-react-class'),
    PropTypes = require('prop-types');


var NavItem = createReactClass({
    render: function() {
        var item = this.props.item;
    
        return (
            <li className="nav-item">
                <a className="nav-link" href={item.url} target={(item.newTab ? '_blank' : '_self') }>
                    {item.title}
                </a>
            </li>
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
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <img src="https://ias.inspera.no/file/cil/mp_logo/file"/>
                </a>

                <button className="navbar-toggler" data-toggle="collapse" data-target="#navBar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navBar">
                    <ul className="navbar-nav">
                     {navBar.length > 0 && navBar.map( navItem => <NavItem item={navItem} key={navItem.url}/>)}
                    </ul>
                </div>                  
            </nav>
        );
    }
});


NavBar.propTypes = {
    navBar: PropTypes.array
}

module.exports = NavBar;