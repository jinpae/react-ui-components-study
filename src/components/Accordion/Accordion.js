import React, { useContext, useState } from 'react';
import AccordionContext from '../../contexts/AccordionContext';

/*
 * <Accordion>
 *   <Accordion.Item>
 *     <Accordion.Header>
 *       Accordion toggle header 1
 *     </Accordion.Header>
 *     <Accordion.Panel>
 *       Accordion content for header 1
 *     </Accordion.Panel>
 *   </Accordion.Item>
 *   <Accordion.Item>
 *     <Accordion.Header>
 *       Accordion toggle header 2
 *     </Accordion.Header>
 *     <Accordion.Panel>
 *       Accordion content for header 2
 *     </Accordion.Panel>
 *   </Accordion.Item>
 * </Accordion>
 */

const Accordion = ({ children }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return <div className="accordion">{children}</div>;
};

const Item = ({ children }) => {
  return <div className="accordion-item">{children}</div>;
};

const Header = ({ children }) => {
  return <button className="accordion-header">{children}</button>;
};

const Panel = ({ children }) => {
  const { show } = useContext(AccordionContext);

  return show && <div className="accordion-contents">{children}</div>;
};

Accordion.Item = Item;
Accordion.Header = Header;
Accordion.Panel = Panel;

export default Accordion;
