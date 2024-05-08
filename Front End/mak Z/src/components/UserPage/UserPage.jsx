import React, { useEffect, useRef, useState } from 'react'
import './userPage.css';
import axios from "axios";
import { useSelector } from 'react-redux';
import html2canvas from 'html2canvas';

const UserPage = ({props , bodyPageRef, sendDataToUserCss, styleHover, hardStyleHover, onUpdateHardStyleHover, eyeClick}) => {

    const user = useSelector(state => state.auth);
    const [activeElement,setActiveElement]=useState(null)
    var elementCursorX=0;
    var elementCursorY=0;

    const logOuterHTML = (name,label,type,saved) => {
        const code = bodyPageRef.current.outerHTML;
        const templateName=name.value
        const templateLabel=label.value
        const templateType=type.value
        const userEmail=user.email
        const allElements=document.getElementsByClassName('editableBorder');
        const elementsArray = Array.from(allElements);
        elementsArray.forEach(element => {
            element.classList.remove('editableBorder');
        });

        html2canvas(bodyPageRef.current).then(canvas => {
            const base64String = canvas.toDataURL();
            const imageOfTemplate = base64String.split(',')[1].trim(); // Get base64 part and trim whitespace
            try {
                axios.post('http://localhost:5000/download', { code }, { responseType: 'blob' })
                    .then(response => {
                        if(!saved){
                            const url = window.URL.createObjectURL(new Blob([response.data]));
                            const link = document.createElement('a');
                            link.href = url;
                            link.setAttribute('download', 'Mak-Z.html');
                            document.body.appendChild(link);
                            link.click();
                            link.parentNode.removeChild(link);
                        }else{
                            axios.post('http://localhost:5000/save', { userEmail, imageOfTemplate, templateName, templateLabel, templateType})
                            .then(() => {
                                alert('Your File Saved Successfully')
                                console.log('File Saved');
                            })
                            .catch(error => {
                                console.error('Error in File Save:', error);
                            });
                        }
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
        });
        elementsArray.forEach(element => {
            element.classList.add('editableBorder');
        });
    };
    

    if (bodyPageRef.current) {
        bodyPageRef.current.logOuterHTML = logOuterHTML;
        bodyPageRef.current.eyeClickUserPage = eyeClickUserPage;
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
        setActiveElement(e.target);
        e.target.classList.add('activeElementClass')
        sendDataToUserCss(e.target);
    }

    function eyeClickUserPage(){
        if(activeElement){
            const hasActiveClass = activeElement.classList.contains('activeElementClass');
            if(!hasActiveClass){
                activeElement.classList.add('activeElementClass')
            }else{
                activeElement.classList.remove('activeElementClass')
            }
        }
    }

    const handleDoubleClickOnDragableElement = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const el=e.target;
        let perent=e.target.parentElement;
        while(!perent.classList.contains('pageBody')){
            if(el.getAttribute('contenteditable')=='true'){
                perent.setAttribute('contenteditable','flase');
                perent.classList.add('forCursorGrab');
            }else{
                perent.setAttribute('contenteditable','true');
                perent.classList.remove('forCursorGrab');
            }
            perent=perent.parentElement;
        }
        if(el.getAttribute('contenteditable')=='true'){
            el.setAttribute('contenteditable','flase');
            el.classList.add('forCursorGrab');
        }else{
            el.setAttribute('contenteditable','true');
            el.classList.remove('forCursorGrab');
        }
        return false;
    };

    function handlePagebodyElementDragStart(e) {
        const xOffset = Math.max(0, e.offsetX);
        const yOffset = Math.max(0, e.offsetY);
        elementCursorX=xOffset+3.5;
        elementCursorY=yOffset+3.5;
    }
    

    function handlePagebodyElementDrag(e){
        e.preventDefault()
        const el=e.target;
        const bodyPage=el.parentElement;
        const elStyle=window.getComputedStyle(el);
        const bodyPageStyle=window.getComputedStyle(bodyPage)
        const widthEl=pxToPr(parseInt(bodyPageStyle.getPropertyValue('width'))-parseInt(elStyle.getPropertyValue('width')),bodyPage);
        const bodyPagePosition=bodyPage.getBoundingClientRect();
        const cursorValX=e.clientX;
        const cursorValY=e.clientY;
        el.style.top=`${Math.max(0,(cursorValY-bodyPagePosition.top)-elementCursorY)}px`
        el.style.left=`${Math.min(pxToPr(Math.max(0,(cursorValX-bodyPagePosition.left)-elementCursorX),bodyPage),widthEl)}%`
    }

    function handlePagebodyElementDragEnd(e){
        e.target.setAttribute('contenteditable','true');
        e.target.classList.remove('forCursorGrab');
        let perent=e.target.parentElement;
        while(!perent.classList.contains('pageBody')){
                perent.setAttribute('contenteditable','true');
                perent.classList.remove('forCursorGrab');
                perent=perent.parentElement;
        }
    }

    function pxToPr(x,perentElement){
      const computedStyle = window.getComputedStyle(perentElement);
      const width = parseInt(computedStyle.getPropertyValue('width'));
      return (x/width)*100;
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
            'video': video,
            'button': button,
            'form': form,
            'navbar': navbar,
            'dropdown': dropdown,
            'input': input,
            'link': link
        };
        
        const cursorValueX=e.clientX;
        const cursorValueY=e.clientY;

        if (functionMap[element]) {
            functionMap[element]();
        } else {
            console.log(`Function '${element}' not found`);
        }

        function setCommonAttributes(contentVariable,bodyPage,targetElement){
            contentVariable.setAttribute('contenteditable', 'true');
            contentVariable.classList.add('editable');
            contentVariable.classList.add('editableBorder');
            contentVariable.addEventListener('click', handleActive);
            const bodyPagePosition=bodyPage.getBoundingClientRect();
            if(bodyPage && bodyPage==bodyPageRef.current){
                contentVariable.style.position='absolute';
                contentVariable.setAttribute('draggable','true');
                contentVariable.addEventListener('dblclick',handleDoubleClickOnDragableElement);
                contentVariable.addEventListener('dragstart',handlePagebodyElementDragStart);
                contentVariable.addEventListener('dragend',handlePagebodyElementDragEnd);
                contentVariable.addEventListener('drag',handlePagebodyElementDrag);
                contentVariable.style.left=`${pxToPr(cursorValueX-bodyPagePosition.left,bodyPage)}%`;
                contentVariable.style.top=`${pxToPr(cursorValueY-bodyPagePosition.top,bodyPage)}%`;
                if(contentVariable.tagName.toLowerCase()=='nav') contentVariable.style.left=`0px`;
            }
            if(targetElement){
                const TargetTagName=targetElement.tagName.toLowerCase();
                const cotentTagName=contentVariable.tagName.toLowerCase();
                if(TargetTagName=='div' || TargetTagName=='section' || TargetTagName=='header' || TargetTagName=='footer' || cotentTagName=='strong' || cotentTagName=='del' || cotentTagName=='ins' || cotentTagName=='sup' || cotentTagName=='sub' || cotentTagName=='em'){
                    const targetElementPosition=targetElement.getBoundingClientRect();
                    contentVariable.style.left=`${(cursorValueX-targetElementPosition.left)}px`;
                    contentVariable.style.top=`${(cursorValueY-targetElementPosition.top)}px`;
                    targetElement.appendChild(contentVariable)
                    const computedStyleContent = window.getComputedStyle(contentVariable);
                    const widthContent = parseInt(computedStyleContent.getPropertyValue('width'));
                    contentVariable.style.width=`${pxToPr(widthContent,targetElement)+1}%`;
                }else{
                    targetElement.parentElement.insertBefore(contentVariable, targetElement);
                    const computedStyleContent = window.getComputedStyle(contentVariable);
                    const widthContent = parseInt(computedStyleContent.getPropertyValue('width'));
                    contentVariable.style.width=`${pxToPr(widthContent,bodyPage)+1}%`;
                }
            }else{
                bodyPage.insertBefore(contentVariable, targetElement);
                const computedStyleContent = window.getComputedStyle(contentVariable);
                const widthContent = parseInt(computedStyleContent.getPropertyValue('width'));
                contentVariable.style.width=`${pxToPr(widthContent,bodyPage)+1}%`;
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
            setCommonAttributes(heading1Element,bodyPage,targetElement);
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
            const listItemElement = document.createElement('li');
            listItemElement.textContent = 'Here is your list';
            listItemElement.style.listStyleType = 'number';
            setCommonAttributes(listItemElement,oListElement,null);
            const targetElement = findTargetElement(e);
            setCommonAttributes(oListElement,bodyPage,targetElement);
        }

        function uList(){
            const bodyPage = bodyPageRef.current;
            const uListElement = document.createElement('ol');
            const listItemElement = document.createElement('li');
            listItemElement.textContent = 'Here is your list';
            listItemElement.style.listStyleType = 'disc';
            setCommonAttributes(listItemElement,uListElement,null);
            const targetElement = findTargetElement(e);
            setCommonAttributes(uListElement,bodyPage,targetElement);
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
            headerElement.style.width='550px';
            headerElement.style.height='250px';
            headerElement.textContent = 'Here is your Header Area';
            const targetElement = findTargetElement(e);
            setCommonAttributes(headerElement,bodyPage,targetElement)
        }
        
        function footer(){
            const bodyPage = bodyPageRef.current;
            const footerElement = document.createElement('footer');
            footerElement.style.width='550px';
            footerElement.style.height='250px';
            footerElement.textContent = 'Here is your Footer Area';
            const targetElement = findTargetElement(e);
            setCommonAttributes(footerElement,bodyPage,targetElement)
        }
        
        function div(){
            const bodyPage = bodyPageRef.current;
            const divElement = document.createElement('div');
            divElement.style.width='550px';
            divElement.style.height='250px';
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
        
        function button(){
            const bodyPage = bodyPageRef.current;
            const buttonElement = document.createElement('button');
            buttonElement.textContent = 'Here is your button';
            buttonElement.classList.add('btn', 'btn-primary')
            const targetElement = findTargetElement(e);
            setCommonAttributes(buttonElement,bodyPage,targetElement)
        }

        function form() {
            const bodyPage = bodyPageRef.current;
            const formElement = document.createElement('form');
            formElement.style.width='500px'
            formElement.classList.add('container');
            const formGroup = document.createElement('div');
            formGroup.classList.add('form-group');
            const labelElement = document.createElement('label');
            labelElement.textContent = 'Enter your name:';
            const inputElement = document.createElement('input');
            inputElement.type = 'text';
            inputElement.classList.add('form-control');
            inputElement.id = 'nameInput';
            setCommonAttributes(labelElement,formGroup,null);
            setCommonAttributes(inputElement,formGroup,null);
            const submitButton = document.createElement('button');
            submitButton.textContent = 'Submit';
            formElement.addEventListener('submit', handleSubmitForm);
            submitButton.classList.add('btn', 'btn-primary', 'mt-2');
            setCommonAttributes(formGroup,formElement,null);
            setCommonAttributes(submitButton,formElement,null);
            const targetElement = findTargetElement(e);
            setCommonAttributes(formElement,bodyPage,targetElement);
        }
        function handleSubmitForm(event) {
            event.preventDefault();
        }

        function navbar() {
            const bodyPage = bodyPageRef.current;
            const navElement = document.createElement('nav');
            navElement.style.width='100%'
            navElement.style.backgroundColor = 'lightblue';
            navElement.style.padding = '10px';
            const containerElement = document.createElement('div');
            containerElement.style.margin = '0 auto';
            containerElement.style.display = 'flex';
            containerElement.style.justifyContent = 'space-between';
            containerElement.style.alignItems = 'center';
        
            // Create navbar brand
            const brandElement = document.createElement('a');
            brandElement.textContent = 'Navbar';
            brandElement.href = '#';
            brandElement.style.color = 'black';
            brandElement.style.textDecoration = 'none';
            brandElement.style.fontSize = '24px';
            brandElement.style.fontWeight = 'bold';
        
            // Create unordered list for navbar items
            const ulElement = document.createElement('ul');
            ulElement.style.listStyleType = 'none';
            ulElement.style.margin = '0';
            ulElement.style.padding = '2';
            ulElement.style.display = 'flex';
        
            // Create list items for each navbar link
            const homeLink = createNavbarLink('Home', '#');
            const featuresLink = createNavbarLink('Features', '#');
            const pricingLink = createNavbarLink('Pricing', '#');
            const disabledLink = createNavbarLink('Disabled', '#');
        
            // Append links to navbar
            setCommonAttributes(homeLink,ulElement,null);
            setCommonAttributes(featuresLink,ulElement,null);
            setCommonAttributes(pricingLink,ulElement,null);
            setCommonAttributes(disabledLink,ulElement,null);
        
            // Append elements to DOM
            setCommonAttributes(containerElement,navElement,null);
            setCommonAttributes(brandElement,containerElement,null);
            setCommonAttributes(ulElement,containerElement,null);
        
            // Append nav to body
            const targetElement = findTargetElement(e);
            setCommonAttributes(navElement,bodyPage,targetElement);
        }
        
        function createNavbarLink(text, href) {
            const liElement = document.createElement('li');
            liElement.style.paddingRight = '20px';
        
            const linkElement = document.createElement('a');
            linkElement.textContent = text;
            linkElement.href = href;
            linkElement.style.color = 'black';
            linkElement.style.textDecoration = 'none';
            linkElement.style.fontSize = '18px';
        
            setCommonAttributes(linkElement,liElement,null);
        
            return liElement;
        }
        
        function dropdown() {
            const bodyPage = bodyPageRef.current;
            
            // Create dropdown select element
            const dropDownElement = document.createElement('select');
            dropDownElement.classList.add('form-control'); // Add Bootstrap form-control class
            
            // Create dropdown options
            const dropDownoptionElement1 = document.createElement('option');
            dropDownoptionElement1.textContent = 'DropDown1';
            const dropDownoptionElement2 = document.createElement('option');
            dropDownoptionElement2.textContent = 'DropDown2';
            const dropDownoptionElement3 = document.createElement('option');
            dropDownoptionElement3.textContent = 'DropDown3';
            
            // Append options to select element
            setCommonAttributes(dropDownoptionElement1,dropDownElement,null);
            setCommonAttributes(dropDownoptionElement2,dropDownElement,null);
            setCommonAttributes(dropDownoptionElement3,dropDownElement,null);
            
            // Append dropdown container to body or a target element
            setCommonAttributes(dropDownElement,bodyPage,null); // Or replace bodyPage with the target element
        }

        function input(){
            const bodyPage = bodyPageRef.current;
            const divElement = document.createElement('div');
            divElement.style.padding='5px';
            const labelElement = document.createElement('label');
            labelElement.textContent="Enter your Label:"
            const br=document.createElement('br');
            const inputElement = document.createElement('input');
            inputElement.setAttribute('type','text')
            const targetElement = findTargetElement(e);
            setCommonAttributes(labelElement,divElement,null);
            setCommonAttributes(br,divElement,null);
            setCommonAttributes(inputElement,divElement,null);
            setCommonAttributes(divElement,bodyPage,targetElement);
        }

        function link(){
            const bodyPage = bodyPageRef.current;
            const link = document.createElement('a');
            link.textContent="Here is your Link"
            link.setAttribute('href','#')
            const targetElement = findTargetElement(e);
            setCommonAttributes(link,bodyPage,targetElement);
        }
        

    }

    const handleDragOver = (event) => {
        event.preventDefault();
        const element=bodyPageRef.current
        if(element.classList.contains('pageBody')){
            const rect = element.getBoundingClientRect();
            const y = event.clientY - rect.top;
            const computedStyle = window.getComputedStyle(element);
            const minH = parseInt(computedStyle.getPropertyValue('min-height'));
            if (y>minH-100) {
                element.style.minHeight = `${minH + 80}px`;
            }
        }
    };

    function insertAfter(newNode, referenceNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }
    
    const handleKeyDown = (event) => {
        if (event && event.key === 'Enter' && event.shiftKey) {
            event.preventDefault(); 
            const selectionElement = activeElement
            if (selectionElement) {
                const clonedNode = selectionElement.cloneNode(true);
                clonedNode.addEventListener('click', handleActive);
                clonedNode.addEventListener('dblclick',handleDoubleClickOnDragableElement);
                clonedNode.addEventListener('dragstart',handlePagebodyElementDragStart);
                clonedNode.addEventListener('dragend',handlePagebodyElementDragEnd);
                clonedNode.addEventListener('drag',handlePagebodyElementDrag);
                const computedStyleClone = window.getComputedStyle(selectionElement);
                const cloneNodeHeight = computedStyleClone.getPropertyValue('height');
                const topPosition=computedStyleClone.getPropertyValue('top');
                clonedNode.style.top=`${parseInt(cloneNodeHeight)+parseInt(topPosition)}px`
                clonedNode.click();
                insertAfter(clonedNode, activeElement);
                const range = document.createRange();
                range.selectNodeContents(clonedNode); // Select the contents of the cloned node
                range.collapse(false); // Collapse the range to the end
                const selection = window.getSelection(); // Get the selection object
                selection.removeAllRanges(); // Remove any existing ranges from the selection
                selection.addRange(range); // Add the new range to the selection
            }
        }else if(event && event.key === 'Delete'){
            const selection = window.getSelection();
            const selectedNode = selection.focusNode;
            console.log(selectedNode)
            
            if (selectedNode) {
                if(selectedNode.tagName === 'IMG' || selectedNode.tagName === 'VIDEO'){
                    selectedNode.remove()
                }else{
                    const parentElement = selectedNode.parentElement; 
                    if (parentElement && !parentElement.classList.contains('pageBody')) {
                        parentElement.remove();
                    }else{
                        selectedNode.remove();
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

    function removeActiveElementClass(e){
        onUpdateHardStyleHover(true)
        if (bodyPageRef.current && e.target === bodyPageRef.current && activeElement) {
            activeElement.classList.remove('activeElementClass');
            setActiveElement(null);
        }
    }

  return (
    <div className={`pageBody ${styleHover ? '' : 'styleHoveredPageBody'} ${hardStyleHover ? '' : 'hardStyleHoveredPageBody'} ${eyeClick ? 'eyeClicked' : ''}`} onKeyDown={handleKeyDown} ref={bodyPageRef} onDrop={handleDrop} onDragOver={handleDragOver} onClick={removeActiveElementClass}>
    </div>
  )
}

export default UserPage