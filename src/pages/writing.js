export function renderWriting() {
  const html = `
    <article>
      <div class="writing-filters">
        <button class="filter-btn active" data-filter="all">All</button>
        <button class="filter-btn" data-filter="nessie">Nessie</button>
        <button class="filter-btn" data-filter="personal">Personal</button>
      </div>

      <ul class="post-list">
        <li data-category="nessie">
          <span class="post-tag tag-nessie">nessie</span>
          <span class="post-date">2026-04-20:</span>
          <a href="https://x.com/anna_y_zhang/status/2046296928242254329" target="_blank">Why We Killed Our Own Product - Twice</a>
        </li>
        <li data-category="personal">
          <span class="post-tag tag-personal">personal</span>
          <span class="post-date">2025-10-03:</span>
          <a href="https://annayutongzhang.substack.com/p/to-create-is-to-desire" target="_blank">To create is to desire</a>
        </li>
        <li data-category="personal">
          <span class="post-tag tag-personal">personal</span>
          <span class="post-date">2025-09-16:</span>
          <a href="https://annayutongzhang.substack.com/p/to-everyone-who-has-touched-my-life" target="_blank">to everyone who has touched my life</a>
        </li>
        <li data-category="personal">
          <span class="post-tag tag-personal">personal</span>
          <span class="post-date">2024-07-13:</span>
          <a href="https://annayutongzhang.substack.com/p/on-thinking-hard" target="_blank">On Thinking Hard</a>
        </li>
        <li data-category="personal">
          <span class="post-tag tag-personal">personal</span>
          <span class="post-date">2024-02-01:</span>
          <a href="https://annayutongzhang.substack.com/p/what-would-you-do-if-you-couldnt" target="_blank">What Would You Do If You Couldn't Fail?</a>
        </li>
        <li data-category="personal">
          <span class="post-tag tag-personal">personal</span>
          <span class="post-date">2024-01-28:</span>
          <a href="https://annayutongzhang.substack.com/p/activation-energy" target="_blank">Activation Energy</a>
        </li>
        <li data-category="personal">
          <span class="post-tag tag-personal">personal</span>
          <span class="post-date">2024-01-26:</span>
          <a href="https://annayutongzhang.substack.com/p/who-are-you-doing-it-for" target="_blank">Who Are You Doing It For?</a>
        </li>
        <li data-category="personal">
          <span class="post-tag tag-personal">personal</span>
          <span class="post-date">2024-01-25:</span>
          <a href="https://medium.com/@anna-yutong-zhang/the-ikea-test-0a2ae92e8eac" target="_blank">The IKEA Test</a>
        </li>
        <li data-category="personal">
          <span class="post-tag tag-personal">personal</span>
          <span class="post-date">2024-01-24:</span>
          <a href="https://medium.com/@anna-yutong-zhang/whats-different-this-time-a1dfbb94e378" target="_blank">What's Different This Time?</a>
        </li>
        <li data-category="personal">
          <span class="post-tag tag-personal">personal</span>
          <span class="post-date">2024-01-23:</span>
          <a href="https://medium.com/@anna-yutong-zhang/note-to-self-pt-2-57cabde2cff1" target="_blank">Note to Self: Pt.2</a>
        </li>
        <li data-category="personal">
          <span class="post-tag tag-personal">personal</span>
          <span class="post-date">2024-01-22:</span>
          <a href="https://medium.com/@anna-yutong-zhang/note-to-self-pt-1-bd115b432934" target="_blank">Note to Self: Pt.1</a>
        </li>
        <li data-category="personal">
          <span class="post-tag tag-personal">personal</span>
          <span class="post-date">2024-01-21:</span>
          <a href="https://medium.com/@anna-yutong-zhang/on-making-things-happen-acd47432f4cb" target="_blank">On Making Things Happen</a>
        </li>
        <li data-category="personal">
          <span class="post-tag tag-personal">personal</span>
          <span class="post-date">2024-01-20:</span>
          <a href="https://medium.com/@anna-yutong-zhang/midding-395b1e9830c8" target="_blank">Midding</a>
        </li>
        <li data-category="personal">
          <span class="post-tag tag-personal">personal</span>
          <span class="post-date">2024-01-19:</span>
          <a href="https://annayutongzhang.substack.com/p/higher-conviction" target="_blank">Higher Conviction</a>
        </li>
        <li data-category="personal">
          <span class="post-tag tag-personal">personal</span>
          <span class="post-date">2024-01-17:</span>
          <a href="https://annayutongzhang.substack.com/p/on-taste" target="_blank">On Taste</a>
        </li>
        <li data-category="personal">
          <span class="post-tag tag-personal">personal</span>
          <span class="post-date">2024-01-16:</span>
          <a href="https://annayutongzhang.substack.com/p/building-systems-from-obsessions" target="_blank">Building Systems from Obsessions</a>
        </li>
        <li data-category="personal">
          <span class="post-tag tag-personal">personal</span>
          <span class="post-date">2024-01-15:</span>
          <a href="https://annayutongzhang.substack.com/p/resisting-academism" target="_blank">Resisting Academism</a>
        </li>
        <li data-category="personal">
          <span class="post-tag tag-personal">personal</span>
          <span class="post-date">2024-01-14:</span>
          <a href="https://annayutongzhang.substack.com/p/what-it-takes" target="_blank">What It Takes</a>
        </li>
        <li data-category="personal">
          <span class="post-tag tag-personal">personal</span>
          <span class="post-date">2024-01-08:</span>
          <a href="https://medium.com/@anna-yutong-zhang/one-call-b51d5de1e326" target="_blank">One Call</a>
        </li>
        <li data-category="personal">
          <span class="post-tag tag-personal">personal</span>
          <span class="post-date">2023-12-30:</span>
          <a href="https://annayutongzhang.substack.com/p/on-talent" target="_blank">On Talent</a>
        </li>
        <li data-category="personal">
          <span class="post-tag tag-personal">personal</span>
          <span class="post-date">2024-01-02:</span>
          <a href="https://medium.com/@anna-yutong-zhang/stop-chasing-techniques-758f5c269fdd" target="_blank">Stop Chasing Techniques</a>
        </li>
        <li data-category="personal">
          <span class="post-tag tag-personal">personal</span>
          <span class="post-date">2024-01-01:</span>
          <a href="https://medium.com/@anna-yutong-zhang/how-to-be-221f977269ee" target="_blank">How To Be</a>
        </li>
        <li data-category="personal">
          <span class="post-tag tag-personal">personal</span>
          <span class="post-date">2024-01-01:</span>
          <a href="https://medium.com/@anna-yutong-zhang/the-future-is-now-fcdf738ef6b0" target="_blank">The Future is Now</a>
        </li>
        <li data-category="personal">
          <span class="post-tag tag-personal">personal</span>
          <span class="post-date">2023-12-30:</span>
          <a href="https://medium.com/@anna-yutong-zhang/mental-playbook-against-overthinking-22cc875ccff8" target="_blank">On Overthinking</a>
        </li>
        <li data-category="personal">
          <span class="post-tag tag-personal">personal</span>
          <span class="post-date">2023-12-30:</span>
          <a href="https://medium.com/@anna-yutong-zhang/green-lumber-red-lumber-e30e31fcda7b" target="_blank">Green Lumber, Red Lumber</a>
        </li>
      </ul>
    </article>
  `

  setTimeout(() => {
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'))
        btn.classList.add('active')
        const filter = btn.dataset.filter
        document.querySelectorAll('.post-list li').forEach(li => {
          if (filter === 'all' || li.dataset.category === filter) {
            li.style.display = ''
          } else {
            li.style.display = 'none'
          }
        })
      })
    })
  }, 0)

  return html
}
