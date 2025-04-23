import React from 'react';
import Link from './Link';


const navigationData = [
    {
      "id": 1,
      "name": "Home",
      "path": "/"
    },
    {
      "id": 2,
      "name": "About Us",
      "path": "/about"
    },
    {
      "id": 3,
      "name": "Services",
      "path": "/services"
    },
    {
      "id": 4,
      "name": "Contact",
      "path": "/contact"
    },
    {
      "id": 5,
      "name": "Products",
      "path": "/products"
    }
  ]

const NavBar = () => {
    return (

        <nav>


{/* method1 */}
{/* <ul className='flex'>
    <li className='mr-10'><a href="">Home</a></li>
    <li className='mr-10'><a href="">About</a></li>
    <li className='mr-10'><a href="">Blog</a></li>
</ul> */}


{/* method2 - dynamically */}
{/* <ul className='flex'>
    {
        navigationData.map (route=> <li className='mr-10'>
            <a href={route.path}>{route.name}</a>
            </li> )
    }
</ul> */}


{/* method3 - using different component */}

<ul className='flex mr-10'>
{
    navigationData.map (route=> <Link key={route.id} route={route}></Link>)
}
</ul>

        </nav>
    );
};

export default NavBar;