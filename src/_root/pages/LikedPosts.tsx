import GridPostList from "@/components/shared/GridPostList";
import Loader from "@/components/shared/Loader";
import { useGetCurrentUser } from "@/lib/react-query/queriesAndMutations";

const LikedPosts = () => {
  const { data: currentUser } = useGetCurrentUser();

  if (!currentUser)
    return (
      <div className="flex-center w-full h-full">
        <Loader />
      </div>
    );

  return (
    <>
      {currentUser.liked.length === 0 && (
        <p className="text-light-4">No liked posts</p>
      )}
      <div className="explore-container">
      <h2 className="h3-bold md:h2-bold w-full">Liked Posts</h2>
       <GridPostList posts={currentUser.liked} showStats={false} />
      </div>
    </>
  );
};

export default LikedPosts;