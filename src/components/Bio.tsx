import React from "react";

type Props = {
    children: React.ReactNode
}

export const Bio = (): React.JSX.Element => {
  return (
    <section className="flex justify-center flex-col md:flex-row gap-6">
        <Text />
        <Image />
    </section>
  );
};

const Text = () => {
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
        <Paragraph>As of July 8th, 2023 I have watched 1 anime</Paragraph>
      </BodyText>
    </div>
  );
};

const Image = () => {
  return (
    <div className='md:w-96 md:flex md:justify-end'>
      <img
        src="/me.png"
        alt="My image"
        className="rounded-md w-72 min-w-72"
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