import React from 'react'

const Alert = ({type, text}) => {
  return (
    <div className='absolute top-10 left-0 right-0 flex justify-center items-center'>

        <div className={`${type === 'danger' ? 'bg-red-600' : 'bg-blue-600'} p-2 text-indigo-100 leading-none 
        lg:rounded-full flex lg:inline-flex`}
        role='alert'
        >
            <p className={`${type === 'danger' ? 'bg-red-400' : 'bg-blue-400'} flex rounded-full uppercase px-2 py-1 
            font-semibold mr-3 text-xs items-center`}>{type === 'danger' ? 'Failed' : 'Success'}</p>
            <p className='mr-2 text-left' style={{marginTop: '3px'}}>{text}</p>
        </div>


    </div>
  )
}

export default Alert