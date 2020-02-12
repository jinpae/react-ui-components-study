import React, { useContext, useState, useEffect, useRef } from 'react';
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

const Accordion = ({ children, onChange }) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [headers, setHeaders] = useState([]);
  const [panels, setPanels] = useState([]);

  const handleClick = index => {
    setSelectedIndex(index);
    onChange(index);
  };

  return (
    <AccordionContext.Provider
      value={{
        selectedIndex,
        onClick: handleClick,
        headers,
        setHeaders,
        panels,
        setPanels
      }}
    >
      <div className="accordion">{children}</div>
    </AccordionContext.Provider>
  );
};

const Item = ({ children }) => {
  return <div className="accordion-item">{children}</div>;
};

const Header = ({ children }) => {
  const ref = useRef();
  const { headers, setHeaders, onClick } = useContext(AccordionContext);
  const index = headers.findIndex(header => header === ref.current);

  useEffect(() => {
    setHeaders(headers => headers.concat(ref.current));

    return () => {
      setHeaders(headers => headers.filter(header => header !== ref.current));
    };
  }, []);

  return (
    <button
      ref={ref}
      className="accordion-header"
      onClick={() => onClick(index)}
    >
      {children}
    </button>
  );
};

const Panel = ({ children }) => {
  const ref = useRef();
  const { selectedIndex, panels, setPanels } = useContext(AccordionContext);
  const index = panels.findIndex(panel => panel === ref.current);

  useEffect(() => {
    setPanels(panels => panels.concat(ref.current));

    return () => setPanels(panel => panels.filter(panel !== ref.current));
  }, []);

  return (
    <div
      ref={ref}
      className="accordion-contents"
      hidden={index !== selectedIndex}
    >
      {children}
    </div>
  );
};

Accordion.Item = Item;
Accordion.Header = Header;
Accordion.Panel = Panel;

export default Accordion;
