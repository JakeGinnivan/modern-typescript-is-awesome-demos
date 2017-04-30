import * as React from 'react'
import * as ReactDOM from 'react-dom'

const Component: React.SFC<{}> = () => (
    <div>Hi Yow!</div>
)

const div = document.createElement('div')
document.body.appendChild(div)
ReactDOM.render(<Component />, div)