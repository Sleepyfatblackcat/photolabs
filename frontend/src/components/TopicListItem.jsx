import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({slug, title}) => {
  return (
    <div className="topic-list__item" data={slug}>
      <span>{title}</span>
    </div>
  );
};

export default TopicListItem;
