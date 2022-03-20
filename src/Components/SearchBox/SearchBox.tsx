import React from "react";

interface searchBoxProps {
    setSearchFilter: Function
}

export const SearchBox = (props: searchBoxProps) => {
    const handleSearch = (event: any) => {
        const searchFilter = event.target.value.toLocaleLowerCase()
        props.setSearchFilter(searchFilter)            
    }

    return (
        <input className='bg-gray-200 appearance-none border-2 border-gray-200 
        rounded w-full py-2 px-4 text-gray-700 leading-tight
        focus:outline-none focus:bg-white focus:border-purple-500' type='search' placeholder="search monsters" onChange={handleSearch}></input>
    )
}