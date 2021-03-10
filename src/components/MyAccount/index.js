import React from 'react';
import { useSelector } from 'react-redux';
// import {firestore} from './../../firebase/firebase.utils';


const mapState = ({ user }) => ({
    currentUser: user.currentUser
});

const MyAccount = () => {
    const { currentUser } = useSelector(mapState);
   
    return (
        <div>
            <h2>My Account</h2>
            <h3>Name: {currentUser.displayName}</h3>
            <h4>Email: {currentUser.email}</h4>
            <h4>Joined at: {currentUser.createdDate.toDate().toString()}</h4>
        </div>

    );
}

export default MyAccount;