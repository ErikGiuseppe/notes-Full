const Article = ({ title, text, tags, image, atl }) => {
  return (
    <div className="alura-card">
      <h3 className="text-xl text-alura-200 dark:text-gray-200 font-bold">
        {title}
      </h3>

      <span className="alura-tag">{tags}</span>

      <div className="grid gap-1">
        <p className="text-alura-200 dark:text-gray-400">{text}</p>
      </div>
    </div>
  );
};
export default Article;
