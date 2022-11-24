const wordsPerMinute = 200;

export default function readingTime(post) {
  if (!post) return;
  const removeTags = post.replace(/<\/?[^>]+(>|$)/g, '');
  const wordsTotal = removeTags.split(/\s/g).length;
  const time = Math.ceil(wordsTotal / wordsPerMinute);
  return time < 2 ? `${time} minute to read` : `${time} minutes to read`;
}
