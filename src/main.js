import './style.css'
import { renderHome } from './pages/home'
import { renderWriting } from './pages/writing'
import { renderProjects } from './pages/projects'
import { renderAbout } from './pages/about'

// Router object
const router = {
  '/': renderHome,
  '/writing': renderWriting,
  '/projects': renderProjects,
  '/about': renderAbout
}

// Handle navigation
function handleRoute() {
  const path = window.location.pathname
  const content = document.querySelector('main.content')
  
  // Update active navigation state
  updateActiveNav(path)
  
  // Get the render function for current path, or home for unknown paths
  const renderFunction = router[path] || router['/']
  
  // Render the page content
  content.innerHTML = renderFunction()
}

// Update active navigation state
function updateActiveNav(currentPath) {
  // Remove active class from all links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active')
  })
  
  // Add active class to current path's link
  const activeLink = document.querySelector(`.nav-link[href="${currentPath}"]`)
  if (activeLink) {
    activeLink.classList.add('active')
  }
}

// Listen for navigation events
window.addEventListener('popstate', handleRoute)
document.addEventListener('DOMContentLoaded', handleRoute)

// Handle link clicks
document.addEventListener('click', (e) => {
  if (e.target.matches('.nav-link')) {
    e.preventDefault()
    const path = e.target.getAttribute('href')
    window.history.pushState({}, '', path)
    handleRoute()
  }
})