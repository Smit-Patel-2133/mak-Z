import React from "react";
import BNBG from '../../assets/picture/Black_noBG.png';

const InputField = ({label, type = "text", name, id, placeholder}) => (
    <>
        <label htmlFor={id} className="sr-only">
            {label}
        </label>
        <input
            type={type}
            className="justify-center w-full px-3 py-2.5 mt-3 text-base leading-6 text-black whitespace-nowrap bg-white rounded-md border border-gray-300 border-solid"
            name={name}
            id={id}
            placeholder={placeholder}
            aria-label={label}
        />
    </>
);

const FormButton = ({children}) => (
    <button
        type="submit"
        className="justify-center items-center px-16 py-3.5 mt-3 text-base leading-6 text-center text-white whitespace-nowrap bg-sky-500 rounded-full max-md:px-5"
    >
        {children}
    </button>
);

const SignupForm = () => {
    const formInputs = [
        {label: "Name", type: "text", name: "name", id: "name", placeholder: "Name"},
        {label: "Email", type: "email", name: "email", id: "email", placeholder: "Email"},
        {label: "Password", type: "password", name: "password", id: "password", placeholder: "Password"},
        {
            label: "Confirm Password",
            type: "password",
            name: "confirmPassword",
            id: "confirmPassword",
            placeholder: "Confirm Password"
        },
    ];

    return (
        <div className="relative">
            <img
                loading="lazy"
                src={BNBG}
                alt="logo"
                className="max-w-full w-[100px] mt-10 ml-10 rounded-full absolute top-0 left-0"
            />
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <form
                    className="flex flex-col justify-center px-8 py-9 max-w-full bg-white rounded-lg shadow-sm w-[448px] max-md:px-5 max-md:mt-10"
                >
                    <div className="self-center text-2xl leading-8 text-center whitespace-nowrap text-neutral-900">
                        Sign up to Mak-Z
                    </div>
                    {formInputs.map((input) => (
                        <div key={input.id} className="mt-5">
                            <div className="text-gray-700">{input.label}</div>
                            <InputField {...input} />
                        </div>
                    ))}
                    <FormButton>Sign up</FormButton>
                    <div className="flex gap-3.5 self-center mt-4 text-center whitespace-nowrap">
                        <div className="grow text-gray-500">Already have an account?</div>
                        <a href="/login" className="text-sky-500">
                            Log in
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignupForm;
