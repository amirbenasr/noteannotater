"use client";
import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react';

function AuthButton() {
    const { data: session } = useSession();
    if (session) {
        return (
            <div>
                {session?.user?.name}
                <button onClick={() => signOut()}>Logout</button>
            </div>

        );
    }
    else {
        return (
            <div>

                Not signed in <br />
                <button onClick={() => signIn()}>Signin</button>
            </div>

        )
    }
}

function NavMenu() {
    return (
        <div className='flex items-center justify-between w-64 '>
            <div>NoteKeeper</div>
            <AuthButton />
        </div>
    )
}

export default NavMenu