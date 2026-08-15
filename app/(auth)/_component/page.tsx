"use client"

import { Card } from "@/components/ui/card";

const LoginForm = () => {
    return (
        <form className="space-y-4">
            <Card className=" flex  flex-col p-5 border  space-y-4">
                <input name="email" type="email" placeholder="Enter your Email" required className="p-2 bg-gray-100 rounded-lg " />
                <input name="password" type="password" placeholder="Enter your password" required className="p-2 bg-gray-100 rounded-lg " />
                <button type="submit" className="p-2 bg-red-500 text-white rounded-lg ">Login</button>
            </Card>
        </form>
    );
};

export default LoginForm;