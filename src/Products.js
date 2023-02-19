import React from 'react';

function Products(props) {
    return (
        <div>
          
            list
             <ol>
        {props.user && props.user.length > 0 && props.user.map((userObj, index) => (
            <li key={userObj.id}>
              <a href="">{userObj}</a></li>
          ))}
      </ol>
        </div>
    );
}

export default Products;