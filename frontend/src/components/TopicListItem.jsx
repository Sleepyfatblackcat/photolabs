import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({slug, title, getPhotosByTopic}) => {
  return (
    <div className="topic-list__item" data-slug={slug}>
      <span onClick={getPhotosByTopic}>{title}</span>
    </div>
  );
};

export default TopicListItem;
