import React, { useEffect, useRef, useState } from 'react'
import './userPage.css';
import axios from "axios";

const UserPage = ({props , bodyPageRef, sendDataToUserCss, styleHover}) => {
    // const bodyPageRef = useRef(null);

    const logOuterHTML = () => {
        const code = bodyPageRef.current.outerHTML;
        try {
            axios.post('http://localhost:5000/download', { code }, { responseType: 'blob' })
                .then(response => {
                    const url = window.URL.createObjectURL(new Blob([response.data]));
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', 'Mak-Z.html');
                    document.body.appendChild(link);
                    link.click();
                    link.parentNode.removeChild(link);
                    axios.delete('http://localhost:5000/delete/Mak-Z.html')
                    .then(() => {
                        console.log('File deleted successfully');
                    })
                    .catch(error => {
                        console.error('Error deleting file:', error);
                    });


                })
                .catch(error => {
                    console.error('Error downloading file:', error);
                });
        } catch (error) {
            console.error('Code passed from client side generate error ', error);
        }
    };
    

    if (bodyPageRef.current) {
        bodyPageRef.current.logOuterHTML = logOuterHTML;
    }
    
    function handleActive(e){
        sendDataToUserCss(e.target);
    }

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
            'uList': uList,
            'em': em,
            'strong': strong,
            'div': div
        };

        if (functionMap[element]) {
            functionMap[element]();
        } else {
            console.log(`Function '${element}' not found`);
        }

        function setCommonAttributes(contentVariable,bodyPage,targetElement){
            contentVariable.setAttribute('contenteditable', 'true');
            contentVariable.setAttribute('class', 'editable');
            contentVariable.addEventListener('click', handleActive);
            if(targetElement && targetElement.tagName.toLowerCase()=='div'){
                targetElement.appendChild(contentVariable)
            }else{
                bodyPage.insertBefore(contentVariable, targetElement);
            }
        }

        function paragraph(){
            const bodyPage = bodyPageRef.current;
            const paragraphElement = document.createElement('p');
            paragraphElement.textContent = 'Here is your Paragraph';
            const targetElement = findTargetElement(e);
            setCommonAttributes(paragraphElement,bodyPage,targetElement)
        }

        function heading1(){
            const bodyPage = bodyPageRef.current;
            const heading1Element = document.createElement('h1');
            heading1Element.textContent = 'Here is your Heading 1';
            const targetElement = findTargetElement(e);
            setCommonAttributes(heading1Element,bodyPage,targetElement)
        }

        function heading2(){
            const bodyPage = bodyPageRef.current;
            const heading2Element = document.createElement('h2');
            heading2Element.textContent = 'Here is your Heading 2';
            const targetElement = findTargetElement(e);
            setCommonAttributes(heading2Element,bodyPage,targetElement)
        }

        function heading3(){
            const bodyPage = bodyPageRef.current;
            const heading3Element = document.createElement('h3');
            heading3Element.textContent = 'Here is your Heading 3';
            const targetElement = findTargetElement(e);
            setCommonAttributes(heading3Element,bodyPage,targetElement)
        }

        function heading4(){
            const bodyPage = bodyPageRef.current;
            const heading4Element = document.createElement('h4');
            heading4Element.textContent = 'Here is your Heading 4';
            const targetElement = findTargetElement(e);
            setCommonAttributes(heading4Element,bodyPage,targetElement)
        }

        function heading5(){
            const bodyPage = bodyPageRef.current;
            const heading5Element = document.createElement('h5');
            heading5Element.textContent = 'Here is your Heading 5';
            const targetElement = findTargetElement(e);
            setCommonAttributes(heading5Element,bodyPage,targetElement)
        }

        function heading6(){
            const bodyPage = bodyPageRef.current;
            const heading6Element = document.createElement('h6');
            heading6Element.textContent = 'Here is your Heading 6';
            const targetElement = findTargetElement(e);
            setCommonAttributes(heading6Element,bodyPage,targetElement)
        }

        function oList(){
            const bodyPage = bodyPageRef.current;
            const oListElement = document.createElement('ol');
            oListElement.setAttribute('class', 'editable');
            oListElement.addEventListener('click', handleActive);
            const listItemElement = document.createElement('li');
            listItemElement.textContent = 'Here is your list';
            listItemElement.setAttribute('contenteditable', 'true');
            listItemElement.setAttribute('class', 'editable');
            listItemElement.addEventListener('click', handleActive);
            listItemElement.style.listStyleType = 'number';
            oListElement.appendChild(listItemElement);
            const targetElement = findTargetElement(e);
            bodyPage.insertBefore(oListElement,targetElement);
        }

        function uList(){
            const bodyPage = bodyPageRef.current;
            const uListElement = document.createElement('ol');
            uListElement.setAttribute('class', 'editable');
            uListElement.addEventListener('click', handleActive);
            const listItemElement = document.createElement('li');
            listItemElement.textContent = 'Here is your list';
            listItemElement.setAttribute('contenteditable', 'true');
            listItemElement.setAttribute('class', 'editable');
            listItemElement.addEventListener('click', handleActive);
            listItemElement.style.listStyleType = 'disc';
            uListElement.appendChild(listItemElement);
            const targetElement = findTargetElement(e);
            bodyPage.insertBefore(uListElement,targetElement);
        }
        
        function em(){
            const bodyPage = bodyPageRef.current;
            const emElement = document.createElement('em');
            emElement.textContent = 'Here is your Emphasis';
            const targetElement = findTargetElement(e);
            setCommonAttributes(emElement,bodyPage,targetElement)
        }
        
        function strong(){
            const bodyPage = bodyPageRef.current;
            const strongElement = document.createElement('strong');
            strongElement.textContent = 'Here is your Strong';
            const targetElement = findTargetElement(e);
            setCommonAttributes(strongElement,bodyPage,targetElement)
        }
        
        function div(){
            const bodyPage = bodyPageRef.current;
            const divElement = document.createElement('div');
            divElement.textContent = 'Here is your Div';
            const targetElement = findTargetElement(e);
            setCommonAttributes(divElement,bodyPage,targetElement)
        }

    }

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    function insertAfter(newNode, referenceNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }
    
    const handleKeyDown = (event) => {
        if (event && event.key === 'Enter') {
            event.preventDefault(); 
            const selection = window.getSelection();
            if (selection && selection.focusNode) {
                const parentElement = selection.focusNode.parentElement;
                const grandParentElement = parentElement.parentElement;
                if (grandParentElement) {
                  const clonedNode = parentElement.cloneNode(true);
                  clonedNode.addEventListener('click', handleActive);
                  clonedNode.click();
                  insertAfter(clonedNode, parentElement);
                  const range = document.createRange();
                  range.selectNodeContents(clonedNode); // Select the contents of the cloned node
                  range.collapse(false); // Collapse the range to the end
                  const selection = window.getSelection(); // Get the selection object
                  selection.removeAllRanges(); // Remove any existing ranges from the selection
                  selection.addRange(range); // Add the new range to the selection
                }
            }
        }else if(event && event.key === 'Delete'){
            const selection = window.getSelection();
            const selectedNode = selection.focusNode;
            
            if (selectedNode) {
                const parentElement = selectedNode.parentElement; 
                if (parentElement) {
                    parentElement.remove();
                }
            }
        }
    };

    function findTargetElement(e) {
        const target = e.target;
        const tagName = target.tagName.toLowerCase();
        if (tagName.startsWith('h') || tagName === 'p' || tagName === 'ol' || tagName === 'em' || tagName === 'strong') {
            return target; // If dropping on a valid target element, insert before it
        }else if(tagName === 'li'){
            return target.parentNode;
        }else {
            if(!target.className.includes('pageBody') && tagName==='div'){
                return target
            }
            return null; // Otherwise, append at the end
        }
    }

  return (
    <div className={`pageBody ${styleHover ? '' : 'styleHoveredPageBody'}`} onKeyDown={handleKeyDown} ref={bodyPageRef} onDrop={handleDrop} onDragOver={handleDragOver}>
    </div>
  )
}

export default UserPage