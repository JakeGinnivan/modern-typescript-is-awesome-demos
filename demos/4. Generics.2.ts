export type ReactElement = string
type ReactComponent<TProps> = ((props: TProps) => ReactElement) & {
    displayName?: string
}

type HeaderProps = { title: string, size: number, optional?: {} }
const MyHeader: ReactComponent<HeaderProps> = (props) => {
    return `<h1>${props.title}</h1>`
}
MyHeader.displayName = 'MyHeader'
type Props = keyof HeaderProps


const renderExample = <TProps extends Map>(
    component: ReactComponent<TProps>,
    descriptions: Record<keyof TProps, string>
): string => {
    const propertyDescriptions = Object
        .keys(descriptions)
        .map(key => descriptions[key])
        .join('\r\n')

    return `${component.displayName || typeof component}
${propertyDescriptions}`
}

let result: any = render<HeaderProps>(MyHeader, { title: 'Yow! West', size: 2 }); result
result = renderExample<HeaderProps>(MyHeader, {
    title: 'Is the title',
    size: 'Is the size'
}); result





function render<T>(component: ReactComponent<T>, props: T) {
    return component(props)
}
type Map = { [key: string]: any }
