import React from 'react';

/*
 * <Accordion>
 *   <Accordion.Item>
 *     <Accordion.Header>
 *       Accordion toggle header 1
 *     </Accordion.Header>
 *     <Accordion.Contents>
 *       Accordion content for header 1
 *     </Accordion.Contents>
 *   </Accordion.Item>
 *   <Accordion.Item>
 *     <Accordion.Header>
 *       Accordion toggle header 2
 *     </Accordion.Header>
 *     <Accordion.Contents>
 *       Accordion content for header 2
 *     </Accordion.Contents>
 *   </Accordion.Item>
 * </Accordion>
 */

const Accordion = ({ children }) => {
  return <div className="accordion">{children}</div>;
};

const Item = ({ children }) => {
  return <div className="accordion-item">{children}</div>;
};

const Header = ({ children }) => {
  return <button className="accordion-header">{children}</button>;
};

const Contents = ({ children }) => {
  return <div className="accordion-contents">{children}</div>;
};

Accordion.Item = Item;
Accordion.Header = Header;
Accordion.Contents = Contents;

export default Accordion;
