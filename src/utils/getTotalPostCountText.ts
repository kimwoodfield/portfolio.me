/**
 * @description Gets the total number of posts as text
 * @param postCount number of posts
 * @returns a string with the total number of posts (e.g. '1 post', '2 posts', 'No posts')
 */
export const getTotalPostCountText = (postCount: number) => {
    if (!postCount || typeof postCount !== 'number' || postCount < 0) {
        return 'No posts'
    };

    if (postCount === 1) {
        return '1 post'
    };

    return `${postCount} posts`;
}