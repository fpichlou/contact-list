import React, {useEffect, useState} from "react";
import TabTitle from "../TabTitle";
import './Tabs.scss';

const Tabs = (props)=> {
    const {children, activeTabIndex=0} = props
    const [selectedTab, setSelectedTab] = useState(activeTabIndex)
    useEffect(()=> {
        setSelectedTab(activeTabIndex)
    }, [activeTabIndex])

    return (
      <div className="tabs__container">
        <ul className="tabs" data-selected-index={selectedTab}>
          {children.map((tab, index) => (
            <TabTitle
              key={index}
              title={tab.props.title}
              disabled={tab.props.disabled}
              data={tab.props.data}
              index={index}
              actived={selectedTab===index}
              setSelectedTab={setSelectedTab}
            />
          ))}
        </ul>
        <div className="tabs__panel" data-tab-index={selectedTab}>
          {children[selectedTab]?.props.children}
        </div>
      </div>
    )}

export default Tabs;

