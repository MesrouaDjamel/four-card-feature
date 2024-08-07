import React from 'react'

const Container = ({children}:{children: React.ReactNode}) => {
  return (
    <div className="flex flex-col items-center gap-16 mx-[32px] my-[78px] lg:mx-[104px] lg:my-[80px]">
      {children}
    </div>
  );
}

export default Container