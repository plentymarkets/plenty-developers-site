function toggleFacetsOnResize () {
  const articleBody = document.getElementById('article-body')
  const facetsSidebar = document.getElementById('facets-sidebar')
  const mediaQuery = window.matchMedia('(min-width: 1024px)')

  if (facetsSidebar) {
    if (mediaQuery.matches) {
      facetsSidebar.classList.remove('d-none')
    } else {
      facetsSidebar.classList.add('d-none')
      articleBody.classList.remove('mobile-no-scroll')
    }
  }
}

window.addEventListener('resize', toggleFacetsOnResize)
