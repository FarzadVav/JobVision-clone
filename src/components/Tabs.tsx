import { ReactNode, useState } from 'react'
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
  const [selectedTab, setSelectedTab] = useState<string>(tabs[0]?.id || '')

  return (
    <div className={`w-full ${customClass}`}>
      <ul className={`border-b border-solid border-jv-light w-full h-12 flex items-center`}>
        {
          tabs.length ? tabs.map(tab => (
            <li
              key={tokenGenerator()}
              className={`border-b border-solid h-full flex items-center px-6 ${tab.id === selectedTab ?
                'border-jv-primary text-jv-primary' : 'border-transparent'} cursor-pointer hover:text-jv-primary 
                hover:border-jv-primary`}
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
              <div className={`w-full mt-3`}>
                {tab.content}
              </div>
            )
          }
        }) : 'محتوایی وجود ندارد'
      }
    </div>
  )
}

export default Tabs