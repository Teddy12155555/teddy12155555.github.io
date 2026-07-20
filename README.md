# Tai-Ming Huang — Personal Website

The layout is generated from a small content file, so routine updates do not
require editing HTML or CSS.

## Add a publication

1. Open `site-data.js`.
2. Add a new object at the **top** of the `publications` list:

```js
{
  title: "Paper title",
  authors: "First Author, Tai-Ming Huang, Last Author",
  venue: "Conference 2027",
  image: "asset/image/paper-preview.png",
  links: [
    { label: "Paper", url: "https://example.com/paper" },
    { label: "Code", url: "https://github.com/example/repo" }
  ]
},
```

Use `image: null` when a preview image is not available, and `links: []` when
there are no links yet. The site automatically highlights `Tai-Ming Huang` in
the author list and updates the publication count.

## Add a recent highlight

Add a new object at the **top** of the `highlights` list in `site-data.js`:

```js
{
  date: "2027-01-15",
  title: "Paper title",
  venue: "Conference 2027"
},
```

Dates use `YYYY-MM-DD`, which keeps them consistent and machine-readable.

## Files you will usually edit

- `site-data.js`: highlights and publications
- `asset/image/`: profile and publication images

The page structure lives in `index.html`, while visual styling lives in
`asset/css/style.css`. Routine publication updates should not require changes
to either file.
