import fs from 'fs';
import path from 'path';

export function updateFile(filename, data) {
  return new Promise((resolve, reject) => {
    const _path = path.resolve(__dirname, '..', 'data', filename);

    fs.writeFile(_path, JSON.stringify({ data }), 'utf8', err => {
      if (err) {
        reject(err);
        return;
      }
      resolve(true);
    });
  });
}

export function readFile(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(path.resolve(__dirname, '..', 'data', filename), 'utf8', (err, jsonString) => {
      if (err) {
        console.log('Error reading file from disk:', err);
        reject(false);
        return;
      }
      try {
        const dataObj = JSON.parse(jsonString);
        resolve(dataObj.data);
        return;
      } catch (err) {
        console.log('Error parse JSON string', err);
        reject(false);
        return;
      }
    });
  });
}
