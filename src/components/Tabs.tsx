import { ReactNode, useEffect, useState } from 'react'

import tokenGenerator from '../utils/tokenGenerator';

type TabsProps = {
  customClass?: string;
  tabs: {
    id: string;
    title: string;
    content: ReactNode
  }[]
}

const Tabs = ({ customClass, tabs }: TabsProps) => {
  const [selectedTab, setSelectedTab] = useState<string>('')

  useEffect(() => {
    setSelectedTab(tabs[0]?.id)
  }, [tabs])

  return (
    <div className={`w-full ${customClass}`}>
      <ul className={`none-scrollbar border-b border-solid border-jv-light w-full h-12 flex items-center overflow-x-auto`}>
        {
          tabs.length ? tabs.map(tab => (
            <li
              key={tokenGenerator()}
              className={`border-b border-solid min-w-max h-full flex items-center px-6 ${tab.id === selectedTab ? 'border-jv-primary text-jv-primary' : 'border-transparent'} rounded-t-md cursor-pointer hover:text-jv-primary active:bg-slate-50`}
              onClick={() => setSelectedTab(tab.id)}
            >
              {tab.title}
            </li>
          )) : (
            <li className={`px-3`}>آیتمی وجود ندارد</li>
          )
        }
      </ul>
      {
        tabs.length ? tabs.map(tab => {
          if (tab.id === selectedTab) {
            return (
              <div
                key={tokenGenerator()}
                className={`w-full pt-6`}
              >
                {tab.content}
              </div>
            )
          }
        }) : <div className={`p-3`}>محتوایی وجود ندارد</div>
      }
    </div>
  )
}

export default Tabs