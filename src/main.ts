import async from 'async';

// async.eachLimit([1, 2, 3, 4, 5], 2, (itemId, callback) => {
//   setTimeout(() => {
//     console.log("in with item Id: ", itemId);
//   }, 10000);
//   callback();
// }, function (err) {
//   if (err) {
//     console.log("err : ", err);
//     throw err;
//   }
// });

function upload_file(id: number, callback: Function) {
  // Do funky stuff with file
  console.log(id);

  callback();
}

const errorCallBack = (error: any) => console.log(error);


var queue = async.queue((id: number, callback: Function) => {
  console.log(id);
  callback();
}, 2); // Run ten simultaneous uploads

// Queue your files for upload
queue.push([1, 2, 3, 4, 5]);