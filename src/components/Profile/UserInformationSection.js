import { useState } from 'react';
import { User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Cards';



const UserInformationSection = ({ isEditing, user}) => {

        const [userInfo, setUserInfo] = useState({
            name: user && user.name,
            email: user && user.email,
            phone: user && user.phone,
            preferences: 'Organic produce, Dairy-free',
        });
    
        const handleChange = (e) => {
            const { name, value } = e.target;
            setUserInfo((prev) => ({
                ...prev,
                [name]: value,
            }));
        };


    return (
        <Card
            className={`w-full transform transition-all duration-500 ${
                isEditing ? 'scale-102 shadow-lg rotate-1' : ''
            }`}
        >
            <CardHeader
                className={`transition-colors duration-300 ${
                    isEditing ? 'bg-blue-50' : ''
                }`}
            >
                <CardTitle className="flex items-center gap-2">
                    <User
                        className={`w-5 h-5 transition-transform duration-500 ${
                            isEditing ? 'rotate-180' : ''
                        }`}
                    />
                    Personal Information
                </CardTitle>
            </CardHeader>
            <CardContent
                className={`transition-all duration-500 ${
                    isEditing ? 'bg-blue-50/50' : ''
                }`}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(userInfo).map(([key, value], index) => (
                        <div
                            key={key}
                            className={`space-y-2 transition-all duration-300 ${
                                key === 'preferences' ? 'md:col-span-2' : ''
                            } ${isEditing ? 'transform translate-y-1' : ''}`}
                            style={{
                                transitionDelay: `${index * 50}ms`,
                            }}
                        >
                            <label className="block text-sm font-medium text-gray-700 capitalize">
                                {key.replace('_', ' ')}
                            </label>
                            {isEditing ? (
                                key === 'preferences' ? (
                                    <textarea
                                        name={key}
                                        value={value}
                                        onChange={handleChange}
                                        className="w-full p-2 border rounded-lg transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        rows={2}
                                    />
                                ) : (
                                    <input
                                        type={
                                            key === 'email' ? 'email' : 'text'
                                        }
                                        name={key}
                                        value={value}
                                        onChange={handleChange}
                                        className="w-full p-2 border rounded-lg transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                )
                            ) : (
                                <p className="p-2">{value}</p>
                            )}
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};
export default UserInformationSection;
