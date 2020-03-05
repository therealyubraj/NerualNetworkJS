function sigmoid(x){
  return 1/(1 + Math.exp(-x));
}
function DSigmoid(y){
  return y * (1 - y);
}
class Matrix {
  constructor(r_, c_) {
    this.mat = [];
    this.rows = r_;
    this.cols = c_;
    for (let i = 0; i < this.rows; i++) {
      this.mat[i] = [];
      for (let j = 0; j < this.cols; j++) {
        this.mat[i][j] = 0;
      }
    }
  }

  static matrixSum(a, b) {
    let tmp = new Matrix(a.rows, a.cols);
    for (let i = 0; i < a.rows; i++) {
      for (let j = 0; j < a.cols; j++) {
        tmp.mat[i][j] = a.mat[i][j] + b.mat[i][j];
      }
    }
    return tmp;
  }

  static matrixSub(a, b) {
    let tmp = new Matrix(a.rows, a.cols);
    for (let i = 0; i < a.rows; i++) {
      for (let j = 0; j < a.cols; j++) {
        tmp.mat[i][j] = a.mat[i][j] - b.mat[i][j];
      }
    }
    return tmp;
  }

  static hadamardMult(a, b) {
    let tmp = new Matrix(a.rows, a.cols);
    for (let i = 0; i < a.rows; i++) {
      for (let j = 0; j < a.cols; j++) {
        tmp.mat[i][j] = a.mat[i][j] * b.mat[i][j];
      }
    }
    return tmp;
  }

  static matrixMult(a, b) {
    if (a.cols == b.rows) {
      let tmp = new Matrix(a.rows, b.cols);
      for (let i = 0; i < tmp.rows; i++) {
        for (let j = 0; j < tmp.cols; j++) {
          let sum = 0;
          for (let k = 0; k < b.rows; k++) {
            sum += a.mat[i][k] * b.mat[k][j];
          }
          tmp.mat[i][j] = sum;
        }
      }
      return tmp;
    } else {
      console.error("Cant Multiply!!!");
    }
  }

  static transpose(a) {
    let tmp = new Matrix(a.cols, a.rows);
    for (let i = 0; i < tmp.rows; i++) {
      for (let j = 0; j < tmp.cols; j++) {
        tmp.mat[i][j] = a.mat[j][i];
      }
    }
    return tmp;
  }

  static toArray(m) {
    let res = [];
    let count = 0;
    for (let i = 0; i < m.rows; i++) {
      for (let j = 0; j < m.cols; j++) {
        res[count] = m.mat[i][j];
        count++;
      }
    }
    return res;
  }

  static fromArray(arr) {
    let res = new Matrix(arr.length, 1);
    let count = 0;
    for (let i = 0; i < res.rows; i++) {
      for (let j = 0; j < res.cols; j++) {
        res.mat[i][j] = arr[count];
        count++;
      }
    }
    return res;
  }

  static copyMatrix(a) {
    let res = new Matrix(a.rows, a.cols);
    for (let i = 0; i < a.rows; i++) {
      for (let j = 0; j < a.cols; j++) {
        res.mat[i][j] = a.mat[i][j];
      }
    }
    return res;
  }

  static matrixMap(a, fn) {
    let tmp = new Matrix(a.rows, a.cols);
    tmp = Matrix.copyMatrix(a);
    for (let i = 0; i < a.rows; i++) {
      for (let j = 0; j < a.cols; j++) {
        tmp.mat[i][j] = fn(tmp.mat[i][j]);
      }
    }
    return tmp;
  }

  randomize() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.mat[i][j] = Math.random() * 2 - 1;
      }
    }
  }

  scalarAdd(n) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.mat[i][j] += n;
      }
    }
  }

  scalarMult(n) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.mat[i][j] *= n;
      }
    }
  }
  matrixSum(b) {
    let tmp = new Matrix(this.rows, this.cols);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.mat[i][j] += b.mat[i][j];
      }
    }
    return tmp;
  }

  mutate(mr){
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if(Math.random() < mr){
          this.mat[i][j] += randomGaussian(0,0.1);
        }
      }
    }
  }
}
