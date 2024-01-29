import React from 'react'

const LinkReplacer  = ({ text }) => {
    // Regular expression to find links in the text
    const linkRegex = /(https:\/\/\S+)/g;
  
    // Replace links in the text with <a> tags
    const jsxElement = (
      <p>
        {text.replace(linkRegex, (match, link) => (
          <span key={link}>
            {text.indexOf(match) > 0 ? ' ' : ''}
            <a href={link} target="_blank" rel="noopener noreferrer">
              Click me
            </a>
          </span>
        ))}
      </p>
    );
  
    return <div>{jsxElement}</div>;
  };

export default LinkReplacer