import React from 'react'

interface ChildProps {
          heading: string
}

export const Heading: React.FC<ChildProps> = ({heading}) => {
  return (
    <div className="text-center my-8">
          <h1 className="text-4xl font-bold">{heading}</h1>
    </div>
  )
}
