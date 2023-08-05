import React from 'react'
import Header from '@/components/FileExplorer/Header'
import Explorer from '@/components/FileExplorer/Explorer'
import data from '@/constants/dummy.json'

function FileExp() {
  return (
    <div className='bg-gray-800 h-screen'>
        <Header />
     <Explorer data={data}/>
    </div>
  )
}

export default FileExp