# uPlexa Knowledge Base

Migrating from kb-uplexa MediaWiki to gatsbyjs. template based on gitbook style develop by hasura.io


## 🚀 Contribute

Contribute to uPlexa Knowledge Base.

Write markdown files in `content` folder.

Open `config.js` for templating variables. Broadly configuration is available for `sidebar`.

- `sidebar` config for navigation links configuration
    - `forcedNavOrder` for left sidebar navigation order. It should be in the format "/\<filename>"
    - `frontLine` - whether to show a front line at the beginning of a nested menu.(Collapsing capability would be turned of if this option is set to true)


## 🤖 SEO friendly

This is a static site and comes with all the SEO benefits. Configure meta tags like title and description for each markdown file using MDX Frontmatter

```markdown
---
title: "Title of the page"
metaTitle: "Meta Title Tag for this page"
metaDescription: "Meta Description Tag for this page"
---
