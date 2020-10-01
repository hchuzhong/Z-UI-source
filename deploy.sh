rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "init" &&
git branch -M master &&
git remote add origin git@github.com:hchuzhong/Z-UI.git &&
git push -f -u origin master &&
cd ..
echo http://hchuzhong.xyz/Z-UI/index.html#/