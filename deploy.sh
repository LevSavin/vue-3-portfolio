npm run build
cp dist/index.html dist/404.html
git add dist -f
git commit -m "adding dist"
git subtree push --prefix dist origin gh-pages