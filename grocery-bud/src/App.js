import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () => { //this fnction takes the list from 'setItem' in the 'useEffect'.
  let list = localStorage.getItem('list');
  if (list) {
    return (list = JSON.parse(localStorage.getItem('list'))
    );
  }
  else {                    
    return [];
  }
}

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage()); //we are calling getLocalStorage fn so that we are able to retain the list in order to not lose the data after refreshing.
  const [isediting, setisediting] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setalert] = useState({ show: false, msg: '', type: '' });

  const handleSubmit = (e) => { //takes care of alert.
    e.preventDefault();
    console.log('hello');
    if (!name) {
      showAlert(true,'danger','please enter value');           
    } else if (name && isediting) { //complicated. it will return the item of the list with new title that was set in the 'ediitem' fn.
      setList(
        list.map((item) => {
          if (item.id == editID) {
            return { ...item,title:name }
          }
          return item;
        })
      )
      setName('');
      setEditID(null);
      setisediting(false);
      showAlert(true,'success','value changed');
    }
    else {
      showAlert(true,'success','item added to the list');
      const newItem = { id: new Date().getTime().toString(), title: name }
      setList([...list, newItem]);
      setName('');           
    }
  }

  const showAlert = (show = false, type ='',msg='') => {
    setalert({ show, type, msg } );
  }
  const clearlist = () => { //will clear all the data in the lsit
    showAlert(true, 'danger', 'empty list');
    setList([]);
  }
  const removeitem = (id) => { //if we are removing any particular item from the list, we definitely need an id for every item
    showAlert(true, 'danger', 'item removed')
    setList(list.filter((item) => item.id !== id))
    setName('');
  }
  const edititem = (id) => { //it will edit the title of any particular element of our list 
    const specificitem = list.find((item) => item.id == id);
    setisediting(true);
    setEditID(id);
    setName(specificitem.title); //with this we will edit the name.why title?
  }
  useEffect(() => {
    localStorage.setItem('list',JSON.stringify(list))
  },[list])
  
  return (                    
    <section className='section-center'>
      <form className='grocery=form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={ list}/>}
        <h3>Grocery bud</h3>  
        <div className='form-control'>
          <input type="text" className='grocery' placeholder='e.g eggs'
            value={name} onChange={ (e)=>setName(e.target.value)}/>
          <button type='submit' className='submit-btn'>
              {isediting ? 'edit':'submit'}
          </button>         
        </div>
      </form>
      <div className='grocery-container'>
        <List items={list} removeitem={removeitem} edititem={ edititem}/> {/*'List' just display what is written below the input tab*/}
        <button className='clear-btn' onClick={clearlist}>clear-items</button>
      </div>
     
    </section>
  )
}

export default App
