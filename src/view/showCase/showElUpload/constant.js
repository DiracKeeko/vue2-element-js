function toBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    let imgResult = "";
    reader.readAsDataURL(file);
    reader.onload = function () {
      imgResult = reader.result;
    };
    reader.onerror = function (error) {
      reject(error);
    };
    reader.onloadend = function () {
      resolve(imgResult);
    };
  });
};

const notificationPictureMaxSize = 1600 * 1024;
const notificationPictureWidth = 1200;
const notificationPictureHeight = 900;

function validateImage({
  imageData,
  imageWidth = notificationPictureWidth,
  imageHeight = notificationPictureHeight,
  maxSize = notificationPictureMaxSize,
}) {
  return new Promise((resolve, reject) => {
    if (!imageData.url) {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject("图片上传异常");
    }
    const image = new Image();
    image.src = imageData.url;

    // if (imageData.size > maxSize) {
    //   // eslint-disable-next-line prefer-promise-reject-errors
    //   reject(`图片大小不能超过${Math.floor(maxSize / 1024)}KB`);
    // }
    // resolve(imageData);
    
    image.onload = function() {
      if (imageData.size > maxSize) {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject(`图片大小不能超过${Math.floor(maxSize / 1024)}KB`);
      }
      if (image.width !== imageWidth && image.height !== imageHeight) {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject(`图片尺寸大小应为${imageWidth} * ${imageHeight}`);
      }
      resolve(imageData);
    }
  });
};

export { toBase64, validateImage };