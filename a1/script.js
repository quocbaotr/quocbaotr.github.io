function showContent(imageId) {
  const content = document.getElementById("content");
  content.style.display = "block";

  // Tạo nội dung tương ứng với hình ảnh được chọn
  const contentText = getContentText(imageId);
  content.innerHTML = contentText;
}

function getContentText(imageId) {
  // Đặt nội dung tương ứng với từng hình ảnh ở đây
  switch (imageId) {
      case 1:
          return "Nội dung của hình 1";
      case 2:
          return "Nội dung của hình 2";
      case 3:
          return "Nội dung của hình 3";
      case 4:
          return "Nội dung của hình 4";
      default:
          return "Nội dung mặc định";
  }
}
