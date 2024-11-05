import React from 'react';
import PostHeader from './PostHeader';
import FeedPosts from './FeedPosts'; // Assuming this is used elsewhere
import PostFooter from './PostFooter';
import owl from './image/owl.jpg';

const FeedPost = () => {
  const Data = [
    {
      owl: <img src={owl} alt="Owl" className="w-full h-auto rounded-lg" />,
    },
  ];

  return (
    <>
    
    <div className="max-w-2xl mx-auto p-4 mt-16">
        <PostHeader />
    </div>
     
      <div className="max-w-2xl mx-auto p-4"> {/* Container with max width and padding */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden"> {/* Card style */}
          <div className="p-4"> {/* Padding around image */}
            {Data[0].owl} {/* Rendering the image */}
          </div>
          <PostFooter /> {/* Assuming this has its own styling */}
        </div>
      </div>
    </>
  );
};

export default FeedPost;
