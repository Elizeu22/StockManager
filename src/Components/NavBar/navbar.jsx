import './navbar.css'

function NavBar(){
    return(
        <section>
        <div className="containerNavBar">
            
            <div className='card1NavBar'>
                <button type="button" className="btn btn-outline-dark">&#x1F4CB;</button>
            </div>

            <div className='card2NavBar'>
                <button type="button" className="btn btn-outline-dark">&#9745;</button>
            </div>

            <div className='card3NavBar'>
                <button type="button" className="btn btn-outline-dark">&#128228;</button>
            </div>

            <div className='card4NavBar'>
                <button type="button" className="btn btn-outline-dark">&#10561;</button>
            </div>
        </div>
        </section>
    
    )
}


export default NavBar;