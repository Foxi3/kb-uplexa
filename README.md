# uPlexa Knowledge Base

Migrating from kb-uplexa MediaWiki to gatsbyjs. template based on gitbook style develop by hasura.io


## 🚀 Contribute

Contribute to uPlexa Knowledge Base.

Write markdown files in `content` folder.
Add new page by editing `config.js` and create .md documents filename similar to the navigation filename. See below
Sub-page can be nested inside folder with same filename as navigation filename. Order of sub-page is alphabetically ordered.

Example:  
/uplexa_wallet/  
  /1-electralight_wallet.md  
  /2-android_wallet.md  

Open `config.js` for templating variables. Broadly configuration is available for `sidebar`.

- `sidebar` config for navigation links configuration
    - `forcedNavOrder` for left sidebar navigation order. It should be in the format "/\<filename>"


## 🤖 SEO friendly

This is a static site and comes with all the SEO benefits. Configure meta tags like title and description for each markdown file using MDX Frontmatter

```markdown
---
title: "Title of the page"
metaTitle: "Meta Title Tag for this page"
metaDescription: "Meta Description Tag for this page"
---
