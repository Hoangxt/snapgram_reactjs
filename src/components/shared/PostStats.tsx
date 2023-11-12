import {
  useDeleteSavedPost,
  useGetCurrentUser,
  useLikePost,
  useSavePost,
} from '@/lib/react-query/querisAndMutations';
import { checkIsLiked } from '@/lib/utils';
import { Models } from 'appwrite';
import { useEffect, useState } from 'react';

type PostStatsProps = {
  post?: Models.Document; // optional
  userId: string;
};

const PostStats = ({ post, userId }: PostStatsProps) => {
  const likesList = post?.likes.map((user: Models.Document) => user.$id);
  // state
  const [likes, setLikes] = useState(likesList);
  const [isSaved, setIsSaved] = useState(false);
  // Query
  const { mutate: likePost } = useLikePost();
  const { mutate: savePost } = useSavePost();
  const { mutate: deleteSavePost } = useDeleteSavedPost();
  // get user
  const { data: currentUser } = useGetCurrentUser();

  const savedPostRecord = currentUser?.save.find(
    (record: Models.Document) => record.post.$id === post?.$id
  ); // check if post is already saved

  // {saved: true} => !savedPostRecord => !false => true
  useEffect(() => {
    setIsSaved(!!savedPostRecord); // update isSaved state
  }, [currentUser]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleLikePost = (e: React.MouseEvent) => {
    e.stopPropagation(); // stop event bubbling

    let newLikes = [...likes]; // copy likes array

    const hasLiked = newLikes.includes(userId); // check if user has liked the post

    if (hasLiked) {
      newLikes = newLikes.filter((id) => id !== userId); // remove user from likes array
    } else {
      newLikes.push(userId); // add user to likes array
    }

    setLikes(newLikes); // update likes state
    likePost({ postId: post?.$id || '', likesArray: newLikes }); // call likePost mutation
  };

  const handleSavePost = (e: React.MouseEvent) => {
    e.stopPropagation(); // stop event bubbling

    if (savedPostRecord) {
      setIsSaved(false); // update isSaved state
      return deleteSavePost(savedPostRecord.$id); // call deleteSavePost mutation
    }
    savePost({ postId: post?.$id || '', userId }); // call savePost mutation
    setIsSaved(true); // update isSaved state
  };

  const containerStyles = location.pathname.startsWith('/profile')
    ? 'w-full'
    : '';

  return (
    <div
      className={`flex justify-between items-center z-20 ${containerStyles}`}
    >
      <div className='flex gap-2 mr-5'>
        <img
          src={`${
            checkIsLiked(likes, userId)
              ? '/assets/icons/liked.svg'
              : '/assets/icons/like.svg'
          }`}
          alt='like'
          width={20}
          height={20}
          onClick={(e) => handleLikePost(e)}
          className='cursor-pointer'
        />
        <p className='small-medium lg:base-medium'>{likes.length}</p>
      </div>

      <div className='flex gap-2'>
        <img
          src={isSaved ? '/assets/icons/saved.svg' : '/assets/icons/save.svg'}
          alt='share'
          width={20}
          height={20}
          className='cursor-pointer'
          onClick={(e) => handleSavePost(e)}
        />
      </div>
    </div>
  );
};

export default PostStats;
