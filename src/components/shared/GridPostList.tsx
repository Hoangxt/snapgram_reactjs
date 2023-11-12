import { useUserContext } from '@/context/AuthContext';
import { Models } from 'appwrite';
import { Link } from 'react-router-dom';
import { PostStats } from '.';

type GridPostListProps = {
  posts: Models.Document;
  showUser?: boolean;
  showStarts?: boolean;
};
const GridPostList = ({
  posts,
  showUser = true,
  showStarts = true,
}: GridPostListProps) => {
  const { user } = useUserContext();
  return (
    <ul className='grid-container'>
      {posts.map((post) => (
        <li key={post.$id} className='relative min-w-80 h-80'>
          <Link to={`/posts/${post.$id}`} className='post-post_link'>
            <img
              src={post.imageUrl}
              alt='postImg'
              className='h-full w-full object-cover'
            />
          </Link>

          <div className='grid-post_user'>
            {showUser && (
              <div className='flex flex-1 items-center gap-2 justify-start'>
                <img
                  src={post.creator.imageUrl}
                  alt='creatorImg'
                  className='h-8 w-8 rounded-full'
                />
                <p className='line-clamp-1'>{post.creator.name}</p>
              </div>
            )}
            {showStarts && <PostStats post={post} userId={user.id} />}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default GridPostList;
