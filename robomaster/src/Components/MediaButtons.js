import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Row,Col} from 'reactstrap';

const MediaButtons = (props)=>{
    return(

        <Row>
            <Col>
                {
                    props.parameters.map((parameter)=>{
                        return(
                            <span>  
                                <a className= {parameter.class}
                                href= {parameter.link}
                                target="_blank">
                                    <FontAwesomeIcon icon={parameter.icon} />
                                </a>  
                            </span>
                        );
                    })
                }
            </Col>
        </Row>
    );
}

export default MediaButtons;