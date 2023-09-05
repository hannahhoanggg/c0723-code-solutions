import { useState } from 'react';

export default function Accordion({ topics }) {
  const [clickOpen, setClickOpen] = useState();

  function handleToggle(topic) {
    setClickOpen(topic === clickOpen ? undefined : topic);
  }

  return (
    <div>
      {topics.map((topic) => (
        <Topic
          key={topic.id}
          topic={topic}
          isOpen={topic === clickOpen}
          onTopicClick={() => handleToggle(topic)}
        />
      ))}
    </div>
  );
}

function Topic({ topic, isOpen, onTopicClick }) {
  return (
    <div>
      <button onClick={onTopicClick}>{topic.title}</button>
      {isOpen && <p>{topic.content}</p>}
    </div>
  );
}
