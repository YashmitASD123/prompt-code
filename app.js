import prompt from "prompt";

const {start, get} = prompt;

function onErr(err) {
  console.log(err);
  return 1;
}
start();

get(["length", "breadth"], function (err, result) {
  if (err) {
    return onErr(err);
  }
  console.log("Area:");
  console.log((result.length * result.breadth));
});
