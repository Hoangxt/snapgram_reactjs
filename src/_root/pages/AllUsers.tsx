import { Loader, UserCard } from '@/components/shared';

import { useGetUsers } from '@/lib/react-query/querisAndMutations';

const AllUsers = () => {
  const {
    data: creators,
    isPending: isUserLoading,
    isError: isErrorCreators,
  } = useGetUsers(10);

  if (isErrorCreators) {
    return (
      <div className='flex flex-1'>
        <div className='home-container'>
          <p className='body-medium text-light-1'>Something bad happened</p>
        </div>
        <div className='home-creators'>
          <p className='body-medium text-light-1'>Something bad happened</p>
        </div>
      </div>
    );
  }

  return (
    <div className='common-container'>
      <div className='user-container'>
        <h2 className='h3-bold md:h2-bold text-left w-full'>All Users</h2>
        {isUserLoading && !creators ? (
          <Loader />
        ) : (
          <ul className='user-grid'>
            {creators?.documents.map((creator) => (
              <li key={creator?.$id} className='flex-1 min-w-[200px] w-full  '>
                <UserCard user={creator} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AllUsers;
