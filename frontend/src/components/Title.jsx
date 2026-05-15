import React from 'react'

const Title = ({ title, subTitle, align, font }) => {
  return (
    <div className={`flex flex-col justify-center items-center text-center ${align === "left" &&
      "md:items-start md:text-left"}`}>
      <h2 className={`text-4xl md:text-[42px] leading-tight ${font || "font-playfair"}`}>
        <span className="relative">
          {title}
          <span className="absolute -bottom-2 left-0 w-16 h-1 rounded-full bg-gradient-to-r from-[#C8A24B] to-[#e8d48a]" />
        </span>
      </h2>
      <p className='mt-5 max-w-2xl text-sm text-slate-500 md:text-base leading-relaxed'>{subTitle}</p>
    </div>
  )
}

export default Title