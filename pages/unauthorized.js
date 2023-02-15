import {useRouter} from 'next/router';
import React from 'react';
import Layout from '../components/Layout';

export default function Unauthorized() {
  const router = useRouter();
  const {message} = router.query;

  return (
    <Layout title="Unauthorized Page">
      <div className=" w-[]50% p-5 bg-[#ffffff] rounded-lg  shadow-sm m-4 ">
        <h1 className="text-xl">Access Denied</h1>
        {message && <div className="mb-4 text-[red] ">{message}</div>}
      </div>
    </Layout>
  );
}
