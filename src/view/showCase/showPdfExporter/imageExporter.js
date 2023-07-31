import html2Canvas from "html2canvas";

async function getImageBase64Url(element) {
  const { scrollWidth, scrollHeight } = element;
  const canvasWidth = scrollWidth + 10;
  const canvasHeight = scrollHeight + 10;
  const options = {
    scale: 2,
    width: canvasWidth,
    height: canvasHeight,
    useCORS: true,
    allowTaint: true,
    taintTest: false,
    logging: false
  };
  const canvas = await html2Canvas(element, options);
  return canvas.toDataURL("image/jpeg", 1.0);
}

async function getImage(title, { element, text, logo }) {
  try {
    const imageUrl = await getImageBase64Url(element);

    // 创建外层容器元素 <div class="image-export-template">
    const container = document.createElement("div");
    container.classList.add("image-export-template");
    container.style.padding = "20px 20px 0";
    container.style.minWidth = "800px";

    // 创建图片元素 <img class="content" src="imageUrl" />
    const image = document.createElement("img");
    image.classList.add("content");
    image.src = imageUrl; // 设置图片的 URL

    // 创建分割线元素 <div class="cutline"></div>
    const cutline = document.createElement("div");
    cutline.classList.add("cutline");
    cutline.style.width = "100%";
    cutline.style.borderBottom = "1px solid #eee";

    // 创建底部元素 <div class="footer">
    const footer = document.createElement("div");
    footer.classList.add("footer");
    footer.style.height = "50px";
    footer.style.display = "flex";
    footer.style.justifyContent = "space-between";
    footer.style.alignItems = "center";

    // 创建左侧底部文本元素 <span class="footer-left">页面数据来源于wind</span>
    const footerLeft = document.createElement("span");
    footerLeft.classList.add("footer-left");
    footerLeft.textContent = text;
    footerLeft.style.fontSize = "12px";
    footerLeft.style.color = "#999";

    // 创建右侧底部图片元素 <img class="footer-right" :src="vue2logo" />
    const footerRight = document.createElement("img");
    footerRight.classList.add("footer-right");
    footerRight.src = logo; // 设置图片的 URL
    footerRight.style.width = "40px";
    footerRight.style.height = "40px";

    // 将元素添加到 DOM 树中
    footer.appendChild(footerLeft);
    footer.appendChild(footerRight);
    container.appendChild(image);
    container.appendChild(cutline);
    container.appendChild(footer);

    const { scrollWidth, scrollHeight } = container;
    const canvasWidth = scrollWidth;
    const canvasHeight = scrollHeight;

    const opts = {
      scale: 2,
      width: canvasWidth,
      height: canvasHeight,
      useCORS: true,
      allowTaint: true,
      taintTest: false,
      logging: false
    };
    // document.body.appendChild(container);
    const canvas = await html2Canvas(element, opts);
    const imgUrl = canvas.toDataURL("image/jpeg", 1.0);

    const link = document.createElement("a");
    link.href = imgUrl;
    link.download = title;
    link.click();
  } catch (err) {
    console.log(err);
  }
}

export { getImage };
