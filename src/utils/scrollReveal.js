export function initScrollReveal() {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    })
  }, options)

  setTimeout(() => {
    document.querySelectorAll('.scroll-reveal:not(#nav):not(#nav *)').forEach((el) => {
      observer.observe(el)
    })
  }, 100)
}

// 添加自动初始化的函数
export function addScrollRevealClass() {
  const sections = document.querySelectorAll(
    '.section:not(#nav), .card:not(#nav *), .container:not(#nav *), .content-block:not(#nav *), .w:not(#nav *)',
  )

  sections.forEach((el, index) => {
    if (!el.classList.contains('scroll-reveal')) {
      el.classList.add('scroll-reveal')
    }
  })
}
