function Header (){
    return(
        <section style={{"width": "100%"}}>
        <header>
        <h1 style={{"textAlign": "center"}}>MAX Market</h1>
        <div className="container d-flex flex-row flex-grow-1 flex-shrink-1 justify-content-evenly"><input className="bg-secondary-subtle border rounded-pill border-primary-subtle shadow-lg d-flex flex-row flex-grow-1" type="search" placeholder="Search for Products, Brands and More"  autoComplete="on" style={{"paddingLeft": "17px"}} /><button className="btn btn-primary" type="submit">Search</button></div>
    </header>
    </section>
    )
}
export default Header;