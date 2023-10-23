const fs = require('fs');
const util = require('util');

const images = [];

// read the files in the directory
const files = fs.readdirSync('C:\Users\dtlbr\Documents\GitHub\PriceGuide\images\items');

// create an object for each image and add it to the images array
for (let i = 0; i < files.length; i++) {
  const file = files[i];
  const name = '';
  const image = `images/items/${file}`;
  const category = '';

  const item = {
    name: name,
    image: image,
    category: category,
    pricerange: '1M+',
    price: '3m+'
  };

  images.push(item);
}

// convert the array to a string without quotes around the keys
const output = util.inspect(images, { compact: false, depth: null, maxArrayLength: null });

// write the output to a file
fs.writeFileSync('ItemArrayAll.json', output);
