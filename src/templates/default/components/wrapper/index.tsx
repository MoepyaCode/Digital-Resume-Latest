import React from 'react'

type Props = {
    className?: string
    children?: React.ReactNode
}

export function Wrapper(props: Props) {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    )
}