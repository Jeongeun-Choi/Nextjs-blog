import React from 'react';
import Link from 'next/link';

import classes from './post-item.module.css';
import Image from 'next/image';

const PostItem = ({ post }) => {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const imagePath = `/images/posts/${post.slug}`;

  return (
    <li className={classes.post}>
      <Link>
        <div className={classes.image}>
          <Image src={imagePath} alt={post.title} width={300} height={200} />
        </div>
        <div className={classes.content}>
          <h3>{post.title}</h3>
          <time>{formattedDate}</time>
          <p>{post.excerpt}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;
