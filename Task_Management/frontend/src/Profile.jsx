import React, { useEffect, useState } from 'react';
import { getUserProfile } from './api';
import { notify } from './utils';

function Profile({ token }) {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            const response = await getUserProfile(token);
            if (response.success) {
                setProfile(response.data);
            } else {
                notify(response.message, 'error');
            }
        };
        fetchProfile();
    }, [token]);

    return (
        <div>
            <h1>Profile</h1>
            {profile ? (
                <div>
                    <p>Username: {profile.username}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Profile;
