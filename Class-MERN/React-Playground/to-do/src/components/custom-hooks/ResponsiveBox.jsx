import React from 'react'
import { useWindowWidth } from '../../hooks/useWindowWidth'

const ResponsiveBox = () => {
    const width=useWindowWidth();
    const bgColor=width > 600 ? "bg-green-200" : "bg-red-200";
  return (
    <div  className={`w-4/5 h-[100px] ${bgColor}`}> window width {width}</div>
  )
}

export default ResponsiveBox;