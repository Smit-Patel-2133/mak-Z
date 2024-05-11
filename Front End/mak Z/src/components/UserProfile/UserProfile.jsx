import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import {  Link  } from 'react-router-dom';
import './UserProfile.css';
import axios from "axios";
import Header from '../Header/Header';
import UserTemplateInfo from '../UserTemplateInfo/UserTemplateInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash} from '@fortawesome/free-solid-svg-icons';

const UserProfile = () => {
    const user = useSelector(state => state.auth);
    const [templateInfo,setTemplateInfo] = useState(null);
    const [userProfile,setUserProfile] = useState(null);
    const [loding, setLoding]= useState(false);
    const [deleteId,setDeleteId]= useState(null);
    const profileImageTag=useRef()
    const userEmail=user.email

    useEffect(()=>{
        setLoding(true);
        axios.post('http://localhost:5000/getInfoForTemplate', {userEmail})
        .then((response) => {
            setTemplateInfo(response.data)
        })
        .catch(error => {
            console.error('Error in fetch template data with email:', error);
        });
        axios.post('http://localhost:5000/getInfoForUserImage', {userEmail})
        .then((response) => {
            let all=response.data[0].profile_pic;
            setUserProfile(all);
        })
        .catch(error => {
            console.error('Error in fetch user data with email:', error);
        });
        setLoding(false);
    }, []);

    function deleteButtonPress(id){
        setDeleteId(id)
        document.getElementsByClassName('deleteConformation')[0].style.display='block';
        document.getElementsByClassName('deleteBlock')[0].style.width='650px';
        document.getElementsByClassName('deleteBlock')[0].style.padding='15px';
    }

    function backDeleteConformation(){
        setDeleteId(null)
        document.getElementsByClassName('deleteConformation')[0].style.display='none';
        document.getElementsByClassName('deleteBlock')[0].style.width='0px';
        document.getElementsByClassName('deleteBlock')[0].style.padding='0px';
    }

    function handleDeleteMethod(){
        axios.post('http://localhost:5000/deleteTemplateFromProfile', {deleteId})
        .then(() => {
            console.log('Template Deleted Successfully');
            // alert("Template Deleted Successfully");
        })
        .catch(error => {
            console.error('Error in Delete Template:', error);
        });
        // useEffect(() => {
        //     axios.post('http://localhost:5000/getInfoForTemplate', {userEmail})
        //     .then((response) => {
        //         setTemplateInfo(response.data)
        //     })
        //     .catch(error => {
        //         console.error('Error in fetch template data with email:', error);
        //     });
        // }, [templateInfo]);
    }
        
    return (
        <>
            <Header />
            {loding 
            ? (<p style={{backgroundColor:'rgb(14, 14, 19)',width:'100%',minHeight:'calc(100vh - 65px)',color:'white'}}>Loding...</p>)
            : (<div className='profilePage'>
                <div className='profileInfo'>
                    <img src={`/src/assets/Profile picture/${userProfile}.png`} ref={profileImageTag} alt='Profile Picture' />
                    <div className='profileUserInfo'>
                        <h3>{user.name}</h3>
                        <p style={{opacity:'.5'}}>{user.email}</p>
                    </div>
                </div>
                <div className='profileTemplate'>
                    {(!templateInfo) 
                    ? (<p>Loding...</p>) 
                    : (templateInfo<1)
                    ? (<p>You have no templates</p>) 
                    : (<ul>
                        {templateInfo.map(template => (
                            <li>
                                <div>
                                <Link to={`/editPage/${template.templateid}`}><UserTemplateInfo name={template.templatename} label={template.templatetype} type={template.templatevisibility ? 'Public' : 'Private'} /></Link>
                                <button className='float-right mr-2 hover:text-red-500' onClick={()=>deleteButtonPress(template.templateid)}><FontAwesomeIcon icon={faTrash} /></button>
                                </div>
                            </li>
                        ))}
                    </ul>)
                    }                   
                </div>
            </div>)
            }
            <div className='deleteConformation'>
            </div>
            <div className="deleteBlock">
                <h4>ARE YOU SURE YOU WANT TO DELETE THIS TEMPLATE?</h4><br />
                <button onClick={()=>{backDeleteConformation(); handleDeleteMethod()}} className='ml-40 mt-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 border border-red-600 rounded shadow'>Delete</button>
                <button onClick={()=>{backDeleteConformation()}} className='ml-5 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'>Cancel</button>
            </div>
        </>

    );
}

export default UserProfile;
