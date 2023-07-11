import React, { useState, useEffect } from "react";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { fetchAnimeWatchedCount } from '../utils/getAnilistAnimeCount';

type Props = {
    children: React.ReactNode
    href?: string;
}

export type LinkProps = {
    children: React.ReactNode
    href?: string;
    additionalStyles?: string;
}

const date = new Date().toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
})

export const Bio = (): React.JSX.Element => {
  return (
    <section className="flex justify-center flex-col md:flex-row gap-6">
        <Text />
        <Image />
    </section>
  );
};

const Text = () => {
  const [animeCount, setAnimeCount] = useState(0);

  useEffect(() => {
    fetchAnimeWatchedCount().then(data => {
      setAnimeCount(data)
    })
  }, [])

  return (
    <div className='max-w-8xl'>
      <HeaderText />
      <BodyText>
        <Paragraph>
          I love expressing myself and my ideas through code. I'm addicted to
          the feeling of solving bugs, even if they're ones I made myself.
        </Paragraph>
        <Paragraph>
          When I'm not working full-time as a Software Engineer, I'm studying a
          Bachelor of Information Technology (Computer Science). I also enjoy
          design and going to the gym when I have time.
        </Paragraph>
        <Paragraph>
          As of <span className='text-gray-500'>{date}</span> I have watched{" "}
          <Link
            href="https://anilist.co/user/zeerohh/"
            additionalStyles="text-sky-300"
          >
            {animeCount} anime
          </Link>
        </Paragraph>
        <Socials>
          <Link 
            href="https://github.com/kimwoodfield" 
            additionalStyles="text-3xl text-gray-400 hover:text-gray-600 cursor-pointer"
          >
            <AiOutlineGithub />
          </Link>
          <Link 
            href="https://www.linkedin.com/in/kim-woodfield/" 
            additionalStyles='text-3xl text-gray-400 hover:text-gray-600 cursor-pointer ml-4'
          >
            <AiFillLinkedin />
          </Link>
        </Socials>
      </BodyText>
    </div>
  );
};

const Image = () => {
  return (
    <div className='md:w-96 md:h-96 md:flex md:justify-end'>
      <img
        src="/me.png"
        alt="My image"
        className="rounded-md w-72 h-72 min-w-72 min-h-72"
      />
    </div>
  );
};

const HeaderText = () => {
    return <h1 className="m-0 font-bold text-4xl lg:text-7xl">Hi, I'm Kim.</h1>;
}

const BodyText = ({ children }: Props) => {
    return <div className='mt-5 max-w-2xl'>{children}</div>
}

const Paragraph = ({ children }: Props) => {
    return <p className='mt-4 text-lg lg:text-xl'>{children}</p>
}

const Link = ({ children, href, additionalStyles }: LinkProps) => {
  return (
    <a 
      href={href} 
      className={`${additionalStyles}`}
      target="_blank"
    >
      {children}
    </a>
  )
}

const Socials = ({ children }: Props) => {
  return <div className='flex mt-5'>{children}</div>
}