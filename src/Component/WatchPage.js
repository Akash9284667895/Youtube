import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';

const WatchPage = () => {
  const dispatch  = useDispatch();
  useEffect(()=>{
dispatch(closeMenu());
  })
  return (
    <div>
      <h1>WatchPage</h1>
    </div>
  )
}

export default WatchPage
