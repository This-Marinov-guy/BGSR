import React from 'react'

const LinkReplacer  = ({ text }) => {
    // Regular expression to find links in the text
    const linkRegex = /(https:\/\/\S+)/g;
  
    // Replace links in the text with <a> tags
    const jsxElement = (
      <p>
        {text.split(linkRegex).map((part, index) => (
          linkRegex.test(part) ? (
            <a key={index} href={part} target="_blank" rel="noopener noreferrer">
              Click me
            </a>
          ) : (
            <span key={index}>{part}</span>
          )
        ))}
      </p>
    );
  
    return <div>{jsxElement}</div>;
  };

export default LinkReplacer