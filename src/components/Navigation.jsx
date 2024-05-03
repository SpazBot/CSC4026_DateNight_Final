import React from 'react'
import { BsGithub, BsTwitter } from 'react-icons/bs'

export const Navigation = () => {
  return (
    <div className="border-b bg-slate-100">
      <nav className="container flex justify-between items-center">
        <div className="flex items-center gap-4 text-lg">
          <a href="https://github.com/SpazBot/CSC4026_DateNight_Final" target="_blank">
            <BsGithub />
          </a>
        </div>
      </nav>
    </div>
  )
}