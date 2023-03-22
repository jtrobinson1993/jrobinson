cp index.html dist/index.html
cat styles/*.css > dist/styles.css
cp images/* dist/images
sed -i "s/__date-time__/$(date '+%Y%m%d%H%M%S')/g" dist/index.html