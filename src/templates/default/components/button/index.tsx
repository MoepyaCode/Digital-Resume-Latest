import React from 'react'

type Prop = {
    className?: string
    children?: React.ReactNode
}

export function Button(prop: Prop) {
    return (
        <button className={prop.className}>{prop.children}</button>
    )
}
