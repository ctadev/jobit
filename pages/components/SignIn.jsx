import { signIn, signOut, useSession } from 'next-auth/react'

const SignIn = () => {
    const { data: session } = useSession()

    if (session) {
        return (
            <img src={session?.user?.image ?? 'https://ionicframework.com/docs/img/demos/avatar.svg'} onClick={() => signOut()} className='w-9 h-9 rounded-full cursor-pointer' />
        )
    }
    return (
        <>
            <button onClick={() => signIn('google')} className={`text-[#0BAB7C] border-2 border-[#0BAB7C] rounded-xl py-1 px-2 font-bold cursor-pointer `}>Sign In</button>
        </>
    )
}

export default SignIn