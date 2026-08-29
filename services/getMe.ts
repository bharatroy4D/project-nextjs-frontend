"use server"
import { cookies } from "next/headers"

export const getMe = async () => {
    const cookieStor = await cookies();
    const accessToken = cookieStor.get("accessToken")?.value;
    if (!accessToken) {
        return {
            success: false,
            message: "User not login"
        }
    }
    const res = await fetch(`${process.env.BACKEND_API_URL}/api/users/me`, {
        headers: {
            cookie: `accessToken=${accessToken}`
        }
    })
    const result = res.json();
    console.log(result);
    return result;
}