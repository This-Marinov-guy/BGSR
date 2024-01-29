import React from 'react'

const LinkReplacer = ({ text }) => {
    // Regular expression to find links in the text
    const linkRegex = /(https:\/\/\S+)/g;
  
    // Replace links in the text with <a> tags
    const jsxElement = text.replace(linkRegex, (link) => (
      <a key={link} href={link} target="_blank" rel="link">
        click me!
      </a>
    ));
  
    return <div>{jsxElement}</div>;
  };

export default LinkReplacer