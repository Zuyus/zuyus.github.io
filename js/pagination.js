// Pagination for project web
const dataProjectWeb = [
  {
    id: 1,
    img: "images/mxh.png",
    title: "Website Mạng Xã Hội",
    url: "https://youtu.be/vDpTy6zpT1w",
  },
  {
    id: 2,
    img: "images/tuyen_dung.png",
    title: "Website Tuyển Dụng",
    url: "https://youtu.be/zXEOhjuXlCc",
  },
  {
    id: 3,
    img: "images/ban_dt.png",
    title: "Website Bản Điện Thoại",
    url: "https://youtu.be/FQ4w0VUCEvA",
  },
];

const element = document.querySelector(".number-dots");
let itemPerPage = 3;
let totalPages = Math.ceil(dataProjectWeb.length / itemPerPage);
let currentPage = 1;
let start = 0;
let end = itemPerPage;

const renderProjectWeb = () => {
  let html = "";
  dataProjectWeb.forEach((item, index) => {
    if (index >= start && index < end) {
      html += `<div class="project-item padd-15">`;
      html += `<div class="project-item-inner shadow-dark">`;
      html += `<div class="project-img">`;
      html += `<img src="${item.img}" alt="">`;
      html += `</div><div class="project-info"><h4>${item.title}</h4><a href="${item.url}" target="_blank" class="icon"><i class="fa fa-youtube"></i></a></div></div></div>`;
      document.getElementById("project-web").innerHTML = html;
    } else {
      return;
    }
  });
};

renderProjectWeb();

if (totalPages > 5) {
  element.innerHTML = createPagination(totalPages, currentPage);
} else if (totalPages <= 1) {
  document.querySelector(".pagination").remove();
}

const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");

if (btnNext) {
  btnNext.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      start += itemPerPage;
      end += itemPerPage;
      if (totalPages > 5) {
        element.innerHTML = createPagination(
          totalPages,
          currentPage,
          start,
          end
        );
      }
      btnPrev.classList.remove("disabled-prev");
      renderProjectWeb();
    } else {
      swal.fire("Thông Báo", "Bạn đã ở trang cuối", "warning");
    }
  });
}
if (btnPrev) {
  btnPrev.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      start -= itemPerPage;
      end -= itemPerPage;
      if (totalPages > 5) {
        element.innerHTML = createPagination(
          totalPages,
          currentPage,
          start,
          end
        );
      }
      btnNext.classList.remove("disabled-next");
      renderProjectWeb();
    } else {
      swal.fire("Thông Báo", "Bạn đã ở trang đầu", "warning");
    }
  });
}

function createPagination(totalPages, page = 1) {
  let liTag = "";
  let active;
  let beforePage = page - 1;
  let afterPage = page + 1;
  if (page > 2) {
    liTag += `<li class="first numb" onclick="createPagination(totalPages, 1)"><span>1</span></li>`;
    if (page > 3) {
      liTag += `<li class="dots"><span>...</span></li>`;
    }
  }
  if (page == totalPages) {
    beforePage = beforePage - 2;
  } else if (page == totalPages - 1) {
    beforePage = beforePage - 1;
  }
  if (page == 1) {
    afterPage = afterPage + 2;
  } else if (page == 2) {
    afterPage = afterPage + 1;
  }
  for (var plength = beforePage; plength <= afterPage; plength++) {
    if (plength > totalPages) {
      continue;
    }
    if (plength == 0) {
      plength = plength + 1;
    }
    if (page == plength) {
      active = "active";
      currentPage = page;
      start = (page - 1) * itemPerPage;
      end = page * itemPerPage;
      renderProjectWeb();
    } else {
      active = "";
    }
    liTag += `<li class="numb ${active}" onclick="createPagination(totalPages, ${plength})"><span>${plength}</span></li>`;
  }
  if (page < totalPages - 1) {
    if (page < totalPages - 2) {
      liTag += `<li class="dots"><span>...</span></li>`;
    }
    liTag += `<li class="last numb" onclick="createPagination(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
  }
  element.innerHTML = liTag;
  return liTag;
}

// Pagiantion for project youtube
const dataProjectYTB = [
  {
    id: 1,
    img: "images/cnmt.png",
    title: "Cẩm Nang Máy Tính",
    url: "https://tinyurl.com/itsupports",
  },
  {
    id: 2,
    img: "images/tts.png",
    title: "Phần Mềm Tạo Giọng Đọc Nhân Tạo (Text To Speech)",
    url: "https://tinyurl.com/ttspy3",
  },
  {
    id: 3,
    img: "images/mern.png",
    title: "M.E.R.N Stack Cơ Bản",
    url: "https://tinyurl.com/mernstackbasic",
  },
];

const elementYTB = document.querySelector(".number-dots-ytb");
let itemPerPageYTB = 3;
let totalPagesYTB = Math.ceil(dataProjectYTB.length / itemPerPageYTB);
let currentPageYTB = 1;
let startYTB = 0;
let endYTB = itemPerPageYTB;

const renderProjectYTB = () => {
  let html = "";
  dataProjectYTB.forEach((item, index) => {
    if (index >= startYTB && index < endYTB) {
      html += `<div class="project-item padd-15">`;
      html += `<div class="project-item-inner shadow-dark">`;
      html += `<div class="project-img">`;
      html += `<img src="${item.img}" alt="">`;
      html += `</div><div class="project-info"><h4>${item.title}</h4><a href="${item.url}" target="_blank" class="icon"><i class="fa fa-youtube"></i></a></div></div></div>`;
      document.getElementById("project-ytb").innerHTML = html;
    } else {
      return;
    }
  });
};

renderProjectYTB();

if (totalPagesYTB > 5) {
  elementYTB.innerHTML = createPaginationYTB(totalPagesYTB, currentPageYTB);
} else if (totalPagesYTB <= 1) {
  document.querySelector(".pagination-ytb").remove();
}

const btnNextYTB = document.querySelector(".btn-next-ytb");
const btnPrevYTB = document.querySelector(".btn-prev-ytb");

if (btnNextYTB) {
  btnNextYTB.addEventListener("click", () => {
    if (currentPageYTB < totalPagesYTB) {
      currentPageYTB++;
      startYTB += itemPerPageYTB;
      endYTB += itemPerPageYTB;
      if (totalPagesYTB > 5) {
        elementYTB.innerHTML = createPaginationYTB(
          totalPagesYTB,
          currentPageYTB,
          startYTB,
          endYTB
        );
      }
      btnPrevYTB.classList.remove("disabled-prev");
      renderProjectYTB();
    } else {
      swal.fire("Thông Báo", "Bạn đã ở trang cuối", "warning");
    }
  });
}
if (btnPrevYTB) {
  btnPrevYTB.addEventListener("click", () => {
    if (currentPageYTB > 1) {
      currentPageYTB--;
      startYTB -= itemPerPageYTB;
      endYTB -= itemPerPageYTB;
      if (totalPagesYTB > 5) {
        elementYTB.innerHTML = createPaginationYTB(
          totalPagesYTB,
          currentPageYTB,
          startYTB,
          endYTB
        );
      }
      btnNextYTB.classList.remove("disabled-next");
      renderProjectYTB();
    } else {
      swal.fire("Thông Báo", "Bạn đã ở trang đầu", "warning");
    }
  });
}

function createPaginationYTB(totalPages, page = 1) {
  let liTag = "";
  let active;
  let beforePage = page - 1;
  let afterPage = page + 1;
  if (page > 2) {
    liTag += `<li class="first numb" onclick="createPaginationYTB(totalPagesYTB, 1)"><span>1</span></li>`;
    if (page > 3) {
      liTag += `<li class="dots"><span>...</span></li>`;
    }
  }
  if (page == totalPages) {
    beforePage = beforePage - 2;
  } else if (page == totalPages - 1) {
    beforePage = beforePage - 1;
  }
  if (page == 1) {
    afterPage = afterPage + 2;
  } else if (page == 2) {
    afterPage = afterPage + 1;
  }
  for (var plength = beforePage; plength <= afterPage; plength++) {
    if (plength > totalPages) {
      continue;
    }
    if (plength == 0) {
      plength = plength + 1;
    }
    if (page == plength) {
      active = "active";
      currentPageYTB = page;
      startYTB = (page - 1) * itemPerPageYTB;
      endYTB = page * itemPerPageYTB;
      renderProjectYTB();
    } else {
      active = "";
    }
    liTag += `<li class="numb ${active}" onclick="createPaginationYTB(totalPagesYTB, ${plength})"><span>${plength}</span></li>`;
  }
  if (page < totalPages - 1) {
    if (page < totalPages - 2) {
      liTag += `<li class="dots"><span>...</span></li>`;
    }
    liTag += `<li class="last numb" onclick="createPaginationYTB(totalPagesYTB, ${totalPages})"><span>${totalPages}</span></li>`;
  }
  elementYTB.innerHTML = liTag;
  return liTag;
}
