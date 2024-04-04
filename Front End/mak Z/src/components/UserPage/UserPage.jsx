import React, { useEffect, useRef } from 'react'
import './userPage.css';

const UserPage = (props) => {

    const bodyPageRef = useRef(null);

    const handleDrop = (e) => {
        e.preventDefault();
        const element = e.dataTransfer.getData("element");

        const functionMap = {
            'paragraph': paragraph,
            'heading1': heading1,
            'heading2': heading2,
            'heading3': heading3,
            'heading4': heading4,
            'heading5': heading5,
            'heading6': heading6,
            'oList': oList,
        };

        if (functionMap[element]) {
            functionMap[element]();
        } else {
            console.log(`Function '${element}' not found`);
        }

        function paragraph(){
            const bodyPage = bodyPageRef.current;
            const paragraphElement = document.createElement('p');
            paragraphElement.textContent = 'Here is your Paragraph';
            paragraphElement.setAttribute('contenteditable', 'true');
            // paragraphElement.style.color = 'red';
            bodyPage.appendChild(paragraphElement);
        }

        function heading1(){
            const bodyPage = bodyPageRef.current;
            const heading1Element = document.createElement('h1');
            heading1Element.textContent = 'Here is your Heading 1';
            heading1Element.setAttribute('contenteditable', 'true');
            bodyPage.appendChild(heading1Element);
        }

        function heading2(){
            const bodyPage = bodyPageRef.current;
            const heading2Element = document.createElement('h2');
            heading2Element.textContent = 'Here is your Heading 2';
            heading2Element.setAttribute('contenteditable', 'true');
            bodyPage.appendChild(heading2Element);
        }

        function heading3(){
            const bodyPage = bodyPageRef.current;
            const heading3Element = document.createElement('h3');
            heading3Element.textContent = 'Here is your Heading 3';
            heading3Element.setAttribute('contenteditable', 'true');
            bodyPage.appendChild(heading3Element);
        }

        function heading4(){
            const bodyPage = bodyPageRef.current;
            const heading4Element = document.createElement('h4');
            heading4Element.textContent = 'Here is your Heading 4';
            heading4Element.setAttribute('contenteditable', 'true');
            bodyPage.appendChild(heading4Element);
        }

        function heading5(){
            const bodyPage = bodyPageRef.current;
            const heading5Element = document.createElement('h5');
            heading5Element.textContent = 'Here is your Heading 5';
            heading5Element.setAttribute('contenteditable', 'true');
            bodyPage.appendChild(heading5Element);
        }

        function heading6(){
            const bodyPage = bodyPageRef.current;
            const heading6Element = document.createElement('h6');
            heading6Element.textContent = 'Here is your Heading 6';
            heading6Element.setAttribute('contenteditable', 'true');
            bodyPage.appendChild(heading6Element);
        }

        function oList(){
            const bodyPage = bodyPageRef.current;
            const oListElement = document.createElement('ol');
            const listItemElement = document.createElement('li');
            listItemElement.textContent = 'Here is your list';
            listItemElement.setAttribute('contenteditable', 'true');
            listItemElement.style.listStyleType = 'number';
            oListElement.appendChild(listItemElement);
            bodyPage.appendChild(oListElement);
        }

        const logOuterHTML = () => {
            if (bodyPageRef.current) {
            console.log(bodyPageRef.current.outerHTML);
            }
        };
        logOuterHTML()

    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleKeyDown = (event) => {
        if (event && event.key === 'Enter') {
            event.preventDefault(); 
            const selection = window.getSelection();
            if (selection && selection.focusNode) {
                const parentElement = selection.focusNode.parentElement;
                const grandParentElement = parentElement.parentElement;
                if (grandParentElement) {
                  const clonedNode = parentElement.cloneNode(true);
                  grandParentElement.appendChild(clonedNode);
                  const range = document.createRange(); // Create a new range
                  range.selectNodeContents(clonedNode); // Select the contents of the cloned node
                  range.collapse(false); // Collapse the range to the end
                  const selection = window.getSelection(); // Get the selection object
                  selection.removeAllRanges(); // Remove any existing ranges from the selection
                  selection.addRange(range); // Add the new range to the selection
                }
            }
        }
    };

  return (
    <div className='pageBody' onKeyDown={handleKeyDown} ref={bodyPageRef} onDrop={handleDrop} onDragOver={handleDragOver}>
    </div>
  )
}

export default UserPage