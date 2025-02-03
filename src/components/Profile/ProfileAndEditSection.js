import { Edit2, Save, X } from "lucide-react";

const ProfileAndEditSection = ({ isEditing, setIsEditing, user}) => {

        const handleEdit = () => {
            setIsEditing(true);
        };

        const handleSave = () => {
            setIsEditing(false);
            // Here you would typically make an API call to update the user info
        };

        const handleCancel = () => {
            setIsEditing(false);
            // Reset any changes made
        };

    return (
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-center sm:text-left w-full">
                Welcome Back !🎉 {user && user.name}
            </h1>
            <div className="w-full sm:w-auto flex justify-center sm:justify-end">
                {!isEditing ? (
                    <button
                        onClick={handleEdit}
                        className="flex items-center gap-2 p-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition-all duration-300 hover:scale-105"
                    >
                        <Edit2 className="w-3 h-3" />
                        Edit Profile
                    </button>
                ) : (
                    <div className="flex gap-2">
                        <button
                            onClick={handleSave}
                            className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300 hover:scale-105"
                        >
                            <Save className="w-4 h-4" />
                            Save
                        </button>
                        <button
                            onClick={handleCancel}
                            className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-all duration-300 hover:scale-105"
                        >
                            <X className="w-4 h-4" />
                            Cancel
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProfileAndEditSection