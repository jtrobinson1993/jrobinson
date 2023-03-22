cp index.html dist/index.html
cat styles/*.css > dist/styles.css
cat js/*.js > dist/js/index.js
cp images/* dist/images
sed -i "s/__date-time__/$(date '+%Y%m%d%H%M%S')/g" dist/index.html