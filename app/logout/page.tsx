"use client";
import React, { useEffect } from 'react';
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Page = () => {
    const router = useRouter();

    useEffect(() => {
        const handleSignOut = async () => {
            await signOut({ redirect: false }); // Avoid default redirect
            router.push('/dashboard');
        };
        handleSignOut();
    }, [router]);

    return (
        <div></div>
    );
};

export default Page;
