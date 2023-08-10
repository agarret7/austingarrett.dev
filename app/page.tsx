import React from "react";  
import Image from 'next/image';

import MarkdownRender from '@/utils/markdown';
import { getFile } from '@/utils/loading';


const PROFILE_PIC_URL = "https://austingarrett-web.s3.amazonaws.com/austin_garrett_629fb1bc7c.jpg";
const BIO_PATH = './public/bio.md';

const Home = async () => {
  let bio = await getFile(BIO_PATH);
  return (
    <div>
      <center><Image src={PROFILE_PIC_URL} alt="" width="250" height="250" className="image-cropper"/></center>
      <h1 className="text-center text-4xl font-sans mt-16">About Me</h1>
      <div className="flex justify-center">
        <div className="prose grid grid-cols-1 my-10
          sm:max-w-screen-sm
          md:max-w-screen-md
          lg:max-w-screen-lg
          xl:max-w-screen-xl
        ">
          <hr />
          <MarkdownRender>
            {bio}
          </MarkdownRender>
        </div>
      </div>
    </div>
  );
};

export default Home;
