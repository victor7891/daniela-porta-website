export default function Button({text, link, target}) {
  return (
      <a className="button" href={link} target={target}>{text}</a>
  )
}