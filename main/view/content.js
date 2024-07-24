const getContentElement = (content) => {
  const { title, subtitle, createdTime, editor, thumbnailConfig, key } =
    content;

  return `<li>
  <a href="/article/${key}" class="content">
    <div class="summary">
      <span class="title">${title}</span>
      <span class="description">${subtitle}</span>
      <span class="date">${createdTime} · ${editor.name}</span>
    </div>
    <div class="thumbnail-cover">
      <img class="thumbnail" src="${thumbnailConfig.imageUrl}" />
    </div>
  </a>
</li>`;
};

export default ({ contents }) => {
  const newContent = document.querySelector(".contents-list").cloneNode(true);
  const contentElements = contents.map(getContentElement).join("");
  newContent.innerHTML = contentElements;
  return newContent;
};
