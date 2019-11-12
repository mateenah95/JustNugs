import React from 'react';
import {Link} from 'react-router-dom';

import './Shop.css';

class Shop extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selectedProduct: '0',
            products: [{id: 0, name: 'Purple Aya', url: 'https://images.unsplash.com/photo-1518465444133-93542d08fdd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},{id: 1, name: 'White Widow'}, {id: 2, name: 'Bruce Banner'}, 
            {id: 3, name: 'Green Queen'}, {id: 4, name: 'Afghan Kush'}, {id: 5, name: 'Bubba Kush'},
            {id: 6, name: 'Devils Breath'}, {id: 7, name: 'Gods Gift'}]
        }

        this.select = this.select.bind(this);
        this.getShop = this.getShop.bind(this);
        this.getImage = this.getImage.bind(this);
    }

    select(e){
        this.setState({
            selectedProduct: e.target.id
        })
    }

    getImage(){
        if(this.state.selectedProduct){
            return (
                <div>
                    <br />
                    <img width='150' height='150' className='display-pic' src={this.state.products[this.state.selectedProduct].url} />
                </div>
            )
        }
    }

    getShop(){
        if(this.props.user){
            return (
                <div className='row'>
                    <div className='col s6 only-border products-container'>
                        <h3>Products</h3>
                        {this.state.products.map(product => <div id={product.id} key={product.id} className='teal darken-2 product' onClick={this.select}><h4>{product.name}</h4></div>)}
                    </div>
                    <div className='col s6 only-border product-container'>
                        <h3>Product Details</h3>
                        <div className='selected-product'>
                            {this.getImage()}
                            <h2 className='detail-prompt purple-text'>{this.state.selectedProduct ? this.state.products[parseInt(this.state.selectedProduct)].name : 'Please select a product for more details.'}</h2>
                            <ul>
                                <h5>
                                    <li>Best For Seasoned Users</li>
                                    <li>High Potency Strains</li>
                                    <li>High Quality</li>
                                </h5>
                            </ul>
                            <div class="row">
                                <div class="col s6">
                                    <h5 class="orange-text">Sativa</h5>
                                    <h3 class="orange-text sativa">50%</h3>
                                </div>
                                <div class="col s6">
                                        <h5 class="blue-text darken-4">Indica</h5>
                                        <h3 class="blue-text indica">50%</h3>
                                </div>
                            </div>
                            <div class="row potency">
                                <div class="col s3 blue white-text"><p>Lows</p></div>
                                <div class="col s6 amber white-text"><p>Mids</p></div>
                                <div class="col s3 orange white-text"><p>Highs</p></div>
                            </div>
                            <button className='btn-large add-to-cart'>Add To Cart</button>
                            <br />
                        </div>
                        <br />
                    </div>
                </div>            
            )
        }
        return (
            <div>
                <h4><em>Please Signin To Shop</em></h4>
                <br />
                <Link to='/signin' className='btn-large teal darken-2'>Signin</Link>
                <br />
                <br />
            </div>
        )
    }

    render(){
        return (
            <div className='only-border center teal darken-4 white-text'>
                <h1>Shop</h1>
                {this.getShop()}
            </div>
        )
    }
}

export default Shop;