"use client"

import { Card } from "@/components/ui/card";
import { loginAction } from "../_actions/authActions";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const LoginForm = () => {
    const [state, action, pending] = useActionState(loginAction, false)
    const router = useRouter();
    
    useEffect(() => {
        if (!state) return;
        if (state.success) {
            toast.success(state.message || "Login Successfull");
            router.push("/dashboard")
        }
        if (!state.success) {
            toast.error(state.message || "Login failed")
        }
    }, [state, router])
    return (
        <form action={action} className="space-y-4">
            <Card className=" flex  flex-col p-5 border  space-y-4">
                <input name="email" type="email" placeholder="Enter your Email" required className="p-2 bg-gray-100 rounded-lg " />
                <input name="password" type="password" placeholder="Enter your password" required className="p-2 bg-gray-100 rounded-lg " />
                <button type="submit" className="p-2 bg-red-500 text-white rounded-lg ">
                    {
                        pending ? "Submiting....." : "Login"
                    }
                </button>
            </Card>
        </form>
    );
};

export default LoginForm;