---
title: Zero Based Index (with Highlighting)
date: 6-29-2022
excerpt: my test post, but this time with code
category: coding
---

### Javascript

```js
const myObj = {
  name: "Aster",
};

const funky = (name) => {
  console.log(name);
};

funky(myObj.name); // Aster
```

### Typescript

```tsx
const Post: NextPage<PostType> = ({ title, category, content }) => {
  return (
    <Section tag="main">
      <Head>
        <title>{title}</title>
      </Head>

      <div className="animate-fade relative">
        <HomeLink />
        <Title>{title}</Title>
        <Tag>{category}</Tag>

        <div className="blog mt-14">
          <ReactMarkdown components={components}>{content}</ReactMarkdown>
        </div>
      </div>
    </Section>
  );
};

export default Post;
```

### SCSS

```scss
body {
  p {
    color: $color-red;
  }
}
```

### Markdown

```md
## Tending the Garden

_ayo_
```
