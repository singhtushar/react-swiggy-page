import React, { useState } from 'react';
import { itemsList } from './itemBuilder/itemList';
import Menubar from './menubar/menubar.jsx';


const Mainmenu = () => {
    return ( 
        <div>
            <Menubar itemsList = {itemsList} />
        </div>
     );
}
 
export default Mainmenu;