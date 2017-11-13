Array.prototype.toInt = function() {
  for (var i = 0; i < this.length; i++) {
    this[i] = parseInt(this[i]);
  }
  return this;
}
// 从数组末尾起移除0，直到非0停止
Array.prototype.removeZero = function() {
  var flag = true,
    len = this.length;
  for (var i = len - 1; i >= 0; i--) {
    if (this[i] != 0) {
      flag = false;
    }
    if (flag && this[i] == 0) {
      this.splice(i, 1);
    }
  }
  return this;
}
// 在数组末尾添加n个0
Array.prototype.addZero = function(n) {
  for(var i = 0; i < n; i++) {
    this.push('0');
  }
  return this;
}

// 加
function add(a, b) {
  var ax = a.split('').reverse().toInt();
  var bx = b.split('').reverse().toInt();
  var len = (ax.length > bx.length) ? ax.length : bx.length;
  var rx = [0],
    slen, x;

  if (ax.length > bx.length) {
    slen = ax.length - bx.length;
    for (x = 0; x < slen; x++) {
      bx.push(0);
    }
  } else {
    slen = bx.length - ax.length;
    for (x = 0; x < slen; x++) {
      ax.push(0);
    }
  }

  for (var i = 0; i < len; i++) {
    var r = ax[i] + bx[i] + rx[i];
    var s = parseInt(r / 10);
    r = r % 10;
    rx[i] = r;
    rx[i + 1] = s;
  }

  rx = rx.removeZero().reverse().join('');
  return rx;
}

// var a = '976';
// var b = '27';

// console.log(add(a, b));

// 比较大小
function compare(a, b) {
  var ax = a.split('').reverse().toInt();
  var bx = b.split('').reverse().toInt();
  var len = (ax.length > bx.length) ? ax.length : bx.length;
  var slen, x;

  if (ax.length > bx.length) {
    slen = ax.length - bx.length;
    for (x = 0; x < slen; x++) {
      bx.push(0);
    }
  } else {
    slen = bx.length - ax.length;
    for (x = 0; x < slen; x++) {
      ax.push(0);
    }
  }

  if (ax.length > bx.length) {
    return 1;
  } else if (ax.length < bx.length) {
    return -1;
  } else {
    for (var i = len - 1; i >= 0; i--) {
      if (ax[i] > bx[i]) {
        return 1;
      } else if (ax[i] < bx[i]) {
        return -1;
      }
    }
  }

  return 0;
}

// var a = '377';
// var b = '377';

// console.log(compare(b, a));

// 减
function sub(a, b) {
  var ax = a.split('').reverse().toInt();
  var bx = b.split('').reverse().toInt();
  var len = (ax.length > bx.length) ? ax.length : bx.length;
  var rx = [0],
    slen, x;

  if (ax.length > bx.length) {
    slen = ax.length - bx.length;
    for (x = 0; x < slen; x++) {
      bx.push(0);
    }
  } else {
    slen = bx.length - ax.length;
    for (x = 0; x < slen; x++) {
      ax.push(0);
    }
  }

  if (compare(a, b) > 0) {
    for (var i = 0; i < len; i++) {
      var r = ax[i] - bx[i];
      if (r < 0) {
        r += 10;
        ax[i + 1] -= 1;
      }
      rx[i] = r;
    }
    rx = rx.removeZero().reverse().join('');
  } else if (compare(a, b) < 0) {
    for (var i = 0; i < len; i++) {
      var r = bx[i] - ax[i];
      if (r < 0) {
        r += 10;
        bx[i + 1] -= 1;
      }
      rx[i] = r;
    }
    rx = '-' + rx.removeZero().reverse().join('');
  } else {
    return 0;
  }

  return rx;
}

// var a = '386';
// var b = '4377';

// console.log(sub(a, b));

// 乘
function mut(a, b) {
  var ax = a.split('').reverse().toInt();
  var bx = b.split('').reverse().toInt();
  var len = (ax.length > bx.length) ? ax.length : bx.length;
  var slen, x, rt = [];

  if (ax.length > bx.length) {
    slen = ax.length - bx.length;
    for (x = 0; x < slen; x++) {
      bx.push(0);
    }
  } else {
    slen = bx.length - ax.length;
    for (x = 0; x < slen; x++) {
      ax.push(0);
    }
  }

  for (var i = 0; i < len; i++) {
    var rx = [0];
    for(var j = 0; j < len; j++) {
      var t = ax[j] * bx[i];
      rx[j] += t % 10;
      rx[j + 1] = parseInt(t / 10);
    }
    rx = rx.removeZero().reverse().addZero(i).join('');
    rt.push(rx);
  }

  var rs = '0';
  for(var k = 0; k < rt.length; k++) {
    rs = add(rs, rt[k]);
  }
  return rs;
}

// var a = '123';
// var b = '321';

// console.log(mut(a, b));

// 除
function div(a, b) {
  var ax = a.split('').toInt();
  var bx = b.split('').toInt();


}

var a = '387';
var b = '3';

console.log(div(a, b));


