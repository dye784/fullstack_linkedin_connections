$(document).ready(() => {
  let $connect = $("span:contains('Connect')");

  $connect.on('click', function() {
    setTimeout(() => {
      let $sendnow = $("button:contains('Send now')");
      $sendnow.on('click', function() {
        window.close();
      })
      $sendnow.trigger('click');
    }, 1000);
  })

  if ($connect.length === 0) {
    window.close();
  } else {
    $connect.trigger('click');
  }
})

  // $connect.trigger('click');
  // setTimeout(function() {
  //   console.log("HERE YO")
  //   .trigger('click');
  //   setTimeout(() => {
  //     console.log("TIME OUT")
  //     window.close();
  //   }, 1000);
  // }, 1000);
// document.addEventListener("DOMContentLoaded", function(event) {
//   //do work
//   console.log("DO YOU RUN?")
// });

// window.document.onload = () => {
//   console.log("DUDE WHY?")
//   var spans = document.getElementsByTagName("span");
//   for (let i = 0; i < spans.length; i++){
//     console.log("INSIDE FOR")
//       if (spans[i].textContent == 'Connect') {
//           spans[i].click();
//       }
//   }
// }
