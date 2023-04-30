git pull
npm run build
cp build/index.html build/404.html
git add build -f
git commit -m "adding build"
git push origin `git subtree split --prefix build master`:gh-pages-sh --force