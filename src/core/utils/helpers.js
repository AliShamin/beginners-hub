export function appendComments(commentBox) {
    const commentScript = document.createElement('script')
    const theme = localStorage.getItem('theme')
  
    commentScript.async = true
    commentScript.src = 'https://utteranc.es/client.js'
    commentScript.setAttribute('repo', 'alishamin/beginners-hub')
    commentScript.setAttribute('issue-term', 'pathname')
    commentScript.setAttribute('id', 'utterances')
    commentScript.setAttribute( 'theme', 'github-light')
    commentScript.setAttribute('crossorigin', 'anonymous')
  
    if (commentBox && commentBox.current) {
      commentBox.current.appendChild(commentScript)
    } else {
      console.log(`Error adding utterances comments on: ${commentBox}`)
    }
  }
  