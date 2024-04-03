import React, { useEffect } from 'react'
import './userPage.css';

const UserPage = (props) => {

    useEffect(() => {
        let cName = props.c;

        function abhay() {
            console.log('abhay');
        }

        function ashit() {
            console.log('ashit');
        }

        const functionMap = {
            'abhay': abhay,
            'ashit': ashit
        };

        if (functionMap[cName]) {
            functionMap[cName]();
        } else {
            console.log(`Function '${cName}' not found`);
        }
      }, [props.c]);

      const handleDrop = (event) => {
        event.preventDefault();
        props.onDrop(event); // Call the onDrop handler passed from parent
      };

  return (
    <div className='pageBody' onDrop={handleDrop}>
        <p>{props.c}</p>
    </div>
  )
}

export default UserPage