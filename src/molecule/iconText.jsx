import React from 'react';
import Icon from '../atoms/icon';
import Text from '../atoms/text';

const IconText = (props) => {
    const { icon, text } = props;
    return (
        <React.Fragment>
            <Icon icon={icon} />
            <Text text={text} />
        </React.Fragment>
    );
}
 
export default IconText;