import './style.css'
import { renderWriting } from './pages/writing'
import { renderProjects } from './pages/projects'
import { renderAbout } from './pages/about'

const router = {
  '/': renderAbout,
  '/writing': renderWriting,
  '/projects': renderProjects,
  '/about': renderAbout
}

function handleRoute() {
  const path = window.location.pathname
  const content = document.querySelector('main.content')
 
  updateActiveNav(path)
  
  const renderFunction = router[path] || router['/']
  
  content.innerHTML = renderFunction()
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