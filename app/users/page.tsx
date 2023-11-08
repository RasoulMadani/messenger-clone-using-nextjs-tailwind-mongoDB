'use client';

import {signOut} from 'next-auth/react';
const Users = () => {
  return (
    <button onClick={()=>signOut()}>sign out</button>
  )
}

export default Users