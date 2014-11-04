/*
Aes.Ctr.encrypt(text, key, 256) x._c_._
Aes.Ctr.decrypt(text, key, 256) x._c_.___
Base64.encode(text) y._
Base64.decode(text) y.__
Utf8.encode(text) z._
Utf8.decode(text) z.__
*/

var _0x14d1 = ["a", "length", "floor", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "_e", "", "l", "charCodeAt", "slice", "concat", "getTime", "random", "fromCharCode", "ceil", "join", "_d", "decode", "code", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", "undefined", "encodeUTF8", "=", "\x00", "charAt", "decodeUTF8", "indexOf", "replace"];
var _0x8663 = [_0x14d1[0], _0x14d1[1], _0x14d1[2], _0x14d1[3], _0x14d1[4], _0x14d1[5], _0x14d1[6], _0x14d1[7], _0x14d1[8], _0x14d1[9], _0x14d1[10], _0x14d1[11], _0x14d1[12], _0x14d1[13], _0x14d1[14], _0x14d1[15], _0x14d1[16], _0x14d1[17], _0x14d1[18], _0x14d1[19], _0x14d1[20], _0x14d1[21], _0x14d1[22], _0x14d1[23], _0x14d1[24], _0x14d1[25], _0x14d1[26], _0x14d1[27], _0x14d1[28], _0x14d1[29], _0x14d1[30], _0x14d1[31], _0x14d1[32], _0x14d1[33], _0x14d1[34], _0x14d1[35]];
var x = {};
x[_0x8663[0]] = function(input, w) {
  var Nb = 4;
  var Nr = w[_0x8663[1]] / Nb - 1;
  var state = [
    [],
    [],
    [],
    []
  ];
  for (var i = 0; i < 4 * Nb; i++) {
    state[i % 4][Math[_0x8663[2]](i / 4)] = input[i];
  };
  state = x[_0x8663[3]](state, w, 0, Nb);
  for (var round = 1; round < Nr; round++) {
    state = Aes[_0x8663[4]](state, Nb);
    state = Aes[_0x8663[5]](state, Nb);
    state = Aes[_0x8663[6]](state, Nb);
    state = Aes[_0x8663[3]](state, w, round, Nb);
  };
  state = Aes[_0x8663[4]](state, Nb);
  state = Aes[_0x8663[5]](state, Nb);
  state = Aes[_0x8663[3]](state, w, Nr, Nb);
  var output = new Array(4 * Nb);
  for (var i = 0; i < 4 * Nb; i++) {
    output[i] = state[i % 4][Math[_0x8663[2]](i / 4)];
  };
  return output;
};
x[_0x8663[7]] = function(key) {
  var Nb = 4;
  var Nk = key[_0x8663[1]] / 4;
  var Nr = Nk + 6;
  var w = new Array(Nb * (Nr + 1));
  var temp = new Array(4);
  for (var i = 0; i < Nk; i++) {
    var r = [key[4 * i], key[4 * i + 1], key[4 * i + 2], key[4 * i + 3]];
    w[i] = r;
  };
  for (var i = Nk; i < (Nb * (Nr + 1)); i++) {
    w[i] = new Array(4);
    for (var t = 0; t < 4; t++) {
      temp[t] = w[i - 1][t];
    };
    if (i % Nk == 0) {
      temp = Aes[_0x8663[9]](Aes[_0x8663[8]](temp));
      for (var t = 0; t < 4; t++) {
        temp[t] ^= Aes[_0x8663[10]][i / Nk][t];
      };
    } else {
      if (Nk > 6 && i % Nk == 4) {
        temp = Aes[_0x8663[9]](temp);
      };
    };
    for (var t = 0; t < 4; t++) {
      w[i][t] = w[i - Nk][t] ^ temp[t];
    };
  };
  return w;
};
x[_0x8663[4]] = function(s, Nb) {
  for (var r = 0; r < 4; r++) {
    for (var c = 0; c < Nb; c++) {
      s[r][c] = Aes[_0x8663[11]][s[r][c]];
    };
  };
  return s;
};
x[_0x8663[5]] = function(s, Nb) {
  var t = new Array(4);
  for (var r = 1; r < 4; r++) {
    for (var c = 0; c < 4; c++) {
      t[c] = s[r][(c + r) % Nb];
    };
    for (var c = 0; c < 4; c++) {
      s[r][c] = t[c];
    };
  };
  return s;
};
x[_0x8663[6]] = function(s, Nb) {
  for (var c = 0; c < 4; c++) {
    var a = new Array(4);
    var b = new Array(4);
    for (var i = 0; i < 4; i++) {
      a[i] = s[i][c];
      b[i] = s[i][c] & 0x80 ? s[i][c] << 1 ^ 0x011b : s[i][c] << 1;
    };
    s[0][c] = b[0] ^ a[1] ^ b[1] ^ a[2] ^ a[3];
    s[1][c] = a[0] ^ b[1] ^ a[2] ^ b[2] ^ a[3];
    s[2][c] = a[0] ^ a[1] ^ b[2] ^ a[3] ^ b[3];
    s[3][c] = a[0] ^ b[0] ^ a[1] ^ a[2] ^ b[3];
  };
  return s;
};
x[_0x8663[3]] = function(state, w, rnd, Nb) {
  for (var r = 0; r < 4; r++) {
    for (var c = 0; c < Nb; c++) {
      state[r][c] ^= w[rnd * 4 + c][r];
    };
  };
  return state;
};
Aes[_0x8663[9]] = function(w) {
  for (var i = 0; i < 4; i++) {
    w[i] = Aes[_0x8663[11]][w[i]];
  };
  return w;
};
Aes[_0x8663[8]] = function(w) {
  var tmp = w[0];
  for (var i = 0; i < 3; i++) {
    w[i] = w[i + 1];
  };
  w[3] = tmp;
  return w;
};
Aes[_0x8663[11]] = [0x63, 0x7c, 0x77, 0x7b, 0xf2, 0x6b, 0x6f, 0xc5, 0x30, 0x01, 0x67, 0x2b, 0xfe, 0xd7, 0xab, 0x76, 0xca, 0x82, 0xc9, 0x7d, 0xfa, 0x59, 0x47, 0xf0, 0xad, 0xd4, 0xa2, 0xaf, 0x9c, 0xa4, 0x72, 0xc0, 0xb7, 0xfd, 0x93, 0x26, 0x36, 0x3f, 0xf7, 0xcc, 0x34, 0xa5, 0xe5, 0xf1, 0x71, 0xd8, 0x31, 0x15, 0x04, 0xc7, 0x23, 0xc3, 0x18, 0x96, 0x05, 0x9a, 0x07, 0x12, 0x80, 0xe2, 0xeb, 0x27, 0xb2, 0x75, 0x09, 0x83, 0x2c, 0x1a, 0x1b, 0x6e, 0x5a, 0xa0, 0x52, 0x3b, 0xd6, 0xb3, 0x29, 0xe3, 0x2f, 0x84, 0x53, 0xd1, 0x00, 0xed, 0x20, 0xfc, 0xb1, 0x5b, 0x6a, 0xcb, 0xbe, 0x39, 0x4a, 0x4c, 0x58, 0xcf, 0xd0, 0xef, 0xaa, 0xfb, 0x43, 0x4d, 0x33, 0x85, 0x45, 0xf9, 0x02, 0x7f, 0x50, 0x3c, 0x9f, 0xa8, 0x51, 0xa3, 0x40, 0x8f, 0x92, 0x9d, 0x38, 0xf5, 0xbc, 0xb6, 0xda, 0x21, 0x10, 0xff, 0xf3, 0xd2, 0xcd, 0x0c, 0x13, 0xec, 0x5f, 0x97, 0x44, 0x17, 0xc4, 0xa7, 0x7e, 0x3d, 0x64, 0x5d, 0x19, 0x73, 0x60, 0x81, 0x4f, 0xdc, 0x22, 0x2a, 0x90, 0x88, 0x46, 0xee, 0xb8, 0x14, 0xde, 0x5e, 0x0b, 0xdb, 0xe0, 0x32, 0x3a, 0x0a, 0x49, 0x06, 0x24, 0x5c, 0xc2, 0xd3, 0xac, 0x62, 0x91, 0x95, 0xe4, 0x79, 0xe7, 0xc8, 0x37, 0x6d, 0x8d, 0xd5, 0x4e, 0xa9, 0x6c, 0x56, 0xf4, 0xea, 0x65, 0x7a, 0xae, 0x08, 0xba, 0x78, 0x25, 0x2e, 0x1c, 0xa6, 0xb4, 0xc6, 0xe8, 0xdd, 0x74, 0x1f, 0x4b, 0xbd, 0x8b, 0x8a, 0x70, 0x3e, 0xb5, 0x66, 0x48, 0x03, 0xf6, 0x0e, 0x61, 0x35, 0x57, 0xb9, 0x86, 0xc1, 0x1d, 0x9e, 0xe1, 0xf8, 0x98, 0x11, 0x69, 0xd9, 0x8e, 0x94, 0x9b, 0x1e, 0x87, 0xe9, 0xce, 0x55, 0x28, 0xdf, 0x8c, 0xa1, 0x89, 0x0d, 0xbf, 0xe6, 0x42, 0x68, 0x41, 0x99, 0x2d, 0x0f, 0xb0, 0x54, 0xbb, 0x16];
Aes[_0x8663[10]] = [
  [0x00, 0x00, 0x00, 0x00],
  [0x01, 0x00, 0x00, 0x00],
  [0x02, 0x00, 0x00, 0x00],
  [0x04, 0x00, 0x00, 0x00],
  [0x08, 0x00, 0x00, 0x00],
  [0x10, 0x00, 0x00, 0x00],
  [0x20, 0x00, 0x00, 0x00],
  [0x40, 0x00, 0x00, 0x00],
  [0x80, 0x00, 0x00, 0x00],
  [0x1b, 0x00, 0x00, 0x00],
  [0x36, 0x00, 0x00, 0x00]
];
Aes[_0x8663[12]] = {};
Aes[_0x8663[12]][_0x8663[13]] = function(plaintext, password, nBits) {
  var blockSize = 16;
  if (!(nBits == 128 || nBits == 192 || nBits == 256)) {
    return _0x8663[14];
  };
  plaintext = Utf8[_0x8663[15]](plaintext);
  password = Utf8[_0x8663[15]](password);
  var nBytes = nBits / 8;
  var pwBytes = new Array(nBytes);
  for (var i = 0; i < nBytes; i++) {
    pwBytes[i] = isNaN(password[_0x8663[16]](i)) ? 0 : password[_0x8663[16]](i);
  };
  var key = Aes[_0x8663[0]](pwBytes, Aes[_0x8663[7]](pwBytes));
  key = key[_0x8663[18]](key[_0x8663[17]](0, nBytes - 16));
  var counterBlock = new Array(blockSize);
  var nonce = (new Date())[_0x8663[19]]();
  var nonceMs = nonce % 1000;
  var nonceSec = Math[_0x8663[2]](nonce / 1000);
  var nonceRnd = Math[_0x8663[2]](Math[_0x8663[20]]() * 0xffff);
  for (var i = 0; i < 2; i++) {
    counterBlock[i] = (nonceMs >>> i * 8) & 0xff;
  };
  for (var i = 0; i < 2; i++) {
    counterBlock[i + 2] = (nonceRnd >>> i * 8) & 0xff;
  };
  for (var i = 0; i < 4; i++) {
    counterBlock[i + 4] = (nonceSec >>> i * 8) & 0xff;
  };
  var ctrTxt = _0x8663[14];
  for (var i = 0; i < 8; i++) {
    ctrTxt += String[_0x8663[21]](counterBlock[i]);
  };
  var keySchedule = Aes[_0x8663[7]](key);
  var blockCount = Math[_0x8663[22]](plaintext[_0x8663[1]] / blockSize);
  var ciphertxt = new Array(blockCount);
  for (var b = 0; b < blockCount; b++) {
    for (var c = 0; c < 4; c++) {
      counterBlock[15 - c] = (b >>> c * 8) & 0xff;
    };
    for (var c = 0; c < 4; c++) {
      counterBlock[15 - c - 4] = (b / 0x100000000 >>> c * 8);
    };
    var cipherCntr = Aes[_0x8663[0]](counterBlock, keySchedule);
    var blockLength = b < blockCount - 1 ? blockSize : (plaintext[_0x8663[1]] - 1) % blockSize + 1;
    var cipherChar = new Array(blockLength);
    for (var i = 0; i < blockLength; i++) {
      cipherChar[i] = cipherCntr[i] ^ plaintext[_0x8663[16]](b * blockSize + i);
      cipherChar[i] = String[_0x8663[21]](cipherChar[i]);
    };
    ciphertxt[b] = cipherChar[_0x8663[23]](_0x8663[14]);
  };
  var ciphertext = ctrTxt + ciphertxt[_0x8663[23]](_0x8663[14]);
  ciphertext = Base64[_0x8663[15]](ciphertext);
  return ciphertext;
};
Aes[_0x8663[12]][_0x8663[24]] = function(ciphertext, password, nBits) {
  var blockSize = 16;
  if (!(nBits == 128 || nBits == 192 || nBits == 256)) {
    return _0x8663[14];
  };
  ciphertext = Base64[_0x8663[25]](ciphertext);
  password = Utf8[_0x8663[15]](password);
  var nBytes = nBits / 8;
  var pwBytes = new Array(nBytes);
  for (var i = 0; i < nBytes; i++) {
    pwBytes[i] = isNaN(password[_0x8663[16]](i)) ? 0 : password[_0x8663[16]](i);
  };
  var key = Aes[_0x8663[0]](pwBytes, Aes[_0x8663[7]](pwBytes));
  key = key[_0x8663[18]](key[_0x8663[17]](0, nBytes - 16));
  var counterBlock = new Array(8);
  ctrTxt = ciphertext[_0x8663[17]](0, 8);
  for (var i = 0; i < 8; i++) {
    counterBlock[i] = ctrTxt[_0x8663[16]](i);
  };
  var keySchedule = Aes[_0x8663[7]](key);
  var nBlocks = Math[_0x8663[22]]((ciphertext[_0x8663[1]] - 8) / blockSize);
  var ct = new Array(nBlocks);
  for (var b = 0; b < nBlocks; b++) {
    ct[b] = ciphertext[_0x8663[17]](8 + b * blockSize, 8 + b * blockSize + blockSize);
  };
  ciphertext = ct;
  var plaintxt = new Array(ciphertext[_0x8663[1]]);
  for (var b = 0; b < nBlocks; b++) {
    for (var c = 0; c < 4; c++) {
      counterBlock[15 - c] = ((b) >>> c * 8) & 0xff;
    };
    for (var c = 0; c < 4; c++) {
      counterBlock[15 - c - 4] = (((b + 1) / 0x100000000 - 1) >>> c * 8) & 0xff;
    };
    var cipherCntr = Aes[_0x8663[0]](counterBlock, keySchedule);
    var plaintxtByte = new Array(ciphertext[b][_0x8663[1]]);
    for (var i = 0; i < ciphertext[b][_0x8663[1]]; i++) {
      plaintxtByte[i] = cipherCntr[i] ^ ciphertext[b][_0x8663[16]](i);
      plaintxtByte[i] = String[_0x8663[21]](plaintxtByte[i]);
    };
    plaintxt[b] = plaintxtByte[_0x8663[23]](_0x8663[14]);
  };
  var plaintext = plaintxt[_0x8663[23]](_0x8663[14]);
  plaintext = Utf8[_0x8663[25]](plaintext);
  return plaintext;
};
var Base64 = {};
Base64[_0x8663[26]] = _0x8663[27];
Base64[_0x8663[15]] = function(str, utf8encode) {
  utf8encode = (typeof utf8encode == _0x8663[28]) ? false : utf8encode;
  var o1, o2, o3, bits, h1, h2, h3, h4, e = [],
    pad = _0x8663[14],
    c, plain, coded;
  var b64 = Base64[_0x8663[26]];
  plain = utf8encode ? str[_0x8663[29]]() : str;
  c = plain[_0x8663[1]] % 3;
  if (c > 0) {
    while (c++ < 3) {
      pad += _0x8663[30];
      plain += _0x8663[31];
    };
  };
  for (c = 0; c < plain[_0x8663[1]]; c += 3) {
    o1 = plain[_0x8663[16]](c);
    o2 = plain[_0x8663[16]](c + 1);
    o3 = plain[_0x8663[16]](c + 2);
    bits = o1 << 16 | o2 << 8 | o3;
    h1 = bits >> 18 & 0x3f;
    h2 = bits >> 12 & 0x3f;
    h3 = bits >> 6 & 0x3f;
    h4 = bits & 0x3f;
    e[c / 3] = b64[_0x8663[32]](h1) + b64[_0x8663[32]](h2) + b64[_0x8663[32]](h3) + b64[_0x8663[32]](h4);
  };
  coded = e[_0x8663[23]](_0x8663[14]);
  coded = coded[_0x8663[17]](0, coded[_0x8663[1]] - pad[_0x8663[1]]) + pad;
  return coded;
};
Base64[_0x8663[25]] = function(str, utf8decode) {
  utf8decode = (typeof utf8decode == _0x8663[28]) ? false : utf8decode;
  var o1, o2, o3, h1, h2, h3, h4, bits, d = [],
    plain, coded;
  var b64 = Base64[_0x8663[26]];
  coded = utf8decode ? str[_0x8663[33]]() : str;
  for (var c = 0; c < coded[_0x8663[1]]; c += 4) {
    h1 = b64[_0x8663[34]](coded[_0x8663[32]](c));
    h2 = b64[_0x8663[34]](coded[_0x8663[32]](c + 1));
    h3 = b64[_0x8663[34]](coded[_0x8663[32]](c + 2));
    h4 = b64[_0x8663[34]](coded[_0x8663[32]](c + 3));
    bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;
    o1 = bits >>> 16 & 0xff;
    o2 = bits >>> 8 & 0xff;
    o3 = bits & 0xff;
    d[c / 4] = String[_0x8663[21]](o1, o2, o3);
    if (h4 == 0x40) {
      d[c / 4] = String[_0x8663[21]](o1, o2);
    };
    if (h3 == 0x40) {
      d[c / 4] = String[_0x8663[21]](o1);
    };
  };
  plain = d[_0x8663[23]](_0x8663[14]);
  return utf8decode ? plain[_0x8663[33]]() : plain;
};
var Utf8 = {};
Utf8[_0x8663[15]] = function(strUni) {
  var strUtf = strUni[_0x8663[35]](/[\u0080-\u07ff]/g, function(c) {
    var cc = c[_0x8663[16]](0);
    return String[_0x8663[21]](0xc0 | cc >> 6, 0x80 | cc & 0x3f);
  });
  strUtf = strUtf[_0x8663[35]](/[\u0800-\uffff]/g, function(c) {
    var cc = c[_0x8663[16]](0);
    return String[_0x8663[21]](0xe0 | cc >> 12, 0x80 | cc >> 6 & 0x3F, 0x80 | cc & 0x3f);
  });
  return strUtf;
};
Utf8[_0x8663[25]] = function(strUtf) {
  var strUni = strUtf[_0x8663[35]](/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g, function(c) {
    var cc = ((c[_0x8663[16]](0) & 0x0f) << 12) | ((c[_0x8663[16]](1) & 0x3f) << 6) | (c[_0x8663[16]](2) & 0x3f);
    return String[_0x8663[21]](cc);
  });
  strUni = strUni[_0x8663[35]](/[\u00c0-\u00df][\u0080-\u00bf]/g, function(c) {
    var cc = (c[_0x8663[16]](0) & 0x1f) << 6 | c[_0x8663[16]](1) & 0x3f;
    return String[_0x8663[21]](cc);
  });
  return strUni;
};
