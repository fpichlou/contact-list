import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContactList } from './redux/contacts/action';
import { selectContactList } from './redux/contacts/selector';
import { alphabets, groupBy, sortObjectArray } from './utils/global';
import Tabs from './components/Tabs';
import Tab from './components/Tab';
import ContactItem from './components/ContactItem';
import ContactCard from './components/ContactCard';
// import { ReactComponent as Logo } from './assets/images/logo.svg';
import './assets/styles/main.scss'
import './App.scss';

function App() {
  const dispatch = useDispatch();
  const list = useSelector(selectContactList);
  const alphabetsList = alphabets()
  const [contactList, setContactList] = useState();
  const [contactInfo, setContactInfo] = useState(null);
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  useEffect(() => {
    dispatch(getContactList({ size: 200 }))
  }, []);

  useEffect(() => {
    setContactList(sortObjectArray(groupBy(list, 'name.last[0]'), 'group'));
  }, [list])

  useEffect(() => {
    if (contactList?.length > 0) {
      const firstActiveGroup = (contactList?.find(group => group.data?.length > 0))?.group
      setActiveTabIndex(alphabetsList.indexOf(firstActiveGroup))
    }
  }, [contactList])

  const getGroupedContacts = (alphabet) => {
    const { data } = (contactList.filter(contact => contact.group === alphabet))[0] || {}
    return data
  }

  const displayContactInfo = (contact) => () => {
    setContactInfo(contact);
  }

  const hideContactInfo = () => {
    setContactInfo(null)
  }

  return (
    <div className="App">
      {contactList?.length > 0 && (
        <>
          <Tabs activeTabIndex={activeTabIndex}>
            {alphabetsList.map((alphabet) => {
              const groupedContact = getGroupedContacts(alphabet);
              const tabData = { 'title': alphabet, 'count': groupedContact?.length }
              return (
                <Tab data={tabData} key={alphabet} disabled={!groupedContact?.length}>
                  <div className='grid-container'>
                    <div className="grid-container__row">
                      {groupedContact?.map((contact) => {
                        return (
                          <div key={contact.login.username} className="grid-container__col-xs-1 grid-container__col-sm-1
                        grid-container__col-md-3 grid-container__col-lg-4">
                            <ContactItem data={contact} handleClick={displayContactInfo(contact)} />
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </Tab>
              )
            })}
          </Tabs>
          {contactInfo && <ContactCard data={contactInfo} onClose={hideContactInfo} />}
        </>
      )
      }
    </div>
  );
}

export default App;
