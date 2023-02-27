import React from 'react';
import Image from 'next/image';
import classes from './hero.module.css';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/1516799552217.jpg"
          alt="최정은 얼굴"
          width={300}
          height={300}
        />
      </div>
      <h1>안녕하세요. 최정은입니다.</h1>
      <p>프론트엔드 개발자입니다. 열심히 공부를 하려고 노력중입니다.</p>
    </section>
  );
};

export default Hero;
