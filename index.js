import { forEach } from 'async';

forEach([], (item, cb) => {
  cb('1');
}, (err, result) => {
  console.log(err);
});