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
        
    function selectElement(e){
        const range = document.createRange();
        range.selectNodeContents(e.target);
        range.collapse(false);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
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
            'sub': sub,
            'sup': sup,
            'del': del,
            'ins': ins,
            'div': div,
            'section': section,
            'header': header,
            'footer': footer,
            'img': img,
            'video': video
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
            if(targetElement){
                const TargetTagName=targetElement.tagName.toLowerCase();
                const cotentTagName=contentVariable.tagName.toLowerCase();
                if(TargetTagName=='div' || TargetTagName=='section' || TargetTagName=='header' || TargetTagName=='footer' || cotentTagName=='strong' || cotentTagName=='del' || cotentTagName=='ins' || cotentTagName=='sup' || cotentTagName=='sub' || cotentTagName=='em'){
                    targetElement.appendChild(contentVariable)
                }else{
                    targetElement.parentElement.insertBefore(contentVariable, targetElement);
                }
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
        
        function sub(){
            const bodyPage = bodyPageRef.current;
            const subElement = document.createElement('sub');
            subElement.textContent = 'Here is your Subscript';
            const targetElement = findTargetElement(e);
            setCommonAttributes(subElement,bodyPage,targetElement)
        }
        
        function sup(){
            const bodyPage = bodyPageRef.current;
            const supElement = document.createElement('sup');
            supElement.textContent = 'Here is your Superscript';
            const targetElement = findTargetElement(e);
            setCommonAttributes(supElement,bodyPage,targetElement)
        }
        
        function del(){
            const bodyPage = bodyPageRef.current;
            const delElement = document.createElement('del');
            delElement.textContent = 'Here is your Deleted Text';
            const targetElement = findTargetElement(e);
            setCommonAttributes(delElement,bodyPage,targetElement)
        }
        
        function ins(){
            const bodyPage = bodyPageRef.current;
            const insElement = document.createElement('ins');
            insElement.textContent = 'Here is your Inserted Text';
            const targetElement = findTargetElement(e);
            setCommonAttributes(insElement,bodyPage,targetElement)
        }
        
        function section(){
            const bodyPage = bodyPageRef.current;
            const sectionElement = document.createElement('section');
            sectionElement.textContent = 'Here is your Section Area';
            const targetElement = findTargetElement(e);
            setCommonAttributes(sectionElement,bodyPage,targetElement)
        }
        
        function header(){
            const bodyPage = bodyPageRef.current;
            const headerElement = document.createElement('header');
            headerElement.textContent = 'Here is your Header Area';
            const targetElement = findTargetElement(e);
            setCommonAttributes(headerElement,bodyPage,targetElement)
        }
        
        function footer(){
            const bodyPage = bodyPageRef.current;
            const footerElement = document.createElement('footer');
            footerElement.textContent = 'Here is your Footer Area';
            const targetElement = findTargetElement(e);
            setCommonAttributes(footerElement,bodyPage,targetElement)
        }
        
        function div(){
            const bodyPage = bodyPageRef.current;
            const divElement = document.createElement('div');
            divElement.textContent = 'Here is your Div';
            const targetElement = findTargetElement(e);
            setCommonAttributes(divElement,bodyPage,targetElement)
        }

        function img() {
            const bodyPage = bodyPageRef.current;
            const targetElement = findTargetElement(e);
            const inputElement = document.createElement('input');
            inputElement.type = 'file';
            inputElement.accept = 'image/*';
            
            function handleFileChange(e) {
                const files = e.target.files;
                if (files && files.length > 0) {
                    const file = files[0];
                    const reader = new FileReader();
                    reader.onload = function(event) {
                        const imgElement = document.createElement('img');
                        imgElement.setAttribute('src', event.target.result);
                        imgElement.addEventListener('click',selectElement)
                        setCommonAttributes(imgElement,bodyPage,targetElement)
                        inputElement.remove();
                    };
                    reader.readAsDataURL(file);
                }
            }
            inputElement.addEventListener('change', handleFileChange);
            inputElement.click();
        }

        function video() {
            const bodyPage = bodyPageRef.current;
            const targetElement = findTargetElement(e);
            const inputElement = document.createElement('input');
            inputElement.type = 'file';
            inputElement.accept = 'video/*'; // Accept only video files
            
            function handleFileChange(e) {
                const files = e.target.files;
                if (files && files.length > 0) {
                    const file = files[0];
                    const reader = new FileReader();
                    reader.onload = function(event) {
                        const videoElement = document.createElement('video');
                        videoElement.setAttribute('src', event.target.result);
                        videoElement.setAttribute('controls', ''); // Add controls for playback
                        videoElement.addEventListener('click', selectElement);
                        setCommonAttributes(videoElement, bodyPage, targetElement);
                        inputElement.remove();
                    };
                    reader.readAsDataURL(file);
                }
            }
            
            inputElement.addEventListener('change', handleFileChange);
            inputElement.click();
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
                if(selectedNode.tagName === 'IMG' || selectedNode.tagName === 'VIDEO'){
                    selectedNode.remove()
                }else{
                    const parentElement = selectedNode.parentElement; 
                    if (parentElement) {
                        parentElement.remove();
                    }
                }    
            }
        }
    };

    function findTargetElement(e) {
        const target = e.target;
        const tagName = target.tagName.toLowerCase();
        if(tagName === 'li'){
            return target.parentNode;
        }else {
            if(!target.className.includes('pageBody')){
                return target
            }
            return null;
        }
    }

  return (
    <div className={`pageBody ${styleHover ? '' : 'styleHoveredPageBody'}`} onKeyDown={handleKeyDown} ref={bodyPageRef} onDrop={handleDrop} onDragOver={handleDragOver}>
    </div>
  )
}

export default UserPage