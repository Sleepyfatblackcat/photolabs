import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({topics}) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((item) => (
        <div key={item.id}>
          <TopicListItem
            slug={item.slug}
            title={item.title}  
          />
        </div>
      ))}
    </div>
  );
};

export default TopicList;
