'use client'
import { data } from "browserslist";
import { useSession } from "next-auth/react";
import { signIn, signOut } from 'next-auth/react'
import GoogleButton from "react-google-button";

export default function Home() {
  const session = useSession();
  console.log(session);
  const data = session.data;

  return session.status === 'authenticated' ?
    (<div>
      <img src={data.user.image} />
      <h1>{data.user.name}</h1>
      <h2>{data.user.email}</h2>
      <button onClick={() => signOut('google')}>Sign Out</button>
    </div>

    ) : (
      <GoogleButton onClick={() => signIn('google')} />
    )
}
