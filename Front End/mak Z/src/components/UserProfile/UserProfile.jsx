import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { currentUser } from '../../features/authentication/auth.js';
import {  Link } from 'react-router-dom';
import './UserProfile.css';
import axios from "axios";
import Header from '../Header/Header';
import UserTemplateInfo from '../UserTemplateInfo/UserTemplateInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash} from '@fortawesome/free-solid-svg-icons';
import { ClimbingBoxLoader } from 'react-spinners';

const UserProfile = () => {
    const user = useSelector(state => state.auth);
    const userEmail=user.email;
    const userName=user.name;
    const dispatch = useDispatch();
    const [templateInfo,setTemplateInfo] = useState(null);
    const [userProfile,setUserProfile] = useState(null);
    const [userProfileOption,setUserProfileOption] = useState(null);
    const [loding, setLoding]= useState(false);
    const [deleteId,setDeleteId]= useState(null);
    const profileImageTag=useRef()

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
            setUserProfileOption(all)
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
            setTemplateInfo(prevTemplates => prevTemplates.filter(template => template.templateid !== deleteId));
        })
        .catch(error => {
            console.error('Error in Delete Template:', error);
        });
        
    }

    function editProfileClicked(){
        document.getElementsByClassName('deleteConformation')[0].style.display='block';
        document.getElementsByClassName('editProfile')[0].style.zIndex='2';
        document.getElementsByClassName('editProfile')[0].style.opacity='1';
        document.getElementsByClassName('editProfile')[0].style.padding='15px';
    }

    function backChangeProfile(){
        document.getElementsByClassName('deleteConformation')[0].style.display='none';
        document.getElementsByClassName('editProfile')[0].style.zIndex='-1';
        document.getElementsByClassName('editProfile')[0].style.opacity='0';
        document.getElementsByClassName('editProfile')[0].style.padding='0px';
    }

    async function saveChangeProfile(){
        setUserProfile(userProfileOption);
        let newName=document.getElementById('userNameChange').value;
        newName=(newName=="")?userName:newName;
        axios.post('http://localhost:5000/changeUserProfile', {userProfileOption, userEmail, newName})
        .then(async () => {
            const profilePicturePath = await import(`../../assets/Profile picture/${userProfileOption}.png`);
            dispatch(currentUser({ name:newName, email: userEmail, profilePicture: profilePicturePath.default }));
            console.log('profile Changed'); 
        })
        .catch(error => {
            console.error('Error in Change User Profile:', error);
        });
    }
        
    return (
        <>
            <Header />
            {loding || userProfile==null 
            ? (<div className="flex justify-center items-center h-screen mt-[-69px]" style={{backgroundColor:'rgb(14, 14, 19)'}}>
                    <ClimbingBoxLoader color={'#123abc'} loading={true}/>
                </div>)
            : (<div className='profilePage'>
                <div className='profileInfo'>
                    <img src={`/src/assets/Profile picture/${userProfile}.png`} ref={profileImageTag} alt='Profile Picture' />
                    <div className='profileUserInfo'>
                        <h3>{user.name}</h3>
                        <p style={{opacity:'.5'}}>{user.email}</p>
                        <button onClick={editProfileClicked} class="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-900">Edit Profile</button>
                    </div>
                </div>
                <div className='profileTemplate'>
                    {(!templateInfo) 
                    ? (<div className="flex justify-center items-center mt-20">
                            <ClimbingBoxLoader color={'#123abc'} loading={true}/>
                        </div>) 
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
            <div className="editProfile">
                <label htmlFor="userNameChange" className='ml-10'><b> Name: </b></label>
                <input id='userNameChange' placeholder={userName} type="text" name="userNameChange" class="text-black border border-white rounded px-4 py-2 focus:outline-none focus:border-gray-300"/>
                <img src={`/src/assets/Profile picture/${userProfileOption}.png`} className='profileImageChange' ref={profileImageTag} alt='Profile Picture' />
                <div className='ProfilePhotoOptions' style={{position:'relative'}}>
                    <ul>
                        {[...Array(24)].map((_, index) => (
                            <li key={index} class="inline" onClick={()=>{setUserProfileOption(index+1)}}>
                                <img src={`/src/assets/Profile picture/${index+1}.png`} className='profileImageChange cursor-pointer' ref={profileImageTag} alt='Profile Picture' />
                            </li>
                        ))}
                    </ul>
                </div>
                <br /><button onClick={()=>{backChangeProfile(); saveChangeProfile()}} style={{marginTop:'270px'}} className='ml-20 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 border border-red-600 rounded shadow'>Save</button>
                <button onClick={()=>{backChangeProfile(); setUserProfileOption(userProfile);}} className='ml-5 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'>Cancel</button>
            </div>
        </>

    );
}

export default UserProfile;
