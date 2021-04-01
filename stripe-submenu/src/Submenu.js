import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const { isSubmenuopen, location, page:{page,links}, } = useGlobalContext()
  const container = useRef(null)
  useEffect(() => {
    const submenu = container.current;
    const { center, bottom } = location
    submenu.style.left = `${center}px`
    submenu.style.top=`${bottom}px`
  },[location])
  return (
    <aside className={`${isSubmenuopen ? 'submenu show' : 'submenu'}`} ref={container}>
      <section>
        <h4>{ page}</h4>
      </section>
    </aside>
  )
}                                

export default Submenu
