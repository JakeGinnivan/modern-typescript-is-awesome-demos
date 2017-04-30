export type ReactElement = string
type ReactComponent<TProps> = ((props: TProps) => ReactElement) & {
    displayName?: string
}

type HeaderProps = { title: string, size: number }
const MyHeader: ReactComponent<HeaderProps> = (props) => {
    return `<h1>${props.title}</h1>`
}
// MyHeader.displayName = 'MyHeader'

const renderExample = <TProps>(component: ReactComponent<TProps>, _props: {}): string => {
    return `${component.displayName || typeof component}
`
}

let result: any = render<HeaderProps>(MyHeader, { title: 'Yow! West', size: 2 }); result
result = renderExample<HeaderProps>(MyHeader, {}); result





function render<T>(component: ReactComponent<T>, props: T) {
    return component(props)
}
type Map = { [key: string]: any }
