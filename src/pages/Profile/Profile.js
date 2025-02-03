import React, { useState } from 'react';
import LogoutButton from '../../components/LogoutBtn/LogoutBtn';
import ProfileAndEditSection from '../../components/Profile/ProfileAndEditSection';
import UserInformationSection from '../../components/Profile/UserInformationSection';
import OrdersHistorySection from '../../components/Profile/OrdersHistorySection';
// import context
import { useLoginAuth } from '../../context/AuthLoginContext';

const ProfilePage = () => {
    const [isEditing, setIsEditing] = useState(false);
    const { user } = useLoginAuth();

    return (
        <div className="pt-20 px-4 md:pt-20 sm:px-6 lg:px-8 pt-10 sm:pt-16 lg:pt-28 max-w-7xl mx-auto space-y-4 sm:space-y-6">
            {/* Profile Header and Edit */}
            <ProfileAndEditSection
                isEditing={isEditing}
                setIsEditing={setIsEditing}
                user={user}
            />

            {/* User Information Card */}
            <UserInformationSection isEditing={isEditing} user={user} />

            {/* Order History Card */}
            <OrdersHistorySection user={user} />

            {/* Logout Button */}
            <section className="p-8 justify-center flex">
                <LogoutButton />
            </section>
        </div>
    );
};

export default ProfilePage;
