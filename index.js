function saymyname() {
  console.log('hello this is Joel');
}

function writeCountdown(num) {
  console.log(num);
}

function countdown() {
  let count = 10;

  waitOneSecAndCount = function () {
    if (count >= 0) {
      writeCountdown(count);
      count--;

      setTimeout(() => {
        waitOneSecAndCount();
      }, 1000);
    }
  };

  waitOneSecAndCount()
}

saymyname("Adios");
countdown(0);