import React, {useCallback} from "react";
import classNames from "classnames";
import './TabTitle.scss';

const TabTitle = (props)=> {
    const { data,setSelectedTab, index, disabled, actived = false } = props
    const onClick = useCallback(() => {
        setSelectedTab(index)
      }, [setSelectedTab, index])
    const tabClasses = classNames('tab__title', {
        'tab__title--active':actived,
        'tab__title--disabled':disabled
    })  
    
      return (
        <li className={tabClasses} data-selected={actived} disabled={disabled}>
          <button className="btn--transparent" onClick={onClick} disabled={disabled}>{data?.title}</button>
          <span>{data?.count || 0}</span>
        </li>
      )}

export default React.memo(TabTitle);

