import React from 'react';

import Card from '../UI/Card';
import { useStore } from '../../hooks-store/store';
import './ProductItem.css';

const ProductItem = React.memo(props => {
    const dispatch = useStore(false)[1];

    const toggleFavHandler = () => {
        dispatch('TOGGLE_FAV', props.id);
    };

    return (
        <Card style={{ marginBottom: '1rem' }}>
            <div className="product-item">
                <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
                <p>{props.description}</p>
                <button
                    className={!props.isFav ? 'button-outline' : ''}
                    onClick={toggleFavHandler}
                >
                    {props.isFav ? 'Un-Favorite' : 'Favorite'}
                </button>
            </div>
        </Card>
    );
});

export default ProductItem;


// =======Context API=======

// import React, { useContext } from 'react';

// import Card from '../UI/Card';
// import { ProductsContext } from '../../context/products-context';
// import './ProductItem.css';

// const ProductItem = props => {
//     const toggleFav = useContext(ProductsContext).toggleFav;

//     const toggleFavHandler = () => {
//         toggleFav(props.id);
//     };

//     return (
//         <Card style={{ marginBottom: '1rem' }}>
//             <div className="product-item">
//                 <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
//                 <p>{props.description}</p>
//                 <button
//                     className={!props.isFav ? 'button-outline' : ''}
//                     onClick={toggleFavHandler}
//                 >
//                     {props.isFav ? 'Un-Favorite' : 'Favorite'}
//                 </button>
//             </div>
//         </Card>
//     );
// };

// export default ProductItem;


// =======Redux=======

// import React from 'react';
// import { useDispatch } from 'react-redux';

// import Card from '../UI/Card';
// import './ProductItem.css';
// import { toggleFav } from '../../store/actions/products';

// const ProductItem = props => {
//     const dispatch = useDispatch();

//     const toggleFavHandler = () => {
//         dispatch(toggleFav(props.id));
//     };

//     return (
//         <Card style={{ marginBottom: '1rem' }}>
//             <div className="product-item">
//                 <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
//                 <p>{props.description}</p>
//                 <button
//                     className={!props.isFav ? 'button-outline' : ''}
//                     onClick={toggleFavHandler}
//                 >
//                     {props.isFav ? 'Un-Favorite' : 'Favorite'}
//                 </button>
//             </div>
//         </Card>
//     );
// };

// export default ProductItem;
