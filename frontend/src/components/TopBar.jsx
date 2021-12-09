import React from 'react';
import "../styles/navbar.css"
const TopBar = () => {
    return (
        <nav>
            <div className="navWide">
                <div className="wideDiv">
                    <div className="heading-icon">
                        <div className="heading">
                            BookStore
                        </div>
                    </div>

                    <div>
                        <form>
                            <i class="fas fa-icon block__icon"></i>
                            <input className="search-bar" type="text" name="search" placeholder="search"/>
                        </form>
                    </div>
                    <div className="cart-icon"/>
                    <div className="cart">
                        Cart
                    </div>
                </div>
            </div>
        </nav>
    );
}
export default TopBar
