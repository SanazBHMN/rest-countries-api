import React from 'react'
import Dropdown from '../components/Dropdown'
import Header from '../components/Header'
import Searchbox from '../components/Searchbox'

function Homepage() {
    return (
        <div>
            <Header />
            <Searchbox />
            <Dropdown />
        </div>
    )
}

export default Homepage
