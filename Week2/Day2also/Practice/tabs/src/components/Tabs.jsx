import React from 'react';

const Tabs = (props) => {
    const { allTabs, setCurrentTabIndex } = props;



    const setSelectedTab = (index) => {
    setCurrentTabIndex(index);
    }

    return (
    <div style={{ margin: "auto", width: "85%", textAlign: "left"}}>
        {
        allTabs.map((item, index) => (
            <div onClick={(e) => setSelectedTab(index) }>
            { item.label }
            </div>
        ))
        }
    </div>
    )
}

export default Tabs;