import React from 'react';

const Profile = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white items-center p-8 rounded-lg shadow-lg max-w-sm w-full">
                <h2 className="text-2xl font-bold text-center mb-6">User Profile</h2>
                <img className='h-5 w-5 object-cover rounded-md ' src="" alt="avtar" />
                <div className="mb-4 ">
                    <span className="block text-gray-700 text-sm font-bold mb-1">Name : ak</span>
                </div>

                <div className="mb-4">
                    <span className="block text-gray-700 text-sm font-bold mb-1">Email : ak@gmail.com</span>
                </div>

                <div className="mb-4">
                    <span className="block text-gray-700 text-sm font-bold mb-1">Role : Student</span>
                </div>

            </div>
        </div>
    );
};

export default Profile;
