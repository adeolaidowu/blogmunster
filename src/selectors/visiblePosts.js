const getVisiblePosts = (posts, { startDate, endDate, text }) => {
  return posts
    .filter((post) => {
      const createdAt = post.createdAt;
      const startDateMatch = startDate ? createdAt >= startDate : true;
      const endDateMatch = endDate ? createdAt <= endDate : true;
      const textMatch = post.title.toLowerCase().includes(text.toLowerCase());
      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      return a.createdAt < b.createdAt ? 1 : -1;
    });
};

export default getVisiblePosts;
