import React from 'react';
import { List,Container } from 'reactstrap';

const RequirementList = (props) => {
    return (
        <Container>
            <br/>
            <List type="unstyled">

            <ul>
                {
                props.array.map((item) =>{
                    return(
                        <li>{item}</li>
                    );


                })
            }
            </ul>

            

            </List>
            <br/>
        </Container>
    );
}

export default RequirementList;