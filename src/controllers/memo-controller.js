const fs = require('fs');
const path = require('path');

async function loadMemo(memoPath) {
  try {
    // Load the memo JSON
    const memoData = JSON.parse(fs.readFileSync(memoPath, 'utf8'));
    
    // If contentPath exists, load content from the referenced file
    if (memoData.contentPath) {
      const contentFilePath = path.join(path.dirname(memoPath), memoData.contentPath);
      memoData.content = fs.readFileSync(contentFilePath, 'utf8');
    }
    
    return memoData;
  } catch (error) {
    console.error('Error loading memo:', error);
    return null;
  }
}

// For saving, you'd need a similar function
async function saveMemo(memoPath, memoData) {
  try {
    // If there's content and a contentPath, save content to the separate file
    if (memoData.content && memoData.contentPath) {
      const contentFilePath = path.join(path.dirname(memoPath), memoData.contentPath);
      
      // Save the content to the Markdown file
      fs.writeFileSync(contentFilePath, memoData.content, 'utf8');
      
      // Create a copy of memoData without the content field for JSON
      const jsonData = { ...memoData };
      delete jsonData.content;
      
      // Save the JSON metadata
      fs.writeFileSync(memoPath, JSON.stringify(jsonData, null, 2), 'utf8');
    } else {
      // Fall back to saving everything in the JSON if no contentPath
      fs.writeFileSync(memoPath, JSON.stringify(memoData, null, 2), 'utf8');
    }
    
    return true;
  } catch (error) {
    console.error('Error saving memo:', error);
    return false;
  }
} 