import { getServerSession } from "next-auth";
import LoginForm from "./form";
import { redirect } from "next/navigation";

export default async function page() {
    const session = await getServerSession()
    if(session?.user){
        return redirect('/')
    }
    return (
        <LoginForm />
    )
}