

type Props = {
    src?: string
    className?: string
}

export function Image(props: Props) {
  return (
    <img src={props.src} className={props.className} />
  )
}
