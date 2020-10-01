const list = [{
    title: 'People Who Have Not Seen Forrest Gump',
    description: 'This is a short newsletter',
    imageSrc: 'https://cdn.arstechnica.net/wp-content/uploads/2018/10/gump-1200-800x534.jpg',
    selected: false
  },
  {
    title: 'People Who Own More Than One Drill',
    description: 'A Newsletter for drill enthusiasts',
    imageSrc: 'https://toolconsult.com/wp-content/uploads/2016/01/top-10-best-cordless-drills-review.jpg',
    selected: true
  },
  {
    title: 'Doorbell of the Month Club',
    description: 'Ding-dong! A new doorbell every month for fuddy-duddies',
    imageSrc: 'https://d3o372dlsg9lxo.cloudfront.net/catalog/products/c3999/images/enlarge/5c6d9586793a1b6a476f0fe6/Z005852_bn_C3999.jpg',
    selected: true
  },
  {
    title: 'Home Audio Recording For Everyone',
    description: 'The number of friends and acquaintances will grow in a large number. This is what you should be looking for.',
    imageSrc: '',
    selected: true
  },
  {
    title: 'Buying Used Electronic Test',
    description: 'People after all will make friends after reading about you. If you have an ugly profile there is no way.',
    imageSrc: '',
    selected: true
  },
];

module.exports.getList = async() => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return list;
};

module.exports.updateList = async() => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  alert("You've updated your list!");
};
