import { marked } from 'marked';

// Function to load memos from separate files
async function loadMemos() {
  try {
    // Import all memo files dynamically
    const memoModules = import.meta.glob('../data/memos/*.json');
    const memos = [];
    
    for (const path in memoModules) {
      const module = await memoModules[path]();
      const memo = module.default;
      
      // Generate a slug from the title for navigation
      memo.slug = memo.title.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-');
      
      // If there's a contentPath, load the content from the Markdown file
      if (memo.contentPath) {
        try {
          // Calculate the path to the content file relative to the import.meta.url
          const contentPath = new URL(`../data/memos/${memo.contentPath}`, import.meta.url).href;
          const contentResponse = await fetch(contentPath);
          
          if (contentResponse.ok) {
            memo.content = await contentResponse.text();
          } else {
            console.error(`Failed to load content for memo: ${memo.title}`);
            memo.content = '*Content could not be loaded*';
          }
        } catch (contentError) {
          console.error(`Error loading content for memo: ${memo.title}`, contentError);
          memo.content = '*Content could not be loaded*';
        }
      }
      
      // Add the memo from the file to our array
      memos.push(memo);
    }
    
    // Sort memos by date (newest first)
    return memos.sort((a, b) => new Date(b.date) - new Date(a.date));
  } catch (error) {
    console.error('Error loading memos:', error);
    return [];
  }
}

export async function renderMemos() {
  // Load memos from files
  const memos = await loadMemos();
  
  // Get the current memo slug from the URL hash, if any
  const currentSlug = window.location.hash.slice(1) || (memos.length > 0 ? memos[0].slug : '');
  
  // Generate sidebar navigation
  const sidebarHTML = `
    <div class="memos-sidebar">
      <ul class="memo-nav">
        ${memos.map(memo => `
          <li>
            <a href="#${memo.slug}" 
               class="memo-nav-link ${memo.slug === currentSlug ? 'active' : ''}"
               data-slug="${memo.slug}">
              ${memo.title}
            </a>
          </li>
        `).join('')}
      </ul>
    </div>
  `;
  
  // Generate HTML for each memo, parsing Markdown content
  const memosHTML = memos.map(memo => `
    <div id="${memo.slug}" class="memo-item ${memo.slug === currentSlug ? 'active' : 'hidden'}">
      <h3 class="memo-title">${memo.title}</h3>
      <div class="memo-date">${memo.date}</div>
      <div class="memo-content">${marked.parse(memo.content || '')}</div>
    </div>
  `).join('');

  const result = `
    <article class="memos-container">
      <div class="memos-layout">
        ${sidebarHTML}
        <div class="memos-content">
          ${memosHTML}
        </div>
      </div>
    </article>
    
    <script>
      // Add click handlers for memo navigation
      document.querySelectorAll('.memo-nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
          // Update active state in navigation
          document.querySelectorAll('.memo-nav-link').forEach(l => l.classList.remove('active'));
          e.target.classList.add('active');
          
          // Show the selected memo, hide others
          const slug = e.target.getAttribute('data-slug');
          document.querySelectorAll('.memo-item').forEach(item => {
            if (item.id === slug) {
              item.classList.add('active');
              item.classList.remove('hidden');
            } else {
              item.classList.remove('active');
              item.classList.add('hidden');
            }
          });
        });
      });
    </script>
  `;
  
  return result;
} 