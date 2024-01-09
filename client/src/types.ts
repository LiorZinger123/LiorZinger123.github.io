import React from 'react'

export type Select = {
    title: string,
    ul: string[],
    icon: React.JSX.Element,
    state: boolean,
    stateFunc: React.Dispatch<React.SetStateAction<boolean>>
}