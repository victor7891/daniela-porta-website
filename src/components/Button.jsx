export default function Button({text, link, target, extraClass}) {
  const handleClick = (e) => {
    // Check if it's a hash link (anchor link)
    if (link && link.startsWith('#')) {
      e.preventDefault();
      const targetElement = document.querySelector(link);
      if (targetElement) {
        const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - 100;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
      <a 
        className={`button${extraClass ? ' ' + extraClass : ''}`} 
        href={link} 
        target={target}
        onClick={handleClick}
      >
        {text}
      </a>
  )
}