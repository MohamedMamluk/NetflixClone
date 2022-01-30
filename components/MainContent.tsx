import React from 'react'
import Main from './cards/Main'
import { Show } from '../types'
import Category from './categories/Category'
interface AllData {
    action: Show[]
    comedy: Show[]
    horror: Show[]
    romance: Show[]
    documentary: Show[]
}
const MainContent: React.FC<AllData> = ({
    action,
    comedy,
    horror,
    romance,
    documentary,
}) => {
    return (
        <div className="flex-1 border-l-2 border-r border-gray-800 pt-10  flex flex-col overflow-auto h-screen">
            <div className="  items-center justify-center">
                <Main movie={action} />
            </div>
            <Category movies={action} categoryName="Latest Action Movies" />
            <Category movies={horror} categoryName="Latest Horror Movies" />
            <Category movies={comedy} categoryName="Latest Comedy Movies" />
            <Category movies={romance} categoryName="Latest Romance Movies" />
            <Category
                movies={documentary}
                categoryName="Latest Documentary Movies"
            />
        </div>
    )
}

export default MainContent
