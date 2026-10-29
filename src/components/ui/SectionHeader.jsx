import Reveal from '../motion/Reveal.jsx'

function SectionHeader({
  eyebrow,
  title,
  description,
  className = '',
  titleAs: Title = 'h2',
  titleId,
}) {
  return (
    <div className={`section-header ${className}`.trim()}>
      {eyebrow && (
        <Reveal as="p" className="eyebrow">
          {eyebrow}
        </Reveal>
      )}
      <Reveal
        as={Title}
        className="section-header__title"
        id={titleId}
      >
        {title}
      </Reveal>
      {description && (
        <Reveal as="p" className="section-header__description" delay={0.1}>
          {description}
        </Reveal>
      )}
    </div>
  )
}

export default SectionHeader
