import React from 'react'

const LineCount = (props: any) => {
  return (
    <p>There are currently <span className='font-semibold text-[#F15D2A]'>{props.lineOrder}</span> people ahead of you.</p>
  )
}

export default LineCount