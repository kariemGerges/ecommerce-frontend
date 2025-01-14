// Sign In Form Component

import { Mail, Lock } from 'lucide-react';
const SignInForm = () => (
    <form className="space-y-6">
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
            </label>
            <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                    type="email"
                    className="pl-10 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your email"
                />
            </div>
        </div>
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
            </label>
            <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                    type="password"
                    className="pl-10 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your password"
                />
            </div>
        </div>
        <button
            type="submit"
            className="w-full bg-[#2D7A46] hover:dark:bg-[#1B4332] text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
            Sign In
        </button>
    </form>
);

export default SignInForm;