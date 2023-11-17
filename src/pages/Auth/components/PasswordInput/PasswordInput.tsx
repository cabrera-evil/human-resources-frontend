import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

interface PasswordProps {
    isConfirmation?: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function PasswordInput(props: PasswordProps) {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="relative">
            <input
                required
                type={showPassword ? 'text' : 'password'}
                id={props.isConfirmation ? 'passwordConfirmation' : 'password'}
                name={props.isConfirmation ? 'passwordConfirmation' : 'password'}
                className="w-full p-2 mt-1 border rounded-md focus:border-tertiary-500 focus:outline-none"
                placeholder="************"
                onChange={props.onChange}
            />
            <button
                type="button"
                className="absolute p-2 mt-1 top-1/2 right-2 transform -translate-y-1/2 focus:outline-none"
                onClick={toggleShowPassword}
            >
                {showPassword ? <FaEyeSlash style={{ position: 'relative', top: '-1px' }} /> : <FaEye style={{ position: 'relative', top: '-1px' }} />}
            </button>
        </div>
    );
}
