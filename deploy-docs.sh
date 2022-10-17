rm -rf docs/dist &&
pnpm run docs:build &&
cd docs/dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M main &&
git remote add origin git@github.com:GradyYuan256/units-ui-docs.git &&
git push -f -u origin main &&
cd ../../
echo https://gradyyuan256.github.io/units-ui-docs/