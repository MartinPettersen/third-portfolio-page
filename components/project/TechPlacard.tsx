import React, { ReactNode }  from 'react'

type Props = {
  children: ReactNode;

}

const TechPlacard = ({children}: Props) => {
  return (
    <div className="bg-[#62A0EA] text-white text-lg w-[120px] h-[32px] flex items-center justify-center rounded-md  border-2 m-3">
        {children}
    </div>
  )
}

export default TechPlacard