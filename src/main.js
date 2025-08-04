import './style.css'
import { renderWriting } from './pages/writing'
import { renderProjects } from './pages/projects'
import { renderAbout } from './pages/about'
import { renderMemos } from './pages/memos'

const router = {
  '/': renderAbout,
  '/writing': renderWriting,
  '/projects': renderProjects,
  '/about': renderAbout,
  '/memos': renderMemos
}

async function handleRoute() {
  const path = window.location.pathname
  const content = document.querySelector('main.content')
 
  updateActiveNav(path)
  
  const renderFunction = router[path] || router['/']
  
  // Check if the render function is async
  if (renderFunction.constructor.name === 'AsyncFunction') {
    content.innerHTML = await renderFunction()
  } else {
    content.innerHTML = renderFunction()
  }
}

function updateActiveNav(currentPath) {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active')
  })
  
  const activeLink = document.querySelector(`.nav-link[href="${currentPath}"]`)
  if (activeLink) {
    activeLink.classList.add('active')
  }
}
window.addEventListener('popstate', handleRoute)
document.addEventListener('DOMContentLoaded', handleRoute)

document.addEventListener('click', (e) => {
  if (e.target.matches('.nav-link')) {
    e.preventDefault()
    const path = e.target.getAttribute('href')
    window.history.pushState({}, '', path)
    handleRoute()
  }
})
