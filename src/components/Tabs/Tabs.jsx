import React, {useEffect, useState} from "react";
import Tab from "../Tab/Tab";
import './Tabs.scss';

const Tabs = (props)=> {
    const {children, activeTabIndex=0} = props
    const [selectedTab, setSelectedTab] = useState(activeTabIndex)
    useEffect(()=> {
        setSelectedTab(activeTabIndex)
    }, [activeTabIndex])

    return (
      <div className="tabs__container">
        <ul className="tabs">
          {children.map((item, index) => (
            <Tab
              key={index}
              title={item.props.title}
              disabled={item.props.disabled}
              data={item.props.data}
              index={index}
              actived={selectedTab===index}
              setSelectedTab={setSelectedTab}
            />
          ))}
        </ul>
        <div className="tabs__panel">
          {children[selectedTab].props.children}
        </div>
      </div>
    )}

export default Tabs;

