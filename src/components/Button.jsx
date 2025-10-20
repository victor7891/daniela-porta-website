export default function Button({text, link, target, extraClass}) {
  return (
      <a className={`button${extraClass ? ' ' + extraClass : ''}`} href={link} target={target}>{text}</a>
  )
}